import axios from 'axios'

export default async function randomQuoteGen (){
    const randomNumber =  Math.floor(Math.random() * (31 - 1)) + 1;
     try {
        
        const randomQuote = await axios.get(`https://pokeapi.co/api/v2/characteristic/${randomNumber}/`)
        const quotes = await randomQuote.data.descriptions.filter(d => d.language.name === 'es' || d.language.name === 'en')
        const finalQuotes =  quotes.map(q => q.description)
       
            return  await finalQuotes
     } catch (error) {
        console.log(error)
     }
    
}
