import { PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsDate } from 'class-validator';
import { CreateCourseDto } from './create-course.dto';

// CreateCourseDto serve para receber o body da requisição e retornar o id
// CreateCourseDto São objetos simples que serão usados para armazenar os dados do curso que será criado e retornado ao usuário (cursosService.create)
export class UpdateCourseDto {
  @IsNotEmpty()
  @IsString()
  readonly name?: string;

  @IsNotEmpty()
  @IsString()
  readonly description?: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isPublished?: boolean;

  @IsNotEmpty()
  @IsNumber()
  readonly price?: number;

  @IsNotEmpty()
  @IsDate()
  readonly createdAt?: Date;

  @IsNotEmpty()
  @IsDate()
  readonly updatedAt?: Date;
}
