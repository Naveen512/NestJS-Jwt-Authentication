import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    
    constructor(private usersService:UsersService,
        private jwtService:JwtService){

    }

    async validateUser(userName:string, pass:string):Promise<any>{
        const user = await this.usersService.findOne(userName);
        if(user && user.password === pass){
            const result = {
               id: user.id,
               userName:  user.userName
            };
            return result;
        }
        return null;
    }

    async login(user:any){
        const payload = {username: user.userName, sub: user.id};
        return{
            accessToken : this.jwtService.sign(payload)
        }
    }
}
