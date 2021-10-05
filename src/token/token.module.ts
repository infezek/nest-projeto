import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { JogadoresModule } from 'src/jogadores/jogadores.module';
import { TokenSchema } from './interfaces/token.schema';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        JogadoresModule,
        MongooseModule.forFeature([
            { name: 'Token', schema: TokenSchema }
        ]),
    ],
    controllers: [TokenController],
    providers: [TokenService],
    exports: [TokenService]
})
export class TokenModule { }
