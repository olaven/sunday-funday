
const readline = require("readline");

const ShowMenus = require("./menus/ShowMenus");
const HandleMenus = require("./menus/HandleMenus");

const ProjectsManager = require("./ProjectsManager");
const BuildSiteFromJson = require("./BuildSiteFromJson");

//!keep in mind that this is global! -> does not feel like a good solution 
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});; 
/**
 * Acts as entry point for this application
 */
let triggerMain = () => {
    ShowMenus.main();
    let responseFromMainMenu;
    rl.setPrompt("What do you want to do?"); 
    rl.prompt(); 
    rl.on('line', (answer) => {
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
    });
};
/** 
 * Triggers functions for adding a new project
*/
let triggerAdd = () => {
    let newProject = {name : "", path : "", description : ""}; 
    rl.setPrompt("What is the name of your project?\n"); 
    rl.prompt(); 
    rl.on('line', (name) => {
        console.log("name before adjustment:" + name); 
        name = name.trim().toLowerCase(); 
        console.log("name after adjustment:" + name); 
        if(ProjectsManager.isProjectRegistered(name)){
            console.log("\nA project with that name is already registered. Try another one :-D\n"); 
            rl.prompt(); 
        } else {
            console.log("name being added:" + name); 
            newProject.name = name; 
            console.log("Great name! (stuck? type 'help' :-)");
            rl.setPrompt("Where may I find this file?"); 
            rl.prompt(); 
            rl.on('line', (path) => {
                path = path.trim().toLowerCase(); 
                console.log("Pah entered : " + path); 
                if(path === "help"){
                    console.log(`\nI want the file path for your project. Usually, the path would look something like this: projects/${newProject.name}/index.html
                        \n\ntype in the path as if you were in the root folder of the project :-)
                        \n\nIt can also be a link to an external site. The point is just that it will be available from the root folder of this project and
                        \nwill be accessible from the published site (not just on your machine`); 
                        rl.prompt(); 
                } else {
                    console.log("Okay, got it ^^"); 
                    newProject.path = path; 
                    console.log("DESCRIPTION PART"); 
                    rl.setPrompt("(optional) add a description for your project!"); 
                    rl.prompt(); 
                    rl.on('line', (description) => {
                        console.log(description.length > 0 ? "\nPeople will have a better understanding of your project!" : "\nNo? Alright, you do you :-)"); 
                        
                        description = description.trim().toLowerCase();
                        newProject.description = description;        
                        console.log(`
                            name: ${newProject.name}\n
                            path: ${newProject.path}\n 
                            description: ${newProject.description}\n
                        
                            Adding now.. Remeber to rebuild afterwards :-D 
                        `); 
                        rl.close(); 
                        ProjectsManager.add(newProject.name, newProject.path, newProject.description); 
                    }); 
                }
            }); 
        }
    }); 
};
/** 
 * Triggers functions for removing a project
*/
let triggerRemove = () => {
    rl.setPrompt("WARNING: You are about to remove a project.\nWhat is the name of the project?"); 
    rl.prompt(); 
    rl.on('line', (name) => {
        name = name.trim().toLowerCase(); 
        if(ProjectsManager.isProjectRegistered(name)){
            let projectToBeRemoved = ProjectsManager.getProject(name); 
            console.log(
                "\n" + projectToBeRemoved.name + "\n" + projectToBeRemoved.path + "\n" + projectToBeRemoved.description + "\n\nIs deleted."
            ); 
            ProjectsManager.remove(name); 
        } else {
            console.log("\nThis project is not registered and can thus not be deleted"); 
        }
        rl.close(); 
    }) 
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
    console.log("\nNot valid. Try something from the menu :-D"); 
};

// APPLICATION ENTRY POINT
triggerMain(); 