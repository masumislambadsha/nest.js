import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dt0/create-user.dto.js';
import { UpdateUserDto } from './dt0/update-user.dto.js';

@Controller('user')
export class UserController {
  // @Get()   // Get /users
  // @Get(':id') // Get /users/:id(the static route should be defined before the dynamic route)
  // @Post()  // Post /users
  // @Put()   // Put /users/:id

  // get user
  @Get()
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 2, name: 'John Doe', email: 'john.doe@example.com' },
    ];
    return name
      ? users.filter((u) => u.name.toLowerCase().includes(name.toLowerCase()))
      : users;
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, name: 'John Doe' };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return { data: createUserDto, message: 'User created successfully' };
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: {id, ...updateUserDto},
      message: "User updated successfully"
    }
  }
}
