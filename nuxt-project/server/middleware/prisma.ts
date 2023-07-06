import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler((event: any) => {
  // console.log(event.context);
  event.context.prisma = prisma;
});