import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// entidade de curso que será usada para armazenar os dados do curso que será criado e retornado ao usuário (cursosService.create)
@Entity("couses")
export class Course { // classe que representa o curso que será criado e retornado ao usuário (cursosService.create)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isPublished: boolean;
  
  @Column()
  price: number;

  // @Column()
  // createdAt: Date;

  // @Column()
  // updatedAt: Date;
}

@Entity()
export class CourseEntity { // classe que representa o curso que será criado e retornado ao usuário (cursosService.create)
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  isPublished: boolean;
  @Column()
  price: number;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}

// entidade de curso que será usada para armazenar os dados do curso que será criado e retornado ao usuário (cursosService.create)
// export class Course { // classe que representa o curso que será criado e retornado ao usuário (cursosService.create)
// Será usado no service para armazenar os dados do curso que será criado e retornado ao usuário (cursosService.create)
// Será usado em uma lista de cursos no service e com os seus respectivos métodos