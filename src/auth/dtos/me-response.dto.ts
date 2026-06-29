import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from 'src/generated/prisma/enums';

export class MeResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  phone!: string;

  @ApiProperty()
  role!: Role;

  @ApiProperty()
  organizationId!: string;

  @ApiProperty()
  organizationName!: string;

  @ApiPropertyOptional()
  artistId?: string | null;

  constructor(data: Partial<MeResponseDto>) {
    Object.assign(this, data);
  }
}
