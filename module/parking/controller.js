const parkinkSchema = require("./schema");

const all = async (req, res) => {
  const parkings = await parkinkSchema.find();
  return res.status(200).json(parkings);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const parking = await parkinkSchema.findById(id);
  if (!parking) {
    return res.status(404).json({ message: "Parking not found" });
  } else {
    return res.status(200).json(parking);
  }
};

const save = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (id) {
    await parkinkSchema.updateOne({ _id: id }, { $set: body });
    const updated = await parkinkSchema.findById(id);
    return res.status(202).json({ message: "Parking updated", updated });
  } else {
    const parking = new parkinkSchema(body);
    await parking.save();
    return res.status(201).json({ message: "Parking Created" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  await parkinkSchema.deleteOne({ _id: id });
  return res.status(204);
};

module.exports = {
  all,
  findById,
  remove,
  save
};
