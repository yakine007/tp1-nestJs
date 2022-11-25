import { TodoStatusEnum } from './todo-status-enum';

describe('TodoStatusEnum', () => {
  it('should be defined', () => {
    expect(new TodoStatusEnum()).toBeDefined();
  });
});
