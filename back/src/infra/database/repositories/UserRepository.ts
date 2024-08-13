import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserEntity } from '../entities/UserEntity';
import { IUserRepository } from 'src/app/domains/repositories/IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity) userEntity: Repository<UserEntity>,
  ) {}

  async create(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
