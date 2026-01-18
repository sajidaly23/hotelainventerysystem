import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  item: mongoose.Types.ObjectId;
  type: "IN" | "OUT";
  quantity: number;
  reference?: string;
  createdAt: Date;
}

const transactionSchema = new Schema<ITransaction>(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true
    },

    type: {
      type: String,
      enum: ["IN", "OUT"],
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    reference: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model<ITransaction>("Transaction", transactionSchema);
