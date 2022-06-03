const { Router } = require('express');
const { getApiPokemons, getDbPokemons, createPokemon, findPokemonById, getPokemonsByName } = require('./controllers/pokemons')
const { getTypes } = require('./controllers/types')


const router = Router();

// ----  GET ALL POKEMONS (API EXTERNA Y DB)  /// ---- GET BY NAME  POR QUERY -----
router.get('/pokemons', async(req, res) => {
    const { name } = req.query
    if(name) {   ///  si me pasan por query un name lo busca, sino trae todos
        try {
            res.json(await getPokemonsByName(name))
        } catch (error) {
            res.status(400).json(error.message)
        }
    }else{
       try {
            let externalApi = await getApiPokemons()
            let dbApi = await getDbPokemons()
            res.json([...dbApi, ...externalApi]) 
        } catch (error) {
            res.status(400).json(error.message)
        }  
    }

});

// ----- GET POKEMONS BY NAME --------------------------------

router.get('/pokemons', async(req, res) => {
    const { name } = req.query
    try {
        res.json(await getPokemonsByName(name))
    } catch (error) {
        res.status(400).json(error.message)
    }

});

/// -- POST POKEMON A DB ----
router.post('/pokemons', async (req, res) => {   /// hacemos un POST porque no se deben mandar datos por req en GET
    const { name, hp, attack , defense, speed, height, weight, types } = req.body.newPokemon
   console.log(req.body)
    try {
        res.json(await createPokemon(name, hp, attack , defense, speed, height, weight, types))
    } catch (error) {
        res.status(400).json(error.message)
    }
});

// ------ GET TYPES OF POKEMONS
router.get('/types', async (req, res) => {
    try {   
        res.json(await getTypes())
    } catch (error) {
        res.status(400).json(error.message)
    }
});

//----- GET POKEMONS BY ID ---
router.get('/pokemons/:id', async (req, res) => {
    const { id } = req.params
    try {
        res.json(await findPokemonById(id))
    } catch (error) {
        res.status(400).json(error.message)
    }
});




module.exports = router;
