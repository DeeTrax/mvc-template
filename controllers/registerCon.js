const sha256 = require('js-sha256');
module.exports = (db) => {

  let SALT = "blueflower";

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

        let registeredPassword = request.body.password
        let hashedValue = sha256(SALT + registeredPassword);

        const data = [
            request.body.name,
            request.body.email,
            hashedValue
        ];


        const callback = (error, registeruser) => {
            response.redirect("/login")
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
  