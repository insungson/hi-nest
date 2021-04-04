import { Controller, Get } from '@nestjs/common';

@Controller('') //요긴 비워줘야 / 기본주소가 된다!!
export class AppController {
  @Get()
  home(){
    return 'Welcome to my Movie API';
  }
}
