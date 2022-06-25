import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { ControllersController } from './controllers/controllers.controller';

@Module({
  imports: [],
  controllers: [AppController, CoursesController, ControllersController],
  providers: [AppService],
})
export class AppModule {}
