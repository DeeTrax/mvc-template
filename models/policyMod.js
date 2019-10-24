/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    
      //policy model
    let allPolicies = (callback) => {
  
    const queryString = 'SELECT * FROM ownedpolicies*';
  
      dbPoolInstance.query(queryString, (error, queryResult) => {
        if( error ){

          // invoke callback function with results after query has executed
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
  
          }else{
            callback(null, null);
  
          }
        }
      });
    };
  
    return {
      allPolicies
    };
  };
  