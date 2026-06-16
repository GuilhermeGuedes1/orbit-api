import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { IsBoolean, IsEnum } from 'class-validator';
import { PaymentMethod } from '../../generated/prisma/client';

export class CreateEventDto {
  @ApiProperty({
    example: 'Wedding at Copacabana Palace',
    description: 'Event title',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    example: '2026-12-20',
    description: 'Event date',
  })
  @IsDateString()
  eventDate!: string;

  @ApiProperty({
    example: '18:00',
    description: 'Event start time',
  })
  @IsString()
  @IsNotEmpty()
  startTime!: string;

  @ApiProperty({
    example: '23:00',
    description: 'Event end time',
  })
  @IsString()
  @IsNotEmpty()
  endTime!: string;

  @ApiProperty({
    example: 'Copacabana Palace',
    description: 'Venue name',
  })
  @IsString()
  @IsNotEmpty()
  venueName!: string;

  @ApiProperty({
    example: 'Av. Atlântica, 1702',
    description: 'Event address',
  })
  @IsString()
  @IsNotEmpty()
  address!: string;

  @ApiProperty({
    example: 'Rio de Janeiro',
    description: 'Event city',
  })
  @IsString()
  @IsNotEmpty()
  city!: string;

  @ApiProperty({
    example: 'RJ',
    description: 'Event state',
  })
  @IsString()
  @IsNotEmpty()
  state!: string;

  @ApiProperty({
    example: 'Client requested open format set until midnight',
    description: 'Additional event notes',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({
    example: 'c4c49f6c-0b0c-4e7f-a92f-1c8d7c6b9d8e',
    description: 'Assigned artist id',
  })
  @IsUUID()
  artistId!: string;

  @ApiProperty({
    example: 'Maria Silva',
    description: 'Client name',
  })
  @IsString()
  @IsNotEmpty()
  clientName!: string;

  @ApiProperty({
    example: '+5521999999999',
    description: 'Client phone number',
    required: false,
  })
  @IsString()
  @IsOptional()
  clientPhone?: string;

  @ApiProperty({
    example: 'maria@email.com',
    description: 'Client email address',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  clientEmail?: string;

  @ApiProperty({
    example: '6h',
    description: 'Artist set duration',
    required: false,
  })
  @IsString()
  @IsOptional()
  setDuration?: string;

  @ApiProperty({
    example: '2026-12-10',
    description: 'Payment date',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  paymentDate?: string;

  @ApiProperty({
    enum: PaymentMethod,
    required: false,
  })
  @IsEnum(PaymentMethod)
  @IsOptional()
  paymentMethod?: PaymentMethod;

  @ApiProperty({
    example: true,
    description: 'Indicates if event has contract',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  hasContract?: boolean;

  @ApiProperty({
    example: 'Empresa XYZ',
    description: 'Client company name',
    required: false,
  })
  @IsString()
  @IsOptional()
  clientCompanyName?: string;
}
