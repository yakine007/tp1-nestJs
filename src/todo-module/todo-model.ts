import { v4 as uuidv4 } from 'uuid';

export class TodoModel {
  constructor(
    public id = uuidv4(),
    public name = '',
    public description = '',
    public createdAt = new Date(),
    public status = TodoStatusEnum.waiting,
  ) {}
}

export enum TodoStatusEnum {
  'actif' = 'en cours',
  'waiting' = 'en attente',
  'done' = 'finalisé',
}
