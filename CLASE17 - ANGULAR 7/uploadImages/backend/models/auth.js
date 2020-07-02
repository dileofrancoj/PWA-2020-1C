// Coleccion : usuarios
const dbModel = require("./../bd");

// class Mongo {
//     constructor(){}

//     collection() {
//         // conexion
//         return this;
//     }
//     find() {
//         // busqueda
//         return this;
//     }
// }

authentication = async (user, password) => {
  console.log(user, password);
  const dbo = await dbModel.pool();
  const rows = await dbo
    .collection(process.env.C_USERS)
    .find({ usuario: user, password: password }, { _id: 0, usuario: 1, id: 1 })
    .toArray();
  console.log(rows);
  return rows;
};

module.exports = {
  authentication,
};
