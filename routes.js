module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  //require controller for home page
  const homeControllerCallbacks = require('./controllers/homeCon')(allModels);
  app.get('/', homeControllerCallbacks.index);

  //require controller for register 
  const registerControllerCallbacks = require('./controllers/registerCon')(allModels);
  app.get('/register', registerControllerCallbacks.index);
  app.post('/register', registerControllerCallbacks.registeruser);

  //require controller for login
  const loginControllerCallbacks = require('./controllers/loginCon')(allModels);
  app.get('/login', loginControllerCallbacks.index);
  app.post('/login', loginControllerCallbacks.loginuser);

  //require controller for clientele page
  const clienteleControllerCallbacks = require('./controllers/clienteleCon')(allModels);
  app.get('/clientele', clienteleControllerCallbacks.index);

  //require controller for policy page
  const policyControllerCallbacks = require('./controllers/policyCon')(allModels);
  app.get('/policy', policyControllerCallbacks.index);

  //require controller for client info page
  const oneClientInfoControllerCallbacks = require('./controllers/oneclientCon')(allModels);
  app.get('/clientele/:id', oneClientInfoControllerCallbacks.getOneClientInfo);
  app.put('/clientele/:id', oneClientInfoControllerCallbacks.updateOneClientInfo);

};
