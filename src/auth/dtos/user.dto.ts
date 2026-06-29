import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CurrentUserDto {
  @ApiProperty({
    example: '4c2af2a9-3d2b-4a47-8d4f-7b8b29b5d7a2',
    description: 'Authenticated user identifier stored in the JWT subject.',
  })
  sub!: string;

  @ApiProperty({
    example: 'Guilherme Guedes',
    description: 'Authenticated user name.',
  })
  name!: string;

  @ApiProperty({
    example: 'guilherme@email.com',
    description: 'Authenticated user email address.',
  })
  email!: string;

  @ApiProperty({
    example: 'CEO',
    description: 'Authenticated user role.',
  })
  role!: string;

  @ApiProperty({
    example: '8e97d45f-b02f-4e2d-a83c-1c6eaa0474f4',
    description: 'Organization tenant identifier associated with the user.',
  })
  organizationId!: string;

  @ApiProperty({
    example: 'RewindJ Agency',
    description: 'Organization name.',
  })
  organizationName!: string;

  @ApiPropertyOptional({
    example: '7ad7833f-238a-44dd-a2de-3c8c999bba98',
    nullable: true,
    description:
      'Artist profile id linked to the authenticated user. Null for agency users.',
  })
  artistId?: string | null;

  constructor(data: Partial<CurrentUserDto>) {
    Object.assign(this, data);
  }
}
