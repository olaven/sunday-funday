const fs = require('fs'); 
//NOTE: using syncronous methods now, but it may be better to use asnconous if file gets bigger 
const PATH_TO_PROJECTS = "../projects.json"; 
//TODO: Functionality not implemented 

module.exports = {
  /**
   * Add a project to the web page 
   * @param name name of the new project (required)
   * @param path path to the new project (required)
   * @param description description of the project (optional)
   */
    add: (name, path, description) => {
        if (!name || !path) {
            throw "invalid name, path";
        }
        if(!description) description = ""; 

        //loading file 
        let projects = getJson(PATH_TO_PROJECTS).projects;
        projects.push({
            name: name,
            path: path,
            description: description
        });
        writeToJson(projects); 
    },
    /**
     * Remove a project from the webpage
     * @param name name of the project you wish to remove
     */
    remove: (name) => {
        let projects = getJson(PATH_TO_PROJECTS).projects; 
        for(i in projects){
            if(projects[i].name === name){
                projects.splice(i ,1); 
            }
        }
        //write back the modified object 
        writeToJson(projects); 
    },
    /**
     * list data of all registered projects
     */
    list: () => {
        console.log("------------------------");

        let projects = getJson(PATH_TO_PROJECTS).projects;

        for (project of projects) {
            let info =
                "\n" +
                project.name.toUpperCase() +
                "\nname: " +
                project.name +
                "\npath: " +
                project.path +
                "\ndescription: " +
                (project.description !== "" ? project.description : "none added");

            console.log(info);
        }
        console.log("\n------------------------");
    }, 
    /**
     * Returning true if project is registered 
     * @param name Name of project to look for
     */
    isProjectRegistered: (name) => {
        let projects = getJson(PATH_TO_PROJECTS).projects;
        //checking if name is taken
        for(project of projects){
            if(project.name === name){
                return true; 
            }
        }
        return false; 
    }, 
    /**
     * Returns project-data as an object with .name, .path and .description 
     * Returns false if no object is registered with specified name 
     * @param name 
     */
    getProject: (name) => {
        let projects = getJson(PATH_TO_PROJECTS).projects; 
        for(project of projects){
            if(project.name === name){
                return project; 
            }
        } 
        return false; 
    }
};



/**
 * @param path path to JSON-file 
 */
let getJson = (path) => {
    let content = fs.readFileSync(path); 
    content = JSON.parse(content); 

    return content; 
}

/**
 * 
 * @param unformatted string to be formatted 
 */
let formatForProjects = (unformatted) =>{
    return "{ 'projects': " + unformatted + "}"; 
}

/**
 * Formats the object back to expected JSON-string 
 */
let writeToJson = (projects) => {
    //turning back to json
    projects = '{"projects":' + JSON.stringify(projects) + "}";
    //               path,          data,     encoding
    fs.writeFileSync(PATH_TO_PROJECTS, projects, "utf8");
}

