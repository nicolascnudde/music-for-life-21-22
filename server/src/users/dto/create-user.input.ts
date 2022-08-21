import { InputType, Int, Field } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MaxLength(128)
  @Field()
  email: string;
  
  @MaxLength(128)
  @Field()
  password: string;
}
