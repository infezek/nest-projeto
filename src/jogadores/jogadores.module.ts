import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadorSchema } from './interfaces/jogador.schema';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Jogador', schema: JogadorSchema }]),
        forwardRef(() => AuthModule)
    ],
    controllers: [JogadoresController],
    providers: [JogadoresService],
    exports: [JogadoresService]
})
export class JogadoresModule { }
