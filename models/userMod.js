/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    //login in model
    let loginAll = (user_email, callback) => {
  
      const queryString = 'SELECT * FROM clientele WHERE email=$1';
        let arr = [user_email];
        dbPoolInstance.query(queryString, arr, (error, queryResult) => {
          if( error ){
  
            // invoke callback function with results after query has executed
            callback(error, null);
    
          }else{
    
            // invoke callback function with results after query has executed
    
            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows[0]);
    
            }else{
              callback(null, null);
    
            }
          }
        });
      };
    
      //register model
    let registerAll = (data, callback) => {
  
    const queryString = 'INSERT INTO clientele (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  
      dbPoolInstance.query(queryString, data, (error, queryResult) => {
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

      //client model
      let allClient = (callback) => {
  
        const queryString = 'SELECT * FROM clientele WHERE NOT id = 27';
      
          dbPoolInstance.query(queryString, (error, queryResult) => {
            if( error ){
    
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
        
  
    return {
      loginAll,
      registerAll,
      allClient
    };
  };
  