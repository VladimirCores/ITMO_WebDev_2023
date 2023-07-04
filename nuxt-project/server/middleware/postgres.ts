import { Client } from 'ts-postgres';

const postgresClient = new Client({
  // host: 'shy-frost-373586.us-east-2.aws.neon.tech',
  // user: 'vladimirminkin',
  // password: 'TZhWrfX0O4ui',
  // database: 'neondb'
  // connectionString: process.env.VITE_POSTGRES_CONNECTION
  host: process.env.VITE_POSTGRES_CONNECTION
});
await postgresClient.connect();

export default defineEventHandler((event) => {
  // console.log(event.context);
  event.context.postgres = postgresClient;
});