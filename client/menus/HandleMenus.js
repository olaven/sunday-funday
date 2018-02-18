const ProjectsManager = require("../ProjectsManager"); 

/**
 * Functions that handle responses from user  
 */
module.exports = {
  /**
   * Handle response from user and act accordingly 
   * @param input function should respond to
   */
    main: (input) => {
        /*I believe 'Input' is a better name in this context, 
        compared t o 'answer'*/
        switch (input.toLowerCase()) {
            case "1":
            case "add":
            case "add project":
                ProjectsManager.add(); 
                break;
            case "2":
            case "remove":
            case "delete":
                ProjectsManager.remove(); 
                break;
            case "3":
            case "list":
            case "list registered projects":
                ProjectsManager.list(); 
                break;
            case "4":
            case "rebuild":
            case "rebuild site":
                console.log("rebuild is not implemented yet");  
                break;
            case "5":
            case "e":
            case "exit":
            case "quit":
                console.log("Goodbye!"); 
                process.exit(); 
            default:
                console.log("--this input was invalid--");
                return "default";  
                break;
        }
    }, 
    /**
    * Handle response from user and return accordingly
    * @param input function should respond to  
    * @param type what the user is entering (i.e. 'name')
    */
    add: (input, type) => {
        let name; 
        let path; 
        let description; 

        console.log("NOT IMPLEMENTED"); 
    }, 
    /**
     * Handle response from user and return accordingly
     * @param name name of the project that is going to be removed
     */
    remove: (name) => {
        console.log("NOT IMPLEMENTED"); 
    }
}; 


;
