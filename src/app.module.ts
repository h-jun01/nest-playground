import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';

// このアプリのルートモジュール
// importsの配列の中に他のmoduleを入れると別のmoduleをimportすることが可能。
@Module({
  imports: [],
  // コントローラーはmoduleファイルで明記しておく必要あり
  // これをやらないとNestJSはコントローラーを読んでくれない
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
