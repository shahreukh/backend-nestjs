import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';


@Injectable()
export class UserService {
  private users: User[] = [];
  private avatarMap: Map<string, string> = new Map();

  create(user: User) {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    return this.users.find(user => user.id === id);
  }

  findAvatar(id: string): string {
    return this.avatarMap.get(id) || null;
  }

  saveAvatar(id: string, avatar: string) {
    this.avatarMap.set(id, avatar);
  }

  deleteAvatar(id: string) {
    this.avatarMap.delete(id);
  }
}
