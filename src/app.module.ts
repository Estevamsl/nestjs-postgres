import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { ControllersController } from './controllers/controllers.controller';
import { ServicesService } from './services/services.service';
import { AulasController } from './aulas/aulas.controller';
import { EscolaController } from './module/escola/escola.controller';
import { CourssesModule } from './coursses/coursses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CourssesModule, TypeOrmModule.forFeature({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [AppController, CoursesController, ControllersController, AulasController, EscolaController],
  // controllers: [AppController, ControllersController, AulasController, EscolaController],

  providers: [AppService, ServicesService],
  // providers: [AppService],

})
export class AppModule {}
