import mongoose, { Schema, Document } from "mongoose";

export interface IItem extends Document {
  name: string;
  sku: string;
  category: mongoose.Types.ObjectId;
  supplier: mongoose.Types.ObjectId;
  unit: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const itemSchema = new Schema<IItem>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

 
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: true
    },

    unit: {
      type: String,
      enum: ["pcs", "kg", "litre", "box"],
      default: "pcs"
    },

  

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IItem>("Item", itemSchema);
