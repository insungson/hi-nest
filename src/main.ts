import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //App을 만들고 
  //아래에서 유효성 검사를 위한 파이프를 만들어보자  이를 위해서  (class-validator, class-transformer 를 npm 으로 설치하자)
  // 사용은 dto의 클래스 내부에서 한다.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // true 설정시 아무 데코레이터도 없는 어떠한 property의 object 를 거르게 된다!
    forbidNonWhitelisted: true, //true 설정시 throw 에러로 처리하게 된다!! 
    transform: true, // NestJS 는 타입을 받아서 넘겨줄때.. 자동으로 타입도 변환해준다!! 
    //(controller에서 콘솔로 transform 옵션을 넣을떄 뺄때 비교하여 확인해보자)
    //expressJS 는 이런 기능들이 없기 때문에.. 서버에서 변환을 해줘야 하지만.. NestJS 는 가능하다!! 
  }));
  await app.listen(3000); //여기서 로컬주소 설정한다!!
}
bootstrap();
