import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {Movie} from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie =  this.movies.find(movie => movie.id === id); //+id 는 string => number 로 바꿔준다
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`); // NotFoundException 는 NestJS 에서 제공하는 기능이다...
    }
    return movie;
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
    return true;
  }

  create(moviedata: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...moviedata
    });
    return this.movies;
  }

  update(id: number, updateData: UpdateMovieDto){ //CreateMovieDto 와 차이점은 ? 로 선택이 가능하다는 점이다!
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({...movie, ...updateData})
  }

}
