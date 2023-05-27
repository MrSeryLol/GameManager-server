import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    name: { type: String, required: true, unique: true },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    games: [{ type: Schema.Types.ObjectId, ref: "Game" }]
})

export const Developer = mongoose.model("Developer", DeveloperSchema)