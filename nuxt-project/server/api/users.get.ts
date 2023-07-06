export default defineEventHandler(async (event) => {
  try {
    const res = await event.context.prisma.users.findMany();
    console.log('> users -> get:', res);
    return res.data;
  } catch (e) {
    console.log(`> users -> get: error = ${e}`);
  }
  return [];
});