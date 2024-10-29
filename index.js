const express = require("express");
const cors = require("cors");
require("dotenv").config();

const uploadRoutes = require("./routes/uploadRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/api", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
