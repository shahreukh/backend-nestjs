import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, User } from '../models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { databaseProvider } from '../database/database.provider';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserModel.schema }]),
  ],
  controllers: [UserController],
  providers: [UserService, databaseProvider],
})
export class UserModule {}
