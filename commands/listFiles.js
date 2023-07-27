import fs from 'fs-extra';
import chalk from 'chalk';
import path from 'path';
import { error } from 'console';

export const listfile = async (folder)=>{
    try {
        const folderPath = path.resolve(folder);
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
            console.log(file)
        });
    } catch (error) {
        console.error(chalk.redBright(`Error reading Folder: ${error}`))
    }
};

export default listfile