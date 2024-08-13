require('dotenv').config();

import { DataSourceOptions } from 'typeorm';

const configTypeorm: DataSourceOptions = {
  type: 'mongodb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true,
};

export default configTypeorm;
