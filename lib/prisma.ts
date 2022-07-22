import { PrismaClient } from "@prisma/client";

declare global {
  // must be declared as var (let/const does not show up in globalThis)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
