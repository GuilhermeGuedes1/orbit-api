import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterArtistDto {
  @ApiProperty({
    example: 'Joao Pereira',
  })
  @IsString()
  name!: string;

  @ApiPropertyOptional({
    example: 'DJ Pereira',
  })
  @IsOptional()
  @IsString()
  stageName?: string;

  @ApiProperty({
    example: 'joao@email.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '12345678',
  })
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiPropertyOptional({
    example: '1995-04-12',
    nullable: true,
  })
  @IsOptional()
  @IsDateString()
  birthDate?: string | null;

  @ApiProperty({
    example: '+5521999999999',
    description: 'Artist phone number.',
  })
  @IsString()
  phone!: string;

  @ApiPropertyOptional({
    example: 'Rua das Palmeiras, 100',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  address?: string | null;

  @ApiPropertyOptional({
    example: 'Sao Paulo',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  city?: string | null;

  @ApiPropertyOptional({
    example: 'SP',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  state?: string | null;

  @ApiPropertyOptional({
    example: 'chave pix',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  pixKey?: string | null;
}
