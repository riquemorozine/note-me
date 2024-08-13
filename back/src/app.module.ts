import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import configTypeorm from './infra/database/typeorm';
import { DataSource } from 'typeorm';

import { UserModule } from './infra/controllers/user.module';
import { NotesModule } from './infra/controllers/notes.module';

@Module({
  imports: [TypeOrmModule.forRoot(configTypeorm), UserModule, NotesModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
