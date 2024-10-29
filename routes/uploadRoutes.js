const express = require("express");
const { uploadFile, upload } = require("../controllers/uploadController.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World 👋!");
});


router.post("/upload", upload.single("source"), uploadFile);

module.exports = router;
