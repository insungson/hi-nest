//보통 entities 에서는 실제 데이터베이스 모델을 만들어야 한다!

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[]; 
}