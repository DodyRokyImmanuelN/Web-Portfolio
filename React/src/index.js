const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

const toolsController = require("./Tools/Tools.controller");
app.use("/Tools", toolsController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
