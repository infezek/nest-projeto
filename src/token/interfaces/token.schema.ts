import * as mongoose from 'mongoose'

export const TokenSchema = new mongoose.Schema({
    hash: { type: String },
    username: { type: String }
}, {
    timestamps: true, collection: 'token'
})