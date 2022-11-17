/** @format */

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null) {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)\n`;
  } else {
    return [];
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== null) {
    if (license !== "MIT") {
      return `https://opensource.org/licenses/${license}-2.0`;
    } else {
      return `https://opensource.org/licenses/${license}`;
    }
  } else {
    return [];
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `${badge}
  ${link};
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 # ${data.title}


 ## Description
 ${data.description}

# license
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
