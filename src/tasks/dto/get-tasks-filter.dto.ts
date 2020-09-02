import { TaskStatus } from '../task.model';
import { IsIn, IsOptional } from 'class-validator';

export default class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @IsOptional()
  search: string;
}