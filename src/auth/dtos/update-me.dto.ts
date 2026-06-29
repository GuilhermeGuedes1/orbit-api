import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMeDto {
  @ApiPropertyOptional({
    example: 'Guilherme Guedes',
    description: 'User display name.',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    example: '+5521999999999',
    description: 'User phone number.',
  })
  @IsOptional()
  @IsString()
  phone?: string;
}