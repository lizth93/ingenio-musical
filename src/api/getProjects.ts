const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

async function getProjects() {
  try {
    const entries = await client.getEntry("5RclR1BbThkn5iFxzyHM42");
    return entries.fields;
  } catch (error) {
    console.error(error);
  }
}

export default getProjects;
