

const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);
    console.log("encodeUrl: "+encodeUrl);

    const instance = axios.create({
      baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
      headers: {'X-RapidAPI-Key': 'ed9cb87849mshb5c97d5450f803cp126c8ejsn99f98fa43cad'}
    });

    const result = await instance.get();

    console.log("result: "+result);

    if(result.data.Results === 0) {
       throw new Error(`No hay resultados para ${dir}`);
    }

    const data = result.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

        return {
          direccion,
          lat,
          lng
        }

}

module.exports = {
  getLugarLatLng
}
