import { Module } from '@nestjs/common';
import { JogadoresController } from './test.controller';
import { TestService } from './test.service';

@Module({
    imports: [],
    controllers: [JogadoresController],
    providers: [TestService],
    exports: []
})
export class TestModule { }
