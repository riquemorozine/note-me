import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import configTypeorm from './infra/database/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(configTypeorm)],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
