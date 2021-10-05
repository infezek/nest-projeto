import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { CriarJogadorDto } from 'src/jogadores/dtos/criar-jogador.dto';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';

@Injectable()
export class AuthService {

    constructor(
        private jogadorService: JogadoresService,
        private jwtService: JwtService,
        private tokenService: TokenService
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const thereIsTheUser = await this.jogadorService.findOne(email);

        const validPassword = bcrypt.compareSync(password, thereIsTheUser.password)


        if (thereIsTheUser && validPassword) {
            const { __v, password, ...result } = thereIsTheUser["_doc"];
            return result;
        }
        return null;
    }


    async login(user: Jogador) {
        const payload = { username: user.email, sub: user._id };
        const token = this.jwtService.sign(payload)
        await this.tokenService.createToken(token, user.email)

        return {
            access_token: token
        };
    }

}
