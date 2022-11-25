import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoControllerController } from './todo-controller/todo-controller.controller';
import { TodoEntity } from './todo-entity';
import { TodoService } from './todo/todo.service';

@Module({
  controllers: [TodoControllerController],
  providers: [TodoService],
  imports: [TypeOrmModule.forFeature([TodoEntity])],
})
export class TodoModuleModule {}
