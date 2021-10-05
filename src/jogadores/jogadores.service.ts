import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 } from 'uuid'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'


@Injectable()
export class JogadoresService {
    private readonly logger = new Logger(JogadoresService.name);
    private jogadores: Jogador[] = []

    constructor(@InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>) { }

    async criarJogador(criarJogadorDto: CriarJogadorDto) {
        const jogadorCriado = new this.jogadorModel({
            ...criarJogadorDto,
            password: await bcrypt.hashSync(criarJogadorDto.password, 8),
        })
        return await jogadorCriado.save()
    }

    async findAll() {
        return this.jogadores
    }

    async consultarJogador(email: string) {
        return `o email pela url é esse: ${email}`
    }

    async findOne(email: string): Promise<Jogador | undefined> {
        return await this.jogadorModel.findOne({ email });
    }
}
