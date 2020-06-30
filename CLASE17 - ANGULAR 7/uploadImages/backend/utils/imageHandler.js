const fs = require("fs"); // file system
const uuid = require("node-uuid");
// {
// fieldname: 'foto',
// originalname: 'knex.png',
// encoding: '7bit',
// mimetype: 'image/png',
// destination: './public/tmp',
// filename: '3c88b4d0fc2fbb3c0e39fbc8c6a7a384',
// path: 'public\\tmp\\3c88b4d0fc2fbb3c0e39fbc8c6a7a384',
// size: 19479
// }

// cp /origin /dest
const saveImage = (file) => {
  const extensionsAllow = ["jpeg", "png"];
  let fileNameResult = ""; // uuid.extension
  const { mimetype, filename } = file;
  const extension = mimetype.split("/")[1];
  if (extensionsAllow.includes(extension)) {
    const uid = uuid();
    fileNameResult = `${uid}.${extension}`; // asd1822e-ansd8123qew-asd9ja0n1.png
    const fileNameTmp = `./public/tmp/${filename}`;
    const fileNameOut = `./public/images/${fileNameResult}`;
    fs.createReadStream(fileNameTmp).pipe(fs.createWriteStream(fileNameOut));
    // Cuando no se incorporan las llaves dentro de un arrow function el return es implicito
    fs.unlink(fileNameTmp, (error) => console.error(error));
  }
  return fileNameResult; // asd1822e-ansd8123qew-asd9ja0n1.png
};

module.exports = {
  saveImage,
};
