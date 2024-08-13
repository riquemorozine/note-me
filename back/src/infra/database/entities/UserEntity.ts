import { ObjectIdColumn, Column, Entity } from 'typeorm';
import { ObjectId } from 'mongodb';
import { NotesEntity } from './NotesEntity';

@Entity('users')
export class UserEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column(() => NotesEntity)
  notes: NotesEntity[];
}
