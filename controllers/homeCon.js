module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let homeControllerCallbacks = (request, response) => {
            response.render("home");
    }
  
  
    /*
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: homeControllerCallbacks
    };
  
  }
  