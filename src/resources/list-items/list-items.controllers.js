import { Item } from "../item/item.model";

async function getMany(req, res) {
  try {
    const docs = await Item.find({
      createdBy: req.user.sub,
      list: req.params.id,
    })
      .lean()
      .exec();

    res.status(200).json({ data: docs });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
export default getMany;
