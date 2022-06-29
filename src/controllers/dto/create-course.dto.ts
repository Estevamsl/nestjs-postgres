import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsDate } from 'class-validator';

// CreateCourseDto serve para receber o body da requisição e retornar o id
// CreateCourseDto São objetos simples que serão usados para armazenar os dados do curso que será criado e retornado ao usuário (cursosService.create)
export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isPublished: boolean;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt: Date;
}
