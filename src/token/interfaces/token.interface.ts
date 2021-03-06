import { Document } from 'mongoose'

export interface Token extends Document {
    readonly hash: string;
    readonly username: string;
}