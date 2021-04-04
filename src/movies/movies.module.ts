import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({ // app.modules 에선 메인에 대한것만 처리하고 movie의 세부적인건 여기서 처리한다
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
