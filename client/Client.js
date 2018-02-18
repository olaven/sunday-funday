const readline = require("readline"); 

const ShowMenus = require("./menus/ShowMenus"); 
const HandleMenus = require("./menus/HandleMenus"); 


/**
 * creates interface and assigns it to rl-variable
*/
let createReadlineInterface = () => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl; 
}



// Application entry point 

ShowMenus.main(); 
let responseFromMainMenuHandler; 
let rl = createReadlineInterface(); 
rl.question("What do you want to do?", (answer) => {
    responseFromMainMenuHandler = HandleMenus.main(answer);
    rl.close();   
}); 




