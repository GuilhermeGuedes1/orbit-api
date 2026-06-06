import { IsString, MinLength } from 'class-validator';

export class AcceptInviteDto {
  @IsString()
  name!: string;

  @IsString()
  lastName!: string;

  @IsString()
  phone!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}
