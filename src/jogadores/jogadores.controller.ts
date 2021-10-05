import { Body, Controller, Get, Post, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { CriarJogadorDto } from './dtos/criar-jogador.dto'
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';
import { JogadoresValidatorParametrosPipe } from './pipes/jogadores.pipe';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1/jogadores')
export class JogadoresController {
    constructor(
        private jogadoresService: JogadoresService,
        private authService: AuthService
    ) { }


    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() criarJogadorDto: CriarJogadorDto) {
        return this.jogadoresService.criarJogador(criarJogadorDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async consultarJogador(@Query('email', JogadoresValidatorParametrosPipe) email: string) {
        if (email) {
            return this.jogadoresService.consultarJogador(email)
        }
        return this.jogadoresService.findAll()
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }


}
