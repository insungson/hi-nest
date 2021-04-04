//DTO(Data Transfer Object): 데이터 전송 객체
//여기서 movie 데이터의정보들... 사람들이 보낼 수 있는거.. 보냈으면 하는것을 정한다..
// NESTJS 가 가져오는 데이터의 유효성을 검사할 수 있다.
// 당연히 프로그래머로서 인자들을 그때그때 체크할 수 있게 한다..
import {IsString, IsNumber, IsOptional} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;
  
  @IsOptional() //이 걸로 전부포함하지 않을 것이란걸 명시해 준다
  @IsString({each: true})
  readonly genres: string[];
}