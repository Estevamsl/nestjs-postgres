import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { ControllersController } from './controllers/controllers.controller';
import { ServicesService } from './services/services.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController, ControllersController],
  providers: [AppService, ServicesService],
})
export class AppModule {}
