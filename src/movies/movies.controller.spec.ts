import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';

//.spec 파일확장자가 들어간것은... 해당 이름과 같은 파일의 테스팅을 하는 것이다.
describe('MoviesController', () => {
  let controller: MoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
});
