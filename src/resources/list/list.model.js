import mongoose from "mongoose";
import { Item } from "../item/item.model";
const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    color: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

listSchema.pre("deleteOne", async function () {
  const listId = this.getQuery()["_id"];
  await Item.deleteMany({ list: listId });
});
listSchema.index({ createdBy: 1, name: 1 }, { unique: true });

export const List = mongoose.model("list", listSchema);
