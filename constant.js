import dotenv from 'dotenv';
dotenv.config();

export const DATABASE_INFO = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE,
};
