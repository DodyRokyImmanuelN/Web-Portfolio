// Layer untuk handle request dan response dari client, biasanya juga handle validasi body.
const express = require("express");
const prisma = require("../db");
const router = express.Router();
const {
  getAllTools,
  getAllToolsById,
  createTools,
  deleteToolsById,
  editToolsById,
} = require("./Tools.service");

router.get("/", async (req, res) => {
  const tools = await getAllTools();

  res.send(tools);
});

router.get("/:id", async (req, res) => {
  try {
    const toolsId = parseInt(req.params.id);
    const tools = await getAllToolsById(toolsId);

    res.send(tools);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newToolsData = req.body;

    const tools = await createTools(newToolsData);

    res.send({
      data: tools,
      message: "Create Tools Success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const toolsId = req.params.id;

    await deleteToolsById(parseInt(toolsId));

    res.send("Product Deleted");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const toolsId = req.params.id;
  const toolsData = req.body;

  if (!(toolsData.gambar && toolsData.nama && toolsData.ket && toolsData.dad)) {
    return res.status(400).send("All fields are required");
  }
  const tools = await editToolsById(parseInt(toolsId), toolsData);
  res.send({
    data: tools,
    message: "Update Tools Success",
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const toolsId = req.params.id;
    const toolsData = req.body;

    const tools = await editToolsById(parseInt(toolsId), toolsData);
    res.send({
      data: tools,
      message: "Patch Tools Success",
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
