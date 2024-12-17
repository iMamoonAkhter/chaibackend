import mongoose from "mongoose";

const user = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        },
        
    }, {timestamps: true} //timestamp mean mongoose created two fields automatically in database createdAt & updatedAt
)

export const User = mongoose.model("User", user);