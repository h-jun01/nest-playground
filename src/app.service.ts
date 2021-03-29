import { Injectable } from '@nestjs/common';

// このデコレータでproviderとして認識される。
// そして、controllerのconstructorからDIされる。
@Injectable()
export class AppService {
  // メソッド名はなんでも良い。controllerで指定した名前と違っても良い。（同じにした方がわかりやすい）
  getHello(): string {
    return 'Hello World!';
  }
}
