require('dotenv').config();

import { DataSourceOptions } from 'typeorm';

import { UserEntity } from './entities/UserEntity';
import { NotesEntity } from './entities/NotesEntity';

console.log(
  process.env.DB_HOST,
  process.env.DB_PORT,
  process.env.DB_USER,
  process.env.DB_PASS,
  process.env.DB_NAME,
);

const configTypeorm: DataSourceOptions = {
  type: 'mongodb',
  url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  entities: [UserEntity, NotesEntity],
  synchronize: true,
};

export default configTypeorm;
