import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSayBye():string{
    return 'My Name is Hello World ';
  }
}
