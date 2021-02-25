import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    jobId: {
      type: String,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    companyType: String,
    url: {
      type: String,
      required: true,
    },
    employmentType: String,
    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    notes: {
      type: String,
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
  },
  { timestamps: true }
);

export const Item = mongoose.model("item", itemSchema);
