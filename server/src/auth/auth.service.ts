import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    // check if password is correct ~ bcrypt verify -> also bcrypt before storing the password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (user && isMatch) {
      const { password, email, ...rest } = user;
      return rest;
    }

    return null;
  }
}
