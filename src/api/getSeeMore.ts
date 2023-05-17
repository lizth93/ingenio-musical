const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

async function getSeeMore() {
  try {
    const entries = await client.getEntry("3tmNxC5aishI1hvBj7ZqP6");
    return entries.fields;
  } catch (error) {
    console.error(error);
  }
}

export default getSeeMore;
