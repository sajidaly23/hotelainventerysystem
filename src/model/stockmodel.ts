import mongoose, { Schema, Document } from "mongoose";

export interface IStock extends Document {
  item: mongoose.Types.ObjectId;
  quantity: number;
  minimumLevel: number;
  updatedAt: Date;
}

const stockSchema = new Schema<IStock>(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true,
      unique: true
    },

    quantity: {
      type: Number,
      default: 0
    },

    minimumLevel: {
      type: Number,
      default: 5
    }
  },
  { timestamps: true }
);

export default mongoose.model<IStock>("Stock", stockSchema);
