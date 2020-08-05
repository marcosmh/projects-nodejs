const axios = require('axios');


const getClima = async (lat = 35, lng = 139) => {

  const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f5fd064576994ba8892c809146d08c62&units=metric`);
  
  return result.data.main.temp;
}


module.exports = {
  getClima
}
