import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';


@Module({
  imports: [MoviesModule], // nest g mo   를 통해 movies 로 치면 이걸 자동으로 만들어준다!!
  controllers: [AppController], //기본적으론 이건 url을 가져오고 함수를 실행하는 것이다. express의 라우터 같은 존재이다.  
  //(기존의 MoviesController) 는 movies.modules.ts 로 옮겨준다 
  providers: [], //여기서 비즈니스로직이 들어간다 
  //(기존의 MoviesService) 는 movies.modules.ts 로 옮겨준다 

  //imports 는 moviesModule 같은 어떤 기능으로 동떨어져 있는건 이렇게 import 하고
  //movies에 대한 앱 기능은 해당 module 에서 constroller, service 를 다룬다

  // controllers와 provider는 메인페이지에 대한것만 관리한다!
})
export class AppModule {}
