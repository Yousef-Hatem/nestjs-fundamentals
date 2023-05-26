import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  find(): string[] {
    return ['Ahmed', 'khalid', 'fatma'];
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return { username, email: 'ahmed@gmail.com' };
  }

  @Post()
  create(@Body() userDate: any): string {
    return userDate;
  }

  @Patch(':username')
  update(@Param('username') username: string, @Body() input): string {
    return input;
  }

  @Delete(':username')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('username') username: string) {
    console.log('removed user');
  }
}
