const contentful = require("contentful");

const client = contentful.createClient({
  space: "1j289lbm44xd",
  environment: "master", // defaults to 'master' if not set
  accessToken: "3aseAvH-_4d0qxpGhKnrbVOEPby-ep45WHm93HUqwA8",
});

async function getBasicInformation() {
  try {
    const entries = await client.getEntry("4Da1ywwzrWELyAiEUa374C");
    return entries.fields;
  } catch (error) {
    console.error(error);
  }
}

export default getBasicInformation;
