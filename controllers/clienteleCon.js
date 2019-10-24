module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let clienteleControllerCallbacks = (request, response) => {

        db.clientuser.allClient((error, allClients)=>{
            // console.log('result of querying database: ', allClients);
            if (error) {
                response.send('error in getting clients from database')

            } else {
                const data = {
                    clients: allClients,
                };
                // console.log("this is the data bananana", data)
                // const callback = (error, registeruser) => {
                response.render('clientele', data);
            }
        })
    };
   
  
  
    /*
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: clienteleControllerCallbacks,
    };
}