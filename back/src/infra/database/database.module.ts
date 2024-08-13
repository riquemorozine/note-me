import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IUserRepository } from 'src/app/domains/repositories/IUserRepository';
import { INotesRepository } from 'src/app/domains/repositories/INotesRepository';

import { NotesRepository } from './repositories/NotesRepository';
import { UserRepository } from './repositories/UserRepository';
import { UserEntity } from './entities/UserEntity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, NotesRepository])],
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
  exports: [INotesRepository, IUserRepository],
})
export class DatabaseModule {}
