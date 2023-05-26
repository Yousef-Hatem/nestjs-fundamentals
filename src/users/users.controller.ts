import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['Ahmed', 'khalid', 'fatma'];
  }

  @Get()
  findOne(): string {
    return 'Find one user';
  }

  @Post()
  create(): string {
    return 'Create a new user';
  }

  @Patch()
  update(): string {
    return 'Update a user';
  }

  @Delete()
  remove(): string {
    return 'Remove a user';
  }
}
