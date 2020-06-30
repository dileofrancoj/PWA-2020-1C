const dbModel = require("./../bd");

const list = async () => {
  const dbo = await dbModel.pool();
  return await dbo.collection(process.env.COLECTION_NAME).find().toArray();
};

const add = async (obj) => {
  const dbo = await dbModel.pool();
  return await dbo.collection(process.env.COLECTION_NAME).insertOne(obj);
};

module.exports = {
  list,
  add,
};
