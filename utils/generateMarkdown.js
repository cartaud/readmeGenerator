//A function that returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (renderLicenseSection !== 'N/A') {
    return `license`
  }
  else {
    return ''
  }
}

//A function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
  if (renderLicenseSection !== 'N/A') {
    return `https://img.shields.io/github/license/`
  }
  else {
    return ''
  }
}

//A function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if (/mit/ig.test(license)) {
    return `This project is licensed under the MIT license`
  }
  else if (/Apache License 2.0/ig.test(license)) {
    return `This project is licensed under the Apache License 2.0 license`
  }
  else if (/GNU General Public License v3.0/ig.test(license)) {
    return ``
  }
  else if (/BSD 2-Clause "Simplified" License/ig.test(license)) {
    return ``
  }
  else if (/BSD 3-Clause "New" or "Revised" License/ig.test(license)) {
    return ``
  }
  else if (/Boost Software License 1.0/ig.test(license)) {
    return ``
  }
  else if (/Creative Commons Zero v1.0 Universal/ig.test(license)) {
    return ``
  }
  else if (/Eclipse Public License 2.0/ig.test(license)) {
    return ``
  }
  else if (/GNU Affero General Public License v3.0/ig.test(license)) {
    return ``
  }
  else if (/GNU General Public License v2.0/ig.test(license)) {
    return ``
  }
  else if (/GNU Lesser General Public License v2.1/ig.test(license)) {
    return ``
  }
  else if (/Mozilla Public License 2.0/ig.test(license)) {
    return ``
  }
  else if (/The Unlicense/ig.test(license)) {
    return ``
  }
  else {
    return `N/A`
  } 
}

//A function to generate markdown for README
function generateMarkdown(data) {
  return (
  `## ${data.project} 
  [![${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)}${data.username}/${data.project}.svg?)](https://github.com/${data.username}/${data.project}/blob/master/LICENSE)
  ### Description
  ${data.description}
  ### Table of Contents
  - [Installation](https://github.com/cartaud/readmeGenerator#-Installation-)
  - [Usage](https://github.com/cartaud/readmeGenerator#-Usage-)
  - [License](https://github.com/cartaud/readmeGenerator#-License-)
  - [Contributing](https://github.com/cartaud/readmeGenerator#-Contributing-)
  - [Tests](https://github.com/cartaud/readmeGenerator#-Tests-)
  - [Questions](https://github.com/cartaud/readmeGenerator#-Questions-)
  ## Installation
  To install necessary dependencies, run the following command:
  ${data.install}
  ## Usage
  ${data.repo}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribute}
  ## Test
  ${data.test}
  ## Questions
  For additional information on the repo, visit my Github account [here](https://github.com/${data.username} ) or send any questions you have to ${data.email}. 
  `);
}

module.exports = generateMarkdown;