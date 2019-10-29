const sha256 = require('js-sha256');
module.exports = (db) => {

  let SALT = "blueflower";

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

        let loginPassword = request.body.password;
        let hashedValue = sha256(SALT + loginPassword);
        // console.log("thshadashdasdasdsa", hashedValue)
        let user_email = request.body.email;
        if (loginPassword || user_email) {
          
            db.loginuser.loginAll(user_email, (error, results) => {
      
              let dbPassword = request.body.password;
  
              console.log("ahdhasdashdahsdaishdisahdas", results)
          
  
                if (error) {
                  // response.redirect('/login');
                  response.send("DATABASE ERROR!")
                } else {
                  if (results === null) {
                    response.send("Wrong Email!! This User Doesn't Exist")
                  } else if ( results.password === hashedValue ) {
                    response.redirect('/clientele');
                  } else {
                    response.send('Wrong Password!')
                  }
                } 
              });
            } else {
              response.send("Please Input Something")
    
            }
            
      };
                
                
                
                // ( results.password === hashedValue ) {
                //   response.redirect('/clientele');
                // } else if (error) {
                //   console.log("whyyyyyyyyyyyy")
                  
                //   response.redirect('/login');
                // }
                // let data = {
                //     userEmail: email,
                //     loggedIn: resultsd
                // }
            // response.redirect('/clientele', data);
          
        // } else {
        //   response.redirect('/login');
        // }; 
 

  
  
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
  