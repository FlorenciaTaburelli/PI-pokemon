const axios = require('axios');


export function getImagen(){
  const gatos = axios.get('https://api.thecatapi.com/v1/images/search').then(res => res.data[0].url)
  return gatos
}
