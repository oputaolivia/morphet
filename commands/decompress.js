import fs from "fs-extra";
import path from "path";
import unzipper from "unzipper";

export const extractFile = async (fileName) => {
  try {
    fileName.forEach(async (file) => {
      const filePath =  file;
      const outputPath =  "/extracted";
      await fs
        .createReadStream(filePath)
        .pipe(unzipper.Extract({ path: outputPath }))
        .promise();
    });
  } catch (error) {
    console.error(`Can not run command`);
  }
};

export default extractFile;
