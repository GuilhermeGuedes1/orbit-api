import { IsString, MinLength } from 'class-validator';

export class ParseEventDto {
  @IsString()
  @MinLength(10)
  text!: string;
}
