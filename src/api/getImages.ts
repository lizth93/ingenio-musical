import * as contentful from "contentful";

const client = contentful.createClient({
  space: "1j289lbm44xd",
  environment: "master",
  accessToken: "3aseAvH-_4d0qxpGhKnrbVOEPby-ep45WHm93HUqwA8",
});

async function getImages() {
  try {
    const entries = await client.getEntries();
    const assets = entries.includes?.Asset;
    console.log(assets, "assets");
    const imageUrls = assets?.map((asset) => asset.fields);
    console.log(imageUrls, "images luz");
    return imageUrls;
  } catch (error) {
    console.error(error);
  }
}

export default getImages;
