
const { Pokemon, Type } = require('../../db')
const axios = require('axios');
const db = require('../../db');



// GET  to pokemon API  
const getApiPokemons = async () => {
    try {
        
        promiseList = []  // arreglo de promesas
        const url = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40') // primera peticion, obtengo name + url
       
        url.data.results.forEach(el => { 
           promiseList.push(axios.get(el.url).then(res => res.data)) // pusheo las promesas al arreglo
        })

      const pokeData = Promise.all(promiseList) // ejecuto todas las promesas al mismo tiempo c
       .then(res => res.map(poke => {
           const pokemon = {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
            types: poke.types.map(el => el.type.name),
            hp: poke.stats[0].base_stat,
            attack: poke.stats[1].base_stat,
            defense: poke.stats[2].base_stat,
            speed: poke.stats[5].base_stat,
            height: poke.height,
            weight: poke.weight
           }
           return pokemon
       }))

     return await pokeData
    } catch (error) {
        return error.message 
    }
};

// GET to DB
const getDbPokemons = async () => {
  
    try {
        const dbPokemons = await Pokemon.findAll({
            include:{
                model: Type,
                through: {attributes: [] },
                attributes: ["name"],
              }
        })
        const pokeData = dbPokemons.map(d => d.dataValues)
        const allDbPokemons = pokeData.map(d =>{
            d.types = d.types.map(t => t.dataValues.name)   /// modifico los types para quitarlos del objeto
            return d
        })
      
        return allDbPokemons
    } catch (error) {
        return error.message 
    }
};


// ------ GET POKEMON BY NAME AND JOIN GET ALL --------------------------------

const getAllPokemons = async(name) => {
    try {
            const apiPoke = await getApiPokemons()
            const dbPoke = await getDbPokemons()

            const allPokes = [ ...dbPoke, ...apiPoke]

            allPokes.map(p =>{
               p.name =  p.name.charAt(0).toUpperCase() + p.name.slice(1)
               return p
            })
           
            if(name){
                const pokemonByName = allPokes.find(p => p.name.toLowerCase() === name.toLowerCase())
                if(pokemonByName) return pokemonByName
                return {msg: "There's no pokemon with that name"}
            }else{
                return allPokes
            }
    } catch (error) {
        return error.message
    }
    
}

// ------ GET POKEMON BY ID --------------------------------
const findPokemonById = async(id) => {
   
    try {
        const apiPoke = await getApiPokemons()
        const dbPoke = await getDbPokemons()
        const allPokes = [...apiPoke, ...dbPoke]

        const pokemonById = allPokes.find(p => p.id == id)

        if(pokemonById) return pokemonById
        return ({msg: "That pokemon doesn't exist"})
        
    } catch (error) {
        return error.message 
    }
};

/// POST NEW POKEMON IN DB
const createPokemon = async (name, hp, attack , defense, speed, height, weight, types) => {  
    
    try {
        types = types.map(t => t.toLowerCase())  // del front vienen los types en mayus
        const typeCount = await Type.count()
        //---   RANDOM IMG ---- -
        const gatos = await axios.get('https://api.thecatapi.com/v1/images/search')
        const image = gatos.data[0].url
  
       if(typeCount > 0){
            const [newPokemon, created] = await Pokemon.findOrCreate({
                where: {name},
                defaults: {
                name: name.toLowerCase(),
                img: image,
                hp, 
                attack , 
                defense, 
                speed, 
                height, 
                weight
                }
            })

            
           if(created){   
              //-- Busco en el model Type los types pasados por parametro
            let arrayProm = await Promise.all(types.map(el => Type.findOne({where: {name: el}})))
            
            let typesFound = arrayProm.map(el => el.toJSON().id)
            
            await newPokemon.addType(typesFound)
          
            const pokemonCreated = await Pokemon.findByPk(newPokemon.id,{
                        include:{
                            model: Type,
                            through: {attributes: []},
                            attributes: ["name"]
                          }
                         }) 
            return pokemonCreated
            } 
            return `The name ${name} already exists`
        }
        
        return 'Types must be upload'
        
    
    } catch (error) {
      return error.message 
    }
};

const deletePokemon = async(id) => {
   
    try {
        let pokeDeleted = await Pokemon.destroy({
            where: {
                id: id
            }
        })
        return ({msg: "That pokemon doesn't exist"})
        
    } catch (error) {
        return error.message 
    }
};



module.exports = {
    getApiPokemons,
    getDbPokemons,
    createPokemon,
    findPokemonById,
    getAllPokemons,
    deletePokemon
};