import { Client } from 'pg';
const postgresClient = new Client({
    connectionString: process.env.VITE_POSTGRES_CONNECTION
});
postgresClient.connect();
export default defineEventHandler((event) => {
    // console.log(event.context);
    event.context.postgres = postgresClient;
});
