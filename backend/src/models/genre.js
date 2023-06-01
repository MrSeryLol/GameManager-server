import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    genre: { type: String, required: true, unique: true },
    games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
})

export const Genre = mongoose.model("Genre", GenreSchema)