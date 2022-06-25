import { Controller } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  findAll(): string {
    return 'This action returns all courses';
  }
}
