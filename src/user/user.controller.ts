import { Body, Controller, Get, Post, HttpException, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Delete } from '@nestjs/common';


@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: User) {
    try {
      const createdUser = await this.userService.create(user);
      return createdUser;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.userService.findOne(id);
      return user;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id/avatar')
  async findAvatar(@Param('id') id: string) {
    try {
      const avatar = await this.userService.findAvatar(id);
      return avatar;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id/avatar')
  async deleteAvatar(@Param('id') id: string) {
    try {
      await this.userService.deleteAvatar(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

