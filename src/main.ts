import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // expressでいう const app = express();
  // create()の引数にはルートモジュールクラスを指定する
  const app = await NestFactory.create(AppModule);
  await app.listen(8002);
}
bootstrap();
