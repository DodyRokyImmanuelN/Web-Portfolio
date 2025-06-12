const { PrismaClient } = require("../generated/prisma"); // ✅ ini cocok dengan output-mu

const prisma = new PrismaClient();
module.exports = prisma;
