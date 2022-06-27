// entidade de curso que será usada para armazenar os dados do curso que será criado e retornado ao usuário (cursosService.create)
export class Course { // classe que representa o curso que será criado e retornado ao usuário (cursosService.create)
  id: number;
  name: string;
  description: string;
  isPublished: boolean;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

// entidade de curso que será usada para armazenar os dados do curso que será criado e retornado ao usuário (cursosService.create)