function getOne(model) {
  return async function (req, res) {
    try {
      const doc = await model
        .findOne({ createdBy: req.user.sub, _id: req.params._id })
        .lean()
        .exec();
      if (!doc) {
        return res.status(400).end();
      }
      res.status(200).json({ data: doc });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

function getMany(model) {
  return async function (req, res) {
    try {
      const docs = await model.find({ createdBy: req.user.sub }).lean().exec();
      res.status(200).json({ data: docs });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

function createOne(model) {
  return async function (req, res) {
    const createdBy = req.user.sub;
    try {
      const doc = await model.create({ ...req.body, createdBy });
      res.status(201).json({ data: doc });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

function updateOne(model) {
  return async function (req, res) {
    try {
      const updatedDoc = await model
        .findOneAndUpdate(
          {
            createdBy: req.user.sub,
            _id: req.params.id,
          },
          req.body,
          { new: true }
        )
        .lean()
        .exec();
      if (!updatedDoc) {
        return res.status(400).end();
      }
      res.status(200).json({ data: updatedDoc });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

function removeOne(model) {
  return async function (req, res) {
    try {
      const removed = await model.findOneAndRemove({
        createdBy: req.user.sub,
        _id: req.params.id,
      });
      if (!removed) {
        return res.status(400).end();
      }
      return res.status(200).json({ data: removed });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

function crudControllers(model) {
  return {
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model),
  };
}

export { crudControllers };
