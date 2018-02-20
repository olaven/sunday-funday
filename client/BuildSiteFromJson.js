let fs = require("fs");

let PATH_TO_JSON = "../projects.json";
let PATH_TO_HTML = "../src/index.html";

let top = `
    <!--
        Built with script(s) in ../client. 
        Made by @olaven. 
    -->
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>funday-sunday</title>
        <link rel="stylesheet" href="../src/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed" rel="stylesheet">
    </head>
    <body>
        <head>
        <div id="head-container">
            <h1>sunday-funday.</h1>
            <h2>
            <span id="first">made with:</span>
            <span id="second">hot drinks, blankets and spare time.</span>
            </h2>
        </div>
        </head>
        <main>
`;

let formatProjects = () => {
    let projectsHtml = "";
    let projects = fs.readFileSync(PATH_TO_JSON);
    projects = JSON.parse(projects);
    projects = projects.projects;

    for (project of projects) {
        projectsHtml +=
            `<div id="main-container">
                <a href="` +
                    project.path +
                `">
                ` + project.name +`.
                </a>
            </div>`;
    }

    return projectsHtml;
};

let bottom = `
        </main>
    </body>
    </html>
`;

let content = top + formatProjects() + bottom;

module.exports = () => {
    fs.writeFileSync(PATH_TO_HTML, content, "utf8");
}