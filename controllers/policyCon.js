module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let policyControllerCallbacks = (request, response) => {
          
          let policyInfo = request.params.id;
          console.log("blueeeeee ksyyyyy!!", request.params.id)

            db.allpolicyinfo.policiesInfo(policyInfo, (error, policyInfo) => {
                const data = {
                    policyInfo: policyInfo
                };
                console.log("this is one client BANNANANAAN" , data);
                response.render('policy', data);

            //   const data = {
            //       policiesList: allPolicies,
            //   };
              // console.log("this is the data bananana", data)
              // const callback = (error, registeruser) => {
              
          })
  };

  
    /*
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: policyControllerCallbacks,
    };
  
  }
  