import { Controller, Get, Param, Delete, Body, Patch, Post } from '@nestjs/common';

@Controller('aulas')
export class AulasController {
  constructor() {}

  @Get('/')
  findAll(): string {
    return 'This action returns all aulas';
  }

  @Get('/:id')
  findOne(@Param('id') id: number): string {
    return `This action returns a #${id} aula`;
  }

  @Delete('/:id')
  remove(@Param('id') id: number): string {
    return `This action removes a #${id} aula`;
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body('name') body: string): string {
    return `This action updates a #${id} aula`;
  }

  @Post()
  create(@Body('name') body: string): string {
    return `This action adds a new aula with name ${body}`;
  }

}
