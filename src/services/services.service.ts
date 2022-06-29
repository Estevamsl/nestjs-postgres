import { Injectable, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from 'src/controllers/dto/create-course.dto';
import { UpdateCourseDto } from 'src/controllers/dto/update-course.dto';
import { Course } from 'src/entities/course.entity';
import { Repository } from 'typeorm';

// Os Services são responsáveis pelas regras de negócio da nossa aplicação
@Injectable() // Injectable é um decorator que permite que o serviço seja injetado em outro serviço ou classe como um provider (dependência) geralmente usado para injetar dependências nos controllers
export class ServicesService { // Injetar o Service no Controller para usar os métodos
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ) {}

  // array de cursos que será usado para armazenar os cursos que serão criados e retornados ao usuário (cursosService.create)
  // Esse métodos irão manipular o array de cursos e retornar o curso que foi criado, consultado, consultado em parte, atualizado ou deletado (cursosService.create)
  // São responsáveis pela regra de negócio do curso (cursosService.create)
  // Aqui é o local onde você define as regras de negócio do curso (cursosService.create) e não no controller
  // findAll(): Course[] {
  //   const course = this.courses;
  //   if(!course) {
  //     throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
  //   }
  //   return course;
  // }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: any) {
    const course = this.courseRepository.findOne(id);
    if (!course) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  async update(id: string, UpdateCourseDto: UpdateCourseDto) {
   const course = await this.courseRepository.preload({ id: +id, ...UpdateCourseDto })
   if (!course) {
     throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
   }
    return this.courseRepository.save(course);
  }

  async delete(id: any) {
    const courseToDelete = await this.courseRepository.findOne(id);
    if (!courseToDelete) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    return this.courseRepository.remove(courseToDelete);
    // this.courses = this.courses.filter(course => course.id !== id);
  }
}

// Usar todos esses métodos no Controller