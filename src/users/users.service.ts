import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [{ id: '0', name: 'Just Me' }];

  findAll() {
    return this.users;
  }

  findById(userId: string) {
    return this.users.find((user) => user.id === userId);
  }
  createUser(name: string) {
    const newUser = { id: Date.now(), name };
    this.users.push(newUser);
    return newUser;
  }
}
