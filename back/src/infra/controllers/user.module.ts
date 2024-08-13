import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './User.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
})
export class UserModule {}
