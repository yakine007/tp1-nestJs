import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get('get')
  getHello(): string {
    console.log('get');
    return 'getHello';
  }
  @Post('post')
  modify(): string {
    console.log('post');
    return 'modify';
  }
  @Delete('delete')
  delete(): string {
    console.log('delete');
    return 'delete';
  }
  @Put('put')
  Put(): string {
    console.log('put');
    return 'put';
  }
  @Patch('patch')
  patch(): string {
    console.log('patch');
    return 'patch';
  }
}
