import { Body, Controller, Get, Post, Query, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TestService } from './test.service';


@Controller('test')
export class JogadoresController {
    constructor(private testService: TestService) { }

    @Get()
    async test() {
        return this.testService.test()
    }
}
