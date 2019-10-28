/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    
      //policy model
    // let allPolicies = (callback) => {
  
    // const queryString = 'SELECT * FROM ownedpolicies*';
  
    //   dbPoolInstance.query(queryString, (error, queryResult) => {
    //     if( error ){

    //       // invoke callback function with results after query has executed
    //       callback(error, null);
  
    //     }else{
  
    //       // invoke callback function with results after query has executed
  
    //       if( queryResult.rows.length > 0 ){
    //         callback(null, queryResult.rows);
  
    //       }else{
    //         callback(null, null);
  
    //       }
    //     }
    //   });
    // };

    //one client info model
    let oneClient = (clientInfo, callback) => {
      
      const queryString = "SELECT * FROM clientele INNER JOIN ownedpolicies On (clientele.id = ownedpolicies.clientele_id) WHERE clientele.id = $1";
      // console.log("JOJOJOJOJOJOJOJOJOJOJOJOJOJOJO"+ queryString);
      const userInfo = [clientInfo];
       
        dbPoolInstance.query(queryString, userInfo, (error, queryResult) => {
          if( error ){
           console.log("this is the errrorrrrrrrr!", error)
            // invoke callback function with results after query has executed
            callback(error, null);
    
          }else{
    
            // invoke callback function with results after query has executed
    
            if( queryResult.rows.length > 0 ){
              // console.log("this is the query resultssss", queryResult.rows)
              callback(null, queryResult.rows);
    
            }else{
              callback(null, null);
    
            }
          }
        });
      };


      //one all policies info model
    let policiesInfo = (policyInfo, callback) => {
      
      const queryString = "SELECT * FROM clientele INNER JOIN ownedpolicies On (clientele.id = ownedpolicies.clientele_id) WHERE clientele.id = $1";
      console.log("JOJOJOJOJOJOJOJOJOJOJOJOJOJOJO"+ queryString);
      const allPolicyInfo = [policyInfo];
       
        dbPoolInstance.query(queryString, allPolicyInfo, (error, queryResult) => {
          if( error ){
           console.log("this is the errrorrrrrrrr!", error)
            // invoke callback function with results after query has executed
            callback(error, null);
    
          }else{
    
            // invoke callback function with results after query has executed
    
            if( queryResult.rows.length > 0 ){
              console.log("this is the query resultssss", queryResult.rows)
              callback(null, queryResult.rows);
    
            }else{
              callback(null, null);
    
            }
          }
        });
      };
  
    return {
      // allPolicies,
      oneClient,
      policiesInfo
    };
  };
  