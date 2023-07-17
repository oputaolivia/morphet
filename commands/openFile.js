import fs from 'fs-extra';
import confirm from '@inquirer/confirm';
import path from 'path';
import chalk from 'chalk';
import open from 'open'

export const openfile = async (fileName) =>{
    try {
        const filePath = path.resolve(fileName);
        const fileExist = fs.existsSync(fileName);
        if (fileExist){
            await open(filePath)
            console.log(chalk.greenBright.bold(`${fileName} opening....`))
        }else{
            const msg = chalk.yellowBright.bold(`${fileName} doesn't exist. \n Do you want to create it? `)
            const answer = await confirm({ 
                message: msg
            });
            if (answer){
                await fs.createFile(fileName)
                console.log(chalk.greenBright.bold(`${fileName} created`))
                await open(filePath)
                console.log(chalk.greenBright.bold(`${fileName} opening....`))
            };
        }
    } catch (error) {
        console.error(error)
    }

};

export default openfile