import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    ) {}

  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({email});
    if (!user) {
      return user;
    }
    throw new HttpException(
      'User not found',
      HttpStatus.BAD_REQUEST
    );
  }

  async create(user: CreateUserDto) {
    const newUser = await this.userRepository.create(userData);
    await this.userRepository.save(newUser);
    return newUser;
  }

}