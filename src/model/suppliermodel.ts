import mongoose, { Schema, Document } from "mongoose";

export interface ISupplier extends Document {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const supplierSchema = new Schema<ISupplier>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      lowercase: true
    },

    phone: {
      type: String
    },

    address: {
      type: String
    }, 

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<ISupplier>("Supplier", supplierSchema);
