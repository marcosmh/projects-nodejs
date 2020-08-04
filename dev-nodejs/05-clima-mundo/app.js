
const axios = require('axios');
const argv = require('./config/yargs').argv;
const encodeUrl = encodeURI(argv.direccion);

const instance = axios.create({
  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
  headers: {'X-RapidAPI-Key': 'ed9cb87849mshb5c97d5450f803cp126c8ejsn99f98fa43cad'}
});

instance.get()
    .then(result => {
        console.log(result.data.Results);
    })
    .catch(error => {
        console.log("Error: ",error);
    })
