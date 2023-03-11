import { resolve } from 'node:path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import User from 'src/db/models/user.entity';
import Message from 'src/db/models/message.entity';
console.log(resolve(__dirname, '..', 'db', 'models ', '*.{ts,js}'));
export const options = {
  type: 'postgres',
  database: 'grap',
  host: 'localhost',
  port: 5432,
  password: 'postgres',
  username: 'postgres',
  synchronize: true,
  logging: true,
  entities: [User, Message],
  migrations: [resolve(__dirname, '..', 'db', 'migrations', '*')],
} satisfies TypeOrmModuleOptions;
