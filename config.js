import mysql from 'mysql';
import { DATABASE_INFO } from './constant.js';

const connection = mysql.createConnection({
  host: DATABASE_INFO.host,
  user: DATABASE_INFO.user,
  password: DATABASE_INFO.password,
  database: DATABASE_INFO.database
});

export default connection;
