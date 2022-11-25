import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';
import { TodoDto } from '../dto/todo-dto';
import { UpdateTodoDto } from '../dto/UpdateTodo-dto';
import { TodoEntity } from '../todo-entity';
import { TodoModel } from '../todo-model';
import { TodoService } from '../todo/todo.service';

@Controller('todo')
export class TodoControllerController {
  private todos = [];

  constructor(private todoservice: TodoService) {}

  @Get()
  getTodos() {
    return this.todoservice.getTodo();
  }

  @Post()
  addTodo(@Body() todo: TodoEntity) {
    // const todo = new TodoModel();
    // todo.name = todoDto.name;
    // todo.description = todoDto.description;
    // this.todos.push(todo);
    // return todo;
    this.todoservice.addTodo(todo);
  }

  @Get(':id')
  getTodo(@Param('id') id: number) {
    return this.todoservice.getTodoById(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    // this.todos = this.todos.filter((todo) => todo.id != id);

    // return 'Data deleted successfully';
    this.todoservice.deleteTodo(id);
  }
  @Delete('/soft/:id')
  softDeleteTodo(@Param('id') id: number) {
    // this.todos = this.todos.filter((todo) => todo.id != id);

    // return 'Data deleted successfully';
    this.todoservice.softDeleteTodo(id);
  }

  @Put(':id/:name')
  updateTodo(@Param('id') id: number, @Param('name') name: string) {
    //   const todo = this.todos.find((todo) => todo.id == id);
    //   if (updateTodoDto.name) {
    //     todo.name = updateTodoDto.name;
    //   }
    //   if (updateTodoDto.description) {
    //     todo.description = updateTodoDto.description;
    //   }
    //   if (updateTodoDto.status) {
    //     todo.status = updateTodoDto.status;
    //   }
    //   return todo;
    // }
    this.todoservice.updateTodo(id, name);
  }
  @Post('/restore/:id')
  restoreTodo(@Param('id') id: number) {
    this.todoservice.restoreTodo(id);
  }
}
