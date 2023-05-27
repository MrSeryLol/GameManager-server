import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{type: Schema.Types.ObjectId, ref: "Role"}],
    games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
})

export const User = mongoose.model("User", UserSchema)