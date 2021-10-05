import { Body, Controller, Put } from "@nestjs/common";
import { RefreshTokenDto } from "./dtos/token.dtos";
import { TokenService } from "./token.service";

@Controller('/api/v1/token')
export class TokenController {
    constructor(
        private readonly tokenService: TokenService

    ) { }


    @Put('refresh')
    async refreshToken(@Body() data: RefreshTokenDto) {
        return this.tokenService.refreashToken(data.oldToken)
    }

}