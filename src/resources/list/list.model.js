import mongoose, { mongo } from "mongoose";

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

export const List = mongoose.model("list", listSchema);
