import { Controller, Get, Request, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import {AuthService} from './auth/auth.service';
import { ok } from 'assert';
import { get } from 'http';
import { userInfo } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService:AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login({userId: req.user.id, userName: req.user.username});
  }
  // @Post('auth/login')
  // async login(){
  //   return await this.authService.validateUser("naveen","1234");
  // }

  @UseGuards(AuthGuard('jwt'))
  @Get('todos')
  getTodos(){
    return ['Watch Movie', 'Take Health Test', 'Play Cricket'];
  }

  @UseGuards(AuthGuard('jwt-refreshtoken'))
  @Post('auth/refreshtoken')
  async refreshToken(@Request() req){
    return await this.authService.login(req.user);
  }
}
