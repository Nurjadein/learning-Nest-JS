import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: '0', name: 'Just Me' }];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: string): User {
    return this.users.find((user) => user.id === userId);
  }
  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: String(Date.now()), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
