import { IsEmail, IsEnum } from 'class-validator';
import { Role } from '../../generated/prisma/client';

export class CreateInviteDto {
  @IsEmail()
  email!: string;

  @IsEnum(Role)
  role!: Role;
}
