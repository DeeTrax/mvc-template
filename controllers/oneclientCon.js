module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let oneClientInfoControllerCallbacks = (request, response) => {
        console.log("blueeeeee ksyyyyy!!", request.params.id)
        let clientInfo = request.params.id;

        db.oneclientinfo.oneClient(clientInfo, (error, clientInfo) => {
            const data = {
                clientInfo: clientInfo
            };
            console.log("this is one client BANNANANAAN" , data);
            response.render("oneClient", data)
        })
    }



//       db.policy.allPolicies((error, allPolicies)=>{
//           // console.log('result of querying database: ', allClients);
//           if (error) {
//               response.send('error in getting clients from database')

//           } else {
//               const data = {
//                   policiesList: allPolicies,
//               };
//               // console.log("this is the data bananana", data)
//               // const callback = (error, registeruser) => {
//               response.render('policy', data);
//           }
//       })
//   };

  
  
    /*
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        getOneClientInfo: oneClientInfoControllerCallbacks
    };
  
  }
  