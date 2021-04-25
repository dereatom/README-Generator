const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            // validate a property to check the user provide a value
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project:",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}},
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}


        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "MIT",
                "GNU",
                "Apache",
                 "Open"              
            ],
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        },
        {
            type: "input",
            name: "contribution",
            message: "Who are the contributors of this projects?",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? ",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        },
        {
            type: "input",
            name: "Github",
            message: "Please enter your GitHub username: ",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate:(value) => {if(value){return true} else{return 'need value to continue'}}
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./utils/README1.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  