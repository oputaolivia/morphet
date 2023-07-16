import fs from 'fs-extra';
import chalk from 'chalk';
import path from 'path';

export const copyfile = async (fileSource, destination)=>{
    try {
        const sourcePath = path.resolve(fileSource);
        const destinationPath = path.resolve(destination);
        const file = path.basename(sourcePath)
        fs.copyFile(sourcePath,destinationPath, fs.constants.COPYFILE_FICLONE)
        console.log(chalk.green.bold(`Content of ${file} has been copied`))
    } catch (error) {
        console.log(error)
    }

}

export default copyfile