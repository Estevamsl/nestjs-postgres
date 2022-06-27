import { Controller, Get, Param, Delete, Body, Patch, Post, HttpCode, HttpStatus, Res, Put, HttpException } from '@nestjs/common';
import { ServicesService } from '../services/services.service';

@Controller('aulas') //url rota para aulas (/aulas)
export class AulasController {
  constructor(private readonly  coursesService: ServicesService) {} // Injectable é um decorator que permite que o serviço seja injetado em outro serviço ou classe como um provider (dependência)

  @Get('/')
  findAll(@Res() response): string { // Response é um objeto que é passado para o controller e é usado para retornar uma resposta ao usuário
    return response.status(HttpStatus.OK).send({
      'message': 'This action returns all aulas'
    });
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    const course = this.coursesService.findOne(id);

    if (!course) {
      throw new HttpException(`#${id} Not found `, HttpStatus.NOT_FOUND);
    }
    // return `This action returns a #${id} aula`;
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.coursesService.delete(id);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body('name') body: string): string {
    return `This action updates a #${id} aula`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body: any) {
    return this.coursesService.create(body);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  updateAll(@Param('id') id: number, @Body('name') body: string): string {
    return `This action updates a #${id} aula`;
  }

}
