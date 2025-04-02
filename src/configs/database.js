import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config({ path:'.env.local' });

const DB_HOST=  process.env.DB_HOST || "localhost";
const DB_USER=  process.env.DB_USER;
const DB_PASSWORD= process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = parseInt(process.env.DB_PORT || '', 10);

//Configuration de la connexion à la base de données
const pool = mariadb.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    bigIntAsNumber: true

});

export default pool;