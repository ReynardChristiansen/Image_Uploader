const multer = require("multer");
const axios = require("axios");
const FormData = require("form-data");

const upload = multer();

const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Missing or invalid source" });
  }

  try {
    const formData = new FormData();
    formData.append("source", req.file.buffer, req.file.originalname);
    formData.append("key", process.env.API_KEY);
    formData.append("action", "upload");
    formData.append("format", "json");

    const response = await axios.post(process.env.URL_PATH, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send("An error occurred while uploading the file");
    }
  }
};

module.exports = {
  uploadFile,
  upload,
};
