import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserService {
  

  async create(createUserDto: CreateUserDto) {
    // Replace with database logic
    return {
      message: 'User created successfully',
      user: createUserDto,
    };
  }
}
