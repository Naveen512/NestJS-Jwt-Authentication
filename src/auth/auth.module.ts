import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [UsersModule, PassportModule,
  JwtModule.register({
    secret: "My Secret Never let outsiders",
    signOptions:{
      expiresIn: '60s'
    }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
