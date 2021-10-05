import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class CriarJogadorDto {
    @IsNotEmpty()
    readonly telefoneCelular: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly nome: string;

    @Length(6, 128)
    @IsNotEmpty()
    readonly password: string;
}