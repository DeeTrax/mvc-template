module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let loginControllerCallbacks = (request, response) => {
          response.render('login');
    };
   
    let loginUserControllerCallbacks = (request, response) => {
        console.log("this is the login!!!!!" , request.body)
        const data = [
            request.body.name,
            request.body.email,
            request.body.password
        ];

        const callback = (error, registeruser) => {
            response.redirect("/clientele");
          }

        db.loginuser.loginAll(data, callback);
  };

  
  
    /*
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: loginControllerCallbacks,
      loginuser: loginUserControllerCallbacks
    };
  
  }
  