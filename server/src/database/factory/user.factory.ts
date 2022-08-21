import { define, factory } from 'typeorm-seeding';
import * as Faker from 'faker';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

import { User } from '../../users/entities/user.entity';

define(User, (faker: typeof Faker) => {
  const user = new User();

  user.email = faker.internet.email();
  user.password = bcrypt.hashSync(faker.internet.password(), parseInt(process.env.SALT_ROUNDS));

  return user;
});
