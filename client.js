const readline = require("readline");
let rl; 
//objects with methods to add, remove and list projects
const ProjectsManager = require("./projectsManager"); 

//input: from user 
let handleMenuOption = (input) => {
    /*I believe 'Input' is a better name in this context, 
    compared t o 'answer'*/

    switch(input.toLowerCase()){
        case "1"          : 
        case "add"        : 
        case "add project":
            //TODO: adding a new project to site 
            ProjectsManager.add(); 
            rl.close()           ; 
            break                ; 
        case "2"     : 
        case "remove": 
        case "delete": 
            ProjectsManager.remove(); 
            rl.close()              ;
            break                   ; 
        case "3"                       : 
        case "list"                    : 
        case "list registered projects": 
            //TODO: list projects from json-file 
            ProjectsManager.list(); 
            rl.close()            ; 
            break                 ;
        case "4"    :
        case "e"    :  
        case "exit" : 
        case "quit" : 
            process.exit(); 
        default: 
            console.log("this input was invalid"); 
            showMenu()                           ; 
            break                                ; 
    }
}

//creates interface and assigns it to rl-variable
let createReadlineInterface = () => {
    //local!
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl; 
};


let showMenu = () => {
    //greeting
    console.log(                ); 
    console.log("Welcome!"      ); 
    console.log("Options below:");
    console.log(                ); 
    //options
    console.log("1: add project"             ); 
    console.log("2: remove a project"        ); 
    console.log("3: list registered projects");
    console.log("4: exit"                    ); 
    console.log(                             ); 

    if(!rl)
        rl = createReadlineInterface(); 
    rl.question("What do you want to do? \n", answer => {
        handleMenuOption(answer); 
    });
}




//Enter point: 
showMenu(); 
