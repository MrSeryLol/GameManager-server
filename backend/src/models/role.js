import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    role: { type: String, unique: true, required: true, default: "User" },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }]
})

export const Role = mongoose.model("Role", RoleSchema)