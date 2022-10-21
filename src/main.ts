import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'; //alterar timezone para horario de brasilia

  app.useGlobalPipes(new ValidationPipe()); //usar class-validator em todas as requisiçoes
  app.enableCors(); //sistema que permite requisiçoes externas
  await app.listen(4000);
}
bootstrap();
