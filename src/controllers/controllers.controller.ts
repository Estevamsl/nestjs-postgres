import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, } from '@nestjs/common';

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

  @Patch('/:id')
  update(@Param('id') id: string, @Body('name') body: string) {
    return `This action updates a #${id} controller`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} controller`;
  }
}
