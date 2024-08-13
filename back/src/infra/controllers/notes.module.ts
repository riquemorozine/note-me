import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotesController } from './Notes.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotesController],
})
export class NotesModule {}
