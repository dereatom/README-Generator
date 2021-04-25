// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    //renders markup text for license badge corresponding to user choice
    let licenseMarkdownText;
    //evaluate user input for license choices. Return image link accordingly
    switch (license) {
      case 'MIT':
        licenseMarkdownText = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'GNU':
        licenseMarkdownText = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      case 'Apache':
        licenseMarkdownText = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'Open':
        licenseMarkdownText = '';
        break;
      }
    return licenseMarkdownText
  }
    
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    
    return `# ${data.projectTitle}
  
  # Table of Content
  1. [Title](#Title)
  2. [Description](#Description)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [License](#License)
  6. [Contribution](#Contribution)
  7. [Tests](#Tests)
  8. [Github](#Github)
  9. [E-mail](#Email)  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Github
  ${data.Github}
  
  ## E-mail
  ${data.email}`;
  }
  module.exports = generateMarkdown;