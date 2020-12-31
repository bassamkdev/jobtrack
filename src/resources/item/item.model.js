import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    notes: {
      type: String,
      maxlength: 500,
    },
    list: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "list",
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true,
    },
    lastUpdated: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Item = mongoose.model("item", itemSchema);
