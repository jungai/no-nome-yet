import { IsEmail } from 'class-validator';

export class AddSubscriberDto {
  @IsEmail()
  readonly email: string;
}
