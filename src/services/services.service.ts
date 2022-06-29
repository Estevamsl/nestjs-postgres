import { Injectable, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { Course } from 'src/controllers/entities/course.entity';

// Os Services são responsáveis pelas regras de negócio da nossa aplicação
@Injectable() // Injectable é um decorator que permite que o serviço seja injetado em outro serviço ou classe como um provider (dependência) geralmente usado para injetar dependências nos controllers
export class ServicesService { // Injetar o Service no Controller para usar os métodos
  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular Course',
      isPublished: true,
      price: 1.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'NodeJS',
      description: 'NodeJS Course',
      isPublished: true,
      price: 2.99,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];
  
  // array de cursos que será usado para armazenar os cursos que serão criados e retornados ao usuário (cursosService.create)
  // Esse métodos irão manipular o array de cursos e retornar o curso que foi criado, consultado, consultado em parte, atualizado ou deletado (cursosService.create)
  // São responsáveis pela regra de negócio do curso (cursosService.create)
  // Aqui é o local onde você define as regras de negócio do curso (cursosService.create) e não no controller
  findAll(): Course[] {
    const course = this.courses;
    if(!course) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  findOne(id: number): Course {
    const course = this.courses.find(course => course.id === Number(id));
    if (!course) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    // course.id = this.courses.length + 1;
    // course.createdAt = new Date();
    // course.updatedAt = new Date();
    // this.courses.push(course);
    // return course;
  }

  update(id: number, course: Course): Course {
    const courseToUpdate = this.findOne(id);
    courseToUpdate.name = course.name;
    courseToUpdate.description = course.description;
    courseToUpdate.isPublished = course.isPublished;
    courseToUpdate.price = course.price;
    courseToUpdate.updatedAt = new Date();
    return courseToUpdate;
  }

  delete(id: any): Course {
    const courseToDelete = this.findOne(id);
    this.courses = this.courses.filter(course => course.id !== id);
    return courseToDelete;
  }
}

// Usar todos esses métodos no Controller