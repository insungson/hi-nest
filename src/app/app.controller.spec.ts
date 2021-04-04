// import { Test, TestingModule } from '@nestjs/testing';
// import { AppController } from './app.controller';
// import * as request from 'supertest';
// import { INestApplication } from '@nestjs/common';

// describe('AppController', () => {
//   let controller: AppController;
//   let app: INestApplication;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AppController],
//     }).compile();

//     controller = module.get<AppController>(AppController);
//     app = module.createNestApplication();
//     await app.init();
//   });

//   it('/ (GET)', () => {
//     return request(app.getHttpServer()) //api request 이다.
//       .get('/')
//       .expect(200)
//       .expect('Welcome to my Movie API')
//   });

//   it('/movie (GET)', () => {
//     return request(app.getHttpServer())
//       .get('/movies')
//       .expect(200)
//       .expect([]);
//   });

// });
