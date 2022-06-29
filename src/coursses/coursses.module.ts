import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';
import { CoursesController } from 'src/courses/courses.controller';
import { ServicesService } from 'src/services/services.service';

// os módulos são responsáveis por armazenar os componentes do projeto
@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CoursesController],
  providers: [ServicesService],
})
export class CourssesModule {}
