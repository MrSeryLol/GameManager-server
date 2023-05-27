import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserTagSchema = new Schema({
    tag: { type: String, required: true, unique: true },
    games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
})

export const Tag = mongoose.model("UserTag", UserTagSchema)