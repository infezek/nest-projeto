import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { JogadoresModule } from './jogadores/jogadores.module';
import { TestModule } from './test/test.module';



@Module({
    imports: [
        JogadoresModule,
        MongooseModule.forRoot('mongodb://nestproject-mongo/app'),
        AuthModule,
        TestModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
