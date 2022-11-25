import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class TodoDto {
  @IsString()
  @IsNotEmpty({
    message: 'Le champ est vide',
  })
  @MinLength(3)
  @MaxLength(10)
  name: string;

  @IsString()
  @IsNotEmpty({
    message: 'Le champ est vide',
  })
  @MinLength(10)
  description: string;
}
