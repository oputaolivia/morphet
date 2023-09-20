import fs from "fs-extra";
import path from "path";
import archiver from "archiver";

export const compresFile = async (fileName) => {
  try {
    fileName.forEach((file) => {
      const output = fs.createWriteStream(file + '.zip');
      const archive = archiver("zip", {
        zlib: { level: 9 },
      });

      archive.pipe(output);
      archive.file(file, { name: file });
      archive.finalize();
    });
  } catch (err) {
    console.error(`Can not run command`);
  }
};

export const compresDir = async (dirs) => {
  try {
    dirs.forEach((folder) => {
      const folderPath =  folder;
      const output = fs.createWriteStream(folderPath + ".zip");

      const archive = archiver("zip", {
        zlib: { level: 9 },
      });

      archive.pipe(output);
      archive.directory(folderPath, false);
      archive.finalize();
    });
  } catch (err) {
    console.error(`Can not run command`);
  }
};

export default { compresFile, compresDir };
