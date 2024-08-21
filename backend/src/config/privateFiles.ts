import path from "path";
import multer from "multer";

const privateFolder = __dirname.endsWith("/dist")
  ? path.resolve(__dirname, "..", "private")
  : path.resolve(__dirname, "..", "..", "private");

export default {
  directory: privateFolder,

  storage: multer.diskStorage({
    destination: privateFolder,
    filename(req, file, cb) {
      const fileName = new Date().getTime() + path.extname(file.originalname);

      return cb(null, fileName);
    }
  })
};
