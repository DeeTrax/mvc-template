module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let registerControllerCallbacks = (request, response) => {
          response.render('register');
    };
   
    let registerUserControllerCallbacks = (request, response) => {
        console.log("this is the request!!!!!" , request.body)
        const data = [
            request.body.name,
            request.body.email,
            request.body.password
        ];

        const callback = (error, registeruser) => {
            response.send("registered new userrrrrrrrr")
            // response.render('pokemon/index',  { allPokemon });
          }

        db.registeruser.registerAll(data, callback);
  };

  
  
    /*
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: registerControllerCallbacks,
      registeruser: registerUserControllerCallbacks
    };
  
  }
  