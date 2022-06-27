import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { ControllersController } from './controllers/controllers.controller';
import { ServicesService } from './services/services.service';
import { AulasController } from './aulas/aulas.controller';
import { EscolaController } from './module/escola/escola.controller';

@Module({
  imports: [],
  controllers: [AppController, CoursesController, ControllersController, AulasController, EscolaController],
  providers: [AppService, ServicesService],
})
export class AppModule {}
