const { Router } = require('express');
const { createPokemon, findPokemonById , getAllPokemons } = require('./controllers/pokemons')
const { getTypes } = require('./controllers/types')


const router = Router();


// ----- GET ALL POKEMONS AND BY NAME --------------------------------

router.get('/pokemons/', async(req, res) => {
    const { name } = req.query
 
    try {
        res.json(await getAllPokemons(name))
    } catch (error) {
        res.status(400).json(error.message)
    }

});

/// -- POST POKEMON A DB ----
router.post('/pokemons', async (req, res) => {   /// hacemos un POST porque no se deben mandar datos por req en GET
    const { name, hp, attack , defense, speed, height, weight, types } = req.body
 
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
