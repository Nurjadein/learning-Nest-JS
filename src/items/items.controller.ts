import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { create } from 'domain';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'u';
  }
  @Post()
  create(): string {
    return 'create item';
  }

}
