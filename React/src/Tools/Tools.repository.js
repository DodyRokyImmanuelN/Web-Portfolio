// berkomunikasi dengan database
// boleh pakai ORM atau raw query

const prisma = require("../db");

const findTools = async () => {
  const tools = await prisma.tools.findMany();
  return tools;
};
const findToolsById = async (id) => {
  const tools = await prisma.tools.findUnique({
    where: {
      id,
    },
  });
  return tools;
};
const insertTools = async (toolsData) => {
  const tools = await prisma.tools.create({
    data: {
      gambar: toolsData.gambar,
      nama: toolsData.nama,
      ket: toolsData.ket,
      dad: toolsData.dad,
    },
  });
  return tools;
};
const findToolsByName = async (nama) => {
  const tools = await prisma.tools.findFirst({
    where: {
      nama,
    },
  });
  return tools;
};
const deleteTools = async (id) => {
  await prisma.tools.delete({
    where: {
      id,
    },
  });
};
const editTools = async (id, toolsData) => {
  const tools = await prisma.tools.update({
    where: {
      id: parseInt(id),
    },
    data: {
      gambar: toolsData.gambar,
      nama: toolsData.name,
      ket: toolsData.ket,
      dad: toolsData.dad,
    },
  });
  return tools;
};

module.exports = {
  findTools,
  findToolsById,
  insertTools,
  findToolsByName,
  deleteTools,
  editTools,
};
