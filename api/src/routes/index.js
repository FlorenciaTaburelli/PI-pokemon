const { Router } = require('express');
const { createPokemon, findPokemonById , getAllPokemons, deletePokemon } = require('./controllers/pokemons')
const { getTypes } = require('./controllers/types')


const router = Router();


// ----- GET ALL POKEMONS AND BY NAME --------------------------------

router.get('/pokemons/', async(req, res) => {
    const { name } = req.query
 
    try {
        res.status(200).json(await getAllPokemons(name))
    } catch (error) {
        res.status(400).json(error.message)
    }

});

/// -- POST POKEMON A DB ----
router.post('/pokemons', async (req, res) => {   
    const { name, hp, attack , defense, speed, height, weight, types } = req.body
 
    try {
        res.status(200).json(await createPokemon(name, hp, attack , defense, speed, height, weight, types))
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

router.delete('/delete-pokemons/:id', async (req, res) => {
    let { id } = req.params
    try {
        res.json(await deletePokemon(id))
    } catch (error) {
        res.status(400).send(error.message)
    }
});




module.exports = router;
