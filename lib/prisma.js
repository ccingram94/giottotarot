import { PrismaClient } from '@prisma/client';

const prisma = PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  let prisma = global.prisma;
}

export default prisma;