const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (licenseLink) {
    return `${licenseLink}`
  } else {
      return '';
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${license}`
   } else {
      return "";
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title 
  ## ${data.name}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
`;
}

module.exports = generateMarkdown;
