import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { NotesEntity } from '../entities/NotesEntity';
import { INotesRepository } from 'src/app/domains/repositories/INotesRepository';

@Injectable()
export class NotesRepository implements INotesRepository {
  constructor(
    @InjectRepository(NotesEntity) notesEntity: Repository<NotesEntity>,
  ) {}

  async create(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
