import mongoose , { Schema, Document, Model } from "mongoose";

export interface ICategory extends Document {
    name: string;
    decription?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const categoryschema: Schema<ICategory> = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    decription: {
        type: String,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
    }, 
    { timestamps: true}
)

export default mongoose.model<ICategory>("Category", categoryschema);
