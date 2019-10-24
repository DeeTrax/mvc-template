module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let policyControllerCallbacks = (request, response) => {

      db.policy.allPolicies((error, allPolicies)=>{
          // console.log('result of querying database: ', allClients);
          if (error) {
              response.send('error in getting clients from database')

          } else {
              const data = {
                  policiesList: allPolicies,
              };
              // console.log("this is the data bananana", data)
              // const callback = (error, registeruser) => {
              response.render('policy', data);
          }
      })
  };
   
//     let loginUserControllerCallbacks = (request, response) => {
//         console.log("this is the login!!!!!" , request.body)
//         const data = [
//             request.body.name,
//             request.body.email,
//             request.body.password
//         ];

//         const callback = (error, registeruser) => {
//             response.send("logged in user!!!")
//           }

//         db.loginuser.loginAll(data, callback);
//   };

  
  
    /*
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: policyControllerCallbacks,
    };
  
  }
  