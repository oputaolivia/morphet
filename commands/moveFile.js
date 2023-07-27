import fs from 'fs-extra';
import chalk from 'chalk';
import path from 'path';

export const movefile = async (fileDir, destinationDir )=>{
    try {
        const fileName = path.basename(fileDir);
        const fileExist = fs.existsSync(fileName);
        if (!fileExist){
            console.log(chalk.redBright.bold(`${fileName} does not exist`))
            process.exit(1)
        }else{
            fs.rename(fileDir,destinationDir,(err)=>{
                if (err) {
                    console.error('Error moving the file:', err);
                  } else {
                    console.log(`${fileName} moved successfully!`);
                  }
            })
        }
    } catch (error) {
        console.error('Can not run command')
    }
}

export default movefile