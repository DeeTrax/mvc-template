/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'sirron',
    host: '127.0.0.1',
    database: 'project2',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const registerModelsFunction = require('./models/userMod');
const registerModelsObject = registerModelsFunction( pool );

const loginModelsFunction = require('./models/userMod');
const loginModelsObject = loginModelsFunction( pool );

const clientModelsFunction = require('./models/userMod');
const clientModelsObject = clientModelsFunction( pool );

const policyModelsFunction = require('./models/policyMod');
const policyModelsObject = policyModelsFunction( pool );

const clientInfoModelsFunction = require('./models/policyMod');
const clientInfoModelsObject = clientInfoModelsFunction( pool );

const policyInfoModelsFunction = require('./models/policyMod');
const policyInfoModelsObject = policyInfoModelsFunction( pool );

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */

  // users: userModelsObject,
  registeruser: registerModelsObject,
  loginuser: loginModelsObject,
  clientuser: clientModelsObject,
  policy: policyModelsObject,
  oneclientinfo: clientInfoModelsObject,
  allpolicyinfo: policyInfoModelsObject
};
