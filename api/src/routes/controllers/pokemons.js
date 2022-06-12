
const { Pokemon, Type } = require('../../db')
const axios = require('axios');
const db = require('../../db');



// GET  a api externa 
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
            img: poke.sprites.front_default,
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

// GET a mi DB
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
                return {msg: 'El pokemon buscado no existe'}
            }else{
                return allPokes
            }
    } catch (error) {
        return error.message
    }
    
}


// ------ GET POKEMON BY NAME --------------------------------
// const getPokemonsByName = async(name) => {
    
//     try {
//         const dbPokemon = await Pokemon.findOne({
//             where: {name},
//             attributes: ['id', 'name', 'img', 'createdPokemon'],
//             include:{
//                 model: Type,
//                 through: {attributes: []},
//                 attributes: ["name"]
//               }
//         })
//         if(dbPokemon){
//             return dbPokemon
//         }else{
//             const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//             const pokeApiData = {
//               id: apiPoke.data.id,
//               name: apiPoke.data.name,
//               img: apiPoke.data.sprites.front_default,
//               types: apiPoke.data.types.map(el => el.type.name),
//               hp: apiPoke.data.stats[0].base_stat,
//               attack: apiPoke.data.stats[1].base_stat,
//               defense: apiPoke.data.stats[2].base_stat,
//               speed: apiPoke.data.stats[5].base_stat,
//               height: apiPoke.data.height,
//               weight: apiPoke.data.weight
//              }

//              if(pokeApiData) return pokeApiData
//             return 'rta ok El pokemon no existe'  // esta rta nunca se muestra
//         }
//     } catch (error) {
//         throw Error('El pokemon no existe')
//     }
// }

// ------ GET POKEMON BY ID --------------------------------
const findPokemonById = async(id) => {
   
    try {
        const apiPoke = await getApiPokemons()
        const dbPoke = await getDbPokemons()
        const allPokes = [...apiPoke, ...dbPoke]

       // console.log(allPokes.find(p => p.id == id))

        const pokemonById = allPokes.find(p => p.id == id)

        if(pokemonById) return pokemonById
        return 'El pokemon buscado no existe'
        

           
        // if(id.length < 4){  /// porque no hay mas de 1000 pokes en la api

        // //    const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // //    const pokeFound = { 
        // //       id: apiPoke.data.id,
        // //       name: apiPoke.data.name,
        // //       img: apiPoke.data.sprites.front_default,
        // //       types: apiPoke.data.types.map(el => el.type.name),
        // //       hp: apiPoke.data.stats[0].base_stat,
        // //       attack: apiPoke.data.stats[1].base_stat,
        // //       defense: apiPoke.data.stats[2].base_stat,
        // //       speed: apiPoke.data.stats[5].base_stat,
        // //       height: apiPoke.data.height,
        // //       weight: apiPoke.data.weight
        //    }
        //    return pokeFound ? pokeFound : 'El pokemon no existe'
        // }else{
        //     const dbPoke = await Pokemon.findByPk(id,{
        //         include:{
        //             model: Type,
        //             through: {attributes: []},
        //             attributes: ["name"]
        //           }
        //     }) 
        //     const { dataValues } = dbPoke;
        //     dataValues.types = dataValues.types.map((t) => t.name)
        //     return   dbPoke ? dataValues : 'El pokemon no existe'
        // }
        
    } catch (error) {
        return error.message 
    }
};

/// CREAR UN NUEVO POKEMON A LA BASE DE DATOS -- POST
const createPokemon = async (name, hp, attack , defense, speed, height, weight, types) => {   /// hacemos un POST porque no se deben mandar datos por req en GET
    
    try {
        //- ---- Busco o creo el pokemon
        const typeCount = await Type.count()
        //---   IMAGEN RANDOM ---- -
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

            
           if(created){   // si lo creo le agrego los types
              //---- Busco en el model Type los types pasados por parametro
            let arrayProm = await Promise.all(types.map(el => Type.findOne({where: {name: el}})))
          
            let typesEncontrados = arrayProm.map(el => el.toJSON().id)
           
            await newPokemon.addType(typesEncontrados)
            ///      ('el pokemon fue creado con exito')                   15, 2
            return newPokemon
            } 
            return `el pokemon ${name} ya existe`
        }
        
        return 'no se cargaron los types'
        
    
    } catch (error) {
      return error.message 
    }
};


module.exports = {
    getApiPokemons,
    getDbPokemons,
    createPokemon,
    findPokemonById,
    //getPokemonsByName,
    getAllPokemons
};