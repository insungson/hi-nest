import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';


@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {} // 서비스에서 만든걸 생성자로 readonly 를 사용하여 아래의 컨트롤러에서 사용한다!

  @Get() // 빈 Get() 은 / 와 같지만..  movies  가 컨트롤러이기 때문에... /movies 로 접근해야 아래의 함수를 실행시킨다...
  getAll(): Movie[] { //만약 express 위에서 nestJS를 돌리려고 한다면.. getAll(@Req() req, @Res() res) 로해서 express 에서 쓰이는 req, res인자를 쓴다 
    return this.movieService.getAll(); 
    //getAll() 같은 함수들이 다 먹히는 이유는.. 생성자에서 타입스크립트형태로 MoviesService를 제공하기 때문이다!!
    // service 에서 @Injectable() 가 들어기기 때문이고.. 이걸 dependency injection이라고 불리운다!
  }

  @Get('search')
  search(@Query('year') searchingYear: string){
    return `We are searching for a movie with a title made after: ${searchingYear}`;
  }

  @Get('/:id') //NestJS 에선 / 를 빼도 상관은 없다.
  getOne(@Param('id') movieId: number): Movie { //여기서 id 를 갖고 싶다면 @Param('id') 로 파라미터 값을 가져올 수 있다.
    console.log('movieId: ', typeof movieId); // main.ts 에서 transform: true 옵션을 뺀다면..
    //서버에서 string을 보내주기 때문에 string이 찍히지만.. 위의 옵션을 넣어준다면... NestJS 에서 자동으로 number로 변환해준다!
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  @Put()// 전체를 업데이트할때 put 요청 사용
  changeAll() {
    return 'This will Change all movies'
  }

  @Patch('/:id')// 전체중 일부분만 업뎃할때 patch 요청 사용
  patchMovie(@Param('id') movieId: number, @Body() updateData) {
    return this.movieService.update(movieId, updateData);
  }

}
