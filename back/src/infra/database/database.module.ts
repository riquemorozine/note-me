import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IUserRepository } from 'src/app/domains/repositories/IUserRepository';
import { INotesRepository } from 'src/app/domains/repositories/INotesRepository';

import { NotesRepository } from './repositories/NotesRepository';
import { UserRepository } from './repositories/UserRepository';
import { UserEntity } from './entities/UserEntity';
import { NotesEntity } from './entities/NotesEntity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, NotesEntity])],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: INotesRepository,
      useClass: NotesRepository,
    },
  ],
  exports: [TypeOrmModule, INotesRepository, IUserRepository],
})
export class DatabaseModule {}
