import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './users/users';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'lallah.db.elephantsql.com',
      port: 5432,
      username: 'wloatmii',
      password: 'LJUVklCMa8_B9J28afCqridQ-F3aJPW9',
      database: 'wloatmii',
      entities: [User],
    }),
    AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
