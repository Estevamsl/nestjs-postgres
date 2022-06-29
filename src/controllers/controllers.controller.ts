import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, } from '@nestjs/common';
import { ServicesService } from 'src/services/services.service';

@Controller('controllers') //endpoint para receber requisições para que esse controller seja chamado para executar a ação desejada
export class ControllersController {
  // Container para armazenar os métodos do service (cursosService) Singleton (um único objeto)
  constructor(private readonly coursesService: ServicesService) { } // readonly é um decorator que impede que o valor do atributo seja alterado (cursosService)

  // @Get serve para receber requisições GET da rota controllers e chamar o método findAll
  @Get()
  findAll() {
    return this.coursesService.findAll();
    // return response.status(HttpStatus.OK).send({
    //   message: 'This action returns all controllers'
    //   });
  }

  // Get para id variado
  @Get('/:id')
  findOne(@Param('id') id:number): any {
    return this.coursesService.findOne(id);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  find(@Param() param): string{
    return `This action finds a #${param.id} controller`;
  }

  @Post('/')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body('name') body: string) { // @Param serve para receber o id da rota e @Body para receber o body da requisição e retornar o id
    return `This action updates a #${id} controller`; // Body corpo da requisição o usuário deseja atualizar algo no backend
  }

  @Delete('/:id')
  remove(@Param('id') id: any) {
    return this.coursesService.delete(id);
  }
}
