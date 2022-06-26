import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('controllers')
export class ControllersController {
  @Get()
  findAll(@Res() response): string {
    return response.status(HttpStatus.OK).send({
      message: 'This action returns all controllers'
      });
  }

  // Get para id variado
  @Get('/:id')
  findOne(@Param('id') id:number): string {
    return `This action returns a #${id} controller`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body) {
    return body;
  }
}
