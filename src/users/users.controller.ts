import { UsersService } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(): any {
    return this.usersService.findAll();
  }
  @Get(':id')
  getUsersById(@Param('id') id: string): any {
    return this.usersService.findById(id);
  }
}
