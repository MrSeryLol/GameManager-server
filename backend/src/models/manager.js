import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
    login: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true }
})

export const Manager = mongoose.model("Manager", ManagerSchema)