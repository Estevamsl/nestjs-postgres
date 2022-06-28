import { Module } from '@nestjs/common';
import { CoursesController } from 'src/courses/courses.controller';
import { ServicesService } from 'src/services/services.service';

// os módulos são responsáveis por armazenar os componentes do projeto
@Module({
  controllers: [CoursesController],
  providers: [ServicesService],
})
export class CourssesModule {}
