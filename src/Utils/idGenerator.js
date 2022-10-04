const idGenerator = (db) => {
  const database = db;
  const usedId = database.map(({ id }) => id);
  usedId.sort((a, b) => b - a);
  return Number(usedId[0]) + 1;
};

module.exports = idGenerator;