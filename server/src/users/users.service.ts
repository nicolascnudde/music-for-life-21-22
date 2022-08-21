import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    createUserInput.password = await bcrypt.hash(
      createUserInput.password,
      parseInt(process.env.SALT_ROUNDS)
    );
    const newUser = this.usersRepository.create(createUserInput); // newUser = new User(); new.name = input.name ...
    return this.usersRepository.save(newUser); // insert
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number):Promise<User> {
    return this.usersRepository.findOneOrFail(id);
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.usersRepository.findOne(id);
    updateUserInput.password = await bcrypt.hash(
      updateUserInput.password,
      parseInt(process.env.SALT_ROUNDS)
    );
    return this.usersRepository.save({ ...user, ...updateUserInput });
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne(id);
    return this.usersRepository.remove(user);
  }

  // Needed for user login
  findUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneOrFail({ where: { email: email } });
  }
}
