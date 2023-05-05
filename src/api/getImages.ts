interface Images {
  title: string;
  description: string;
  file: {
    url: string;
    fileName: string;
    contentType: string;
  };
}
interface Fields {
  fields: Images;
}

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

async function getImages() {
  try {
    const entries = await client.getEntry("78Pv7uCbu7GcJoOboO42vZ");
    console.log(entries.fields.heroImages, "entries what have luz ");
    const asset = entries.fields.heroImages;
    const imageUrls = asset.map((entry: Fields) => entry.fields);
    return imageUrls;
  } catch (error) {
    console.error(error);
  }
}

export default getImages;
