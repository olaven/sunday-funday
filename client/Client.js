const readline = require("readline");

const ShowMenus = require("./menus/ShowMenus");
const HandleMenus = require("./menus/HandleMenus");

const ProjectsManager = require("./ProjectsManager");
const BuildSiteFromJson = require("./BuildSiteFromJson");  

/**
 * creates interface and assigns it to rl-variable
 */
let createReadlineInterface = () => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
};

/**
 * Acts as entry point for this application
 */
let triggerMain = () => {
    ShowMenus.main();
    let responseFromMainMenu;
    let rl = createReadlineInterface();
    rl.question("What do you want to do?", answer => {
        HandleMenus.main(answer, response => {
            switch (response) {
                case "add":
                    triggerAdd();
                    break;
                case "remove":
                    triggerRemove();
                    break;
                case "list":
                    triggerList();
                    break;
                case "rebuild":
                    triggerRebuild();
                    break;
                case "exit":
                    triggerExit();
                    break;
                case "default":
                    triggerDefault();
                    break;
            }
        });
    rl.close();
    });
};
/** 
 * Triggers functions for adding a new project
*/
let triggerAdd = () => {
    console.log("ADD NOT IMPLEMENTED YET. COMING SOON!");
    ProjectsManager.add()//needs params as well 
};
/** 
 * Triggers functions for removing a project
*/
let triggerRemove = () => {
    console.log("REMOVE NOT IMPLEMENTED YET. COMING SOON!"); 
};
/** 
 * Triggers functions for listing registered projects 
*/
let triggerList = () => {
    ProjectsManager.list(); 
};
/**
 * Triggers functions for rebuilding index.html based on projects in projects.json
 */
let triggerRebuild = () => {
    console.time(); 
    console.log("--rebuild starting--");
    BuildSiteFromJson(); 
    console.log("--rebuild ended--");  
    console.timeEnd()
};
/** 
 * Triggers exiting of application 
*/
let triggerExit = () => {
    console.log("Goodbye!");
    process.exit();  
};
/**
 * Lets the user know that options was not valid 
 */
let triggerDefault = () => {
    console.log("\nNot valid. Try something from the menu :-D\n"); 
    triggerMain(); 
};

// APPLICATION ENTRY POINT
triggerMain(); 
