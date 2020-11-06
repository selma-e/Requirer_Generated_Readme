// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  ${response.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributing)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Badges](#badges)

  ## Installation
  * If you need to pull my code for this homework, please visit my Github repository at: ${response.repository}

  ## Usage
  <img src="./Assets/${response.usage}">

  ## Contributing
  ${response.contribution}

  ## Tests
  ${response.test}

  ## Licenses
  ${response.license}

  ## Badges
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  © 2020 ${response.name} | UW-SEA-FSF-PT-08-2020-U-C-TTh

`;
}

module.exports = generateMarkdown;
