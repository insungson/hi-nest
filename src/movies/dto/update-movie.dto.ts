import {IsString, IsNumber} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto){

 // // 아래것 대신에.. npm i @nestjs/mapped-types  로 PartialType() 을 사용할 수 있도록 따로 패키지를 설치해주자!!!
 // // mapped-types 는 타입을 변환시키고.. 사용할 수 있게 하는 패키지이다!
 // // https://www.npmjs.com/package/@nestjs/mapped-types  에 들어가서 확인해보면.. 스웨거나 그랲큐엘도 사용할 수 있음을 알 수 있다.
  // @IsString()
  // readonly title?: string; //update 는 다 수정하는게 아닌 일부분만 하므로 ? 로 선택을 하게 해준다

  // @IsNumber()
  // readonly year?: number;
  
  // @IsString({each: true})
  // readonly genres?: string[];
}