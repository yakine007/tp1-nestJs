import { v4 as uuidv4 } from 'uuid';
import { TodoStatusEnum } from './todo-status-enum';

export class TodoModel {
  constructor(
    public id = uuidv4(),
    public name = '',
    public description = '',
    public createdAt = new Date(),
    public status = TodoStatusEnum.waiting,
  ) {}
}
