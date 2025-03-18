import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        const errorBody = errors.map((error: ValidationError) => {
          return {
            fieldName: error.property,
            errors: Object.values(error.constraints ?? []),
          };
        });

        throw new BadRequestException(errorBody, 'Validation Error');
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
