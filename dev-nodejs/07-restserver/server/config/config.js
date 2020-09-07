
/*
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;


/*
 * Entorno
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/*
 * Vencimiento del Token
 * 60 Segundo
 * 60 minutos
 * 24 horas
 * 30 días
 */
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


/*
 * SEED Autenticación
 *
 */
process.env.SEED = process.env.SEED || 'este-el-seed-desarrollo';


/*
 * Bases de Datos
 */
let urlBD = "";

if(process.env.NODE_ENV === 'dev') {
  urlBD = 'mongodb://localhost:27017/cafe';
} else {
  urlBD = process.env.MONGO_URI;
}

process.env.URLDB = urlBD;


/*
 * Google Client ID
 */
 process.env.CLIENT_ID = process.env.CLIENT_ID || '681703524169-epni4qlr5cbs059ng9v4qqu6ubqsg13n.apps.googleusercontent.com';
