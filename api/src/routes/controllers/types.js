const { Pokemon, Type } = require('../../db')
const axios = require('axios')

const getTypes = async () => {
    try {
        const url = await axios.get('https://pokeapi.co/api/v2/type') // primera peticion, obtengo name + url
        const types = url.data.results.map(el => el.name)
        await types.forEach(type => Type.create({name: type}))
        return types
    } catch (error) {
        console.log(error.message)
    }
};



module.exports = {
    getTypes
}