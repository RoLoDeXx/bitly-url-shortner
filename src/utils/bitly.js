const { BitlyClient } = require("bitly");

const bitly = new BitlyClient("78d4ac00c3eed6e3439174123e234d12dc07c141", {});

const shortner = async url => {
  try {
    const result = await bitly.shorten(url);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = shortner;
