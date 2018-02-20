
/**
 * Functions for displaying menus
 * REFACTOR: refactor these into one function
 */

module.exports = {
    /**
     * Show main menu
     */
    main : () => {
        let greeting = "\nWelcome!\nOptions below:";
        let options = "" + "\n" + "\n1: add a project" + "\n2: remove a project" + "\n3: list registered projects" + "\n4: rebuild site" + "\n5: exit" + "\n";

        console.log(greeting + options);
    }, 
    /**
     * show add-project menu 
     */
    add : () => {
        let info = "" 
            +"\nYou are about to add a new project to the site" 
            +"\nI need the name, path and description. The latter is optional" 
            +"\n";

        console.log(info);
    }, 
    remove : () => {
        let info = ""
            +"\nYou are about to remove a project from the site"
            +"\nWhat is the name of the project you wish to remove?"
            +"\n"; 

        console.log(info); 
    }
}

