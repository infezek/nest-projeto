import { Document } from 'mongoose'

export interface Jogador extends Document {
    readonly _id: string;
    readonly telefoneCelular: string;
    readonly email: string;
    readonly password: string;
    nome: string;
    ranking: string
    posicaoRanking: number;
    urlFotoJogador: string;
}