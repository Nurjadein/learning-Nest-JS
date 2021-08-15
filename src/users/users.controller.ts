import { UsersService } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(): Array<any> {
    return [{ id: 0 }];
  }
  @Get(':id')
  getUsersById(@Param('id') id: string): any {
    return { id };
  }
}
