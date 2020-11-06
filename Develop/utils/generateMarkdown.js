// function to generate markdown for README
function generateMarkdown(response, badgeLicense) {
  return `# ${response.title}
  
  ${badgeLicense}

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
  * If you need to see a video of this README Generator in action, please navigate to: ${response.usage} 

  ## Contributing
  ${response.contribution}

  ## Tests
  ${response.test}

  ## Licenses
  This application is covered under the ${response.license} license.

  ## Questions?
  * For any additional questions, please email me at: ${response.email}
  * [GitHub](https://github.com/${response.username})


  © 2020 ${response.name} | UW-SEA-FSF-PT-08-2020-U-C-TTh

`;
}

module.exports = generateMarkdown;