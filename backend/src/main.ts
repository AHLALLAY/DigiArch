import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get('app.cors.origin'),
    credentials: configService.get('app.cors.credentials'),
  });

  const port = configService.get('app.port') || 3000;

  await app.listen(port);
  console.log(`${configService.get('app.name')} is running on: http://localhost:${port}`);
}
bootstrap();