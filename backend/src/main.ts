import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(process.env.CLIENT_ID);
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.setGlobalPrefix('/api');
  app.useLogger(app.get(Logger));
  await app.listen(process.env.PORT ?? 8080);
}
void bootstrap();
