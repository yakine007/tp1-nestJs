/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../todo-entity';
import { TodoStatusEnum } from '../todo-status-enum';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async addTodo(todo: TodoEntity) {
    return await this.todoRepository.save(todo);
  }
  async updateTodo(id, Mname) {
    await this.todoRepository.update(id, {
      name: Mname,
      // description: todo.description,
    });
  }

  async getTodo() {
    return await this.todoRepository.find();
  }
  
  async getTodoById(id) {
    return await this.todoRepository.findOne({where:{id}});
  }
  async deleteTodo(id : number) {
    return await this.todoRepository.delete(id);
  }
  async softDeleteTodo(id) {
    return await this.todoRepository.softDelete(id);
  }
  async restoreTodo(id) {
    return await this.todoRepository.restore(id);
  }
  

}
