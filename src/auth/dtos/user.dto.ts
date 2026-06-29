import { Role } from 'src/generated/prisma/enums';

export class CurrentUserDto {
  sub!: string;
  name!: string;
  email!: string;
  role!: Role;
  organizationId!: string;
  organizationName!: string;
  artistId?: string | null;
}
