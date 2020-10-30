import { Injectable } from '@nestjs/common';
import { User } from './users';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>){

  }
  async findOne(userName: string): Promise<User | undefined> {
    return  this.userRepo.findOne({userName});
  }
  async saveorupdateRefreshToke(
     refreshToken:string,
     id:string, 
     refreshtokenexpires){
    await this.userRepo.update(id,{refreshtoken:refreshToken, refreshtokenexpires});
  }
}
