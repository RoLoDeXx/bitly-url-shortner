const express = require("express");
const shortner = require("../utils/bitly");

const router = new express.Router();

router.use("/", async (req, res) => {
  let newLink = await shortner("https://github.com/tanepiper/node-bitly");
  res.send(newLink);
});

module.exports = router;
