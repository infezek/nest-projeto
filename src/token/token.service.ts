import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { Token } from './interfaces/token.interface';

@Injectable()
export class TokenService {
    constructor(
        @InjectModel('Token') private readonly tokenModel: Model<Token>,
        private readonly jogadorService: JogadoresService,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) { }


    async createToken(hash: string, username: string) {

        const getToken = await this.tokenModel.findOne({ username });
        if (getToken) {
            console.log(getToken)
            return this.tokenModel.findByIdAndUpdate(
                { _id: getToken._id },
                { hash },
                { new: true }
            )
        }


        const token = new this.tokenModel({ hash, username });
        return await token.save();

    }


    async refreashToken(oldToken: string) {
        let token = await this.tokenModel.findOne({ hash: oldToken });


        if (token) {
            const jogador = await this.jogadorService.findOne(token.username)
            return this.authService.login(jogador)
        }
        return new HttpException({
            errorMessage: 'Token is not valid',
        }, HttpStatus.UNAUTHORIZED);
    }
}
