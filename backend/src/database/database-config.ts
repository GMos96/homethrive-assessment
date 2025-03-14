import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'node:process';
import 'dotenv/config';

export const DATABASE_CONFIG = () => TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
});