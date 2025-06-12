const prisma = require("../db");
const {
  editTools,
  findTools,
  findToolsById,
  findToolsByName,
  insertTools,
} = require("./Tools.repository");

const getAllTools = async () => {
  const tools = await findTools();
  return tools;
};

const getAllToolsById = async (id) => {
  const tools = await findToolsById(id);
  if (!tools) {
    throw Error("Tools not found");
  }
  return tools;
};

const createTools = async (newToolsData) => {
  const findTools = await findToolsByName(newToolsData.nama);
  if (findTools) {
    throw Error("Tools already exists");
  }
  const tools = await insertTools(newToolsData);
  return tools;
};

const deleteToolsById = async (id) => {
  await getAllToolsById(id);

  await prisma.tools.delete({
    where: {
      id,
    },
  });
};

const editToolsById = async (id, toolsData) => {
  await getAllToolsById(id);

  const tools = await editTools(id, toolsData);
  return tools;
};

module.exports = {
  getAllTools,
  getAllToolsById,
  createTools,
  deleteToolsById,
  editToolsById,
};
