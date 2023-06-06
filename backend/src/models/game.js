import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    //images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
    genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    //userTags: [{ type: Schema.Types.ObjectId, ref: "UserTag" }],
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    type: [{ type: String, enum: ["Браузерная", "Компьютерная"]}]
})

export const Game = mongoose.model("Game", GameSchema)