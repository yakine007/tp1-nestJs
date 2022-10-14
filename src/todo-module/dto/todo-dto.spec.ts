import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoModel } from '../todo-model';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsEnum(TodoModel)
  status: TodoModel;
}
