import fs from 'fs-extra';
import chalk from 'chalk';
import confirm from '@inquirer/confirm';

export const wrtFile = async (fileName, content) =>{
   try{
    const fileExist = fs.existsSync(fileName);
    if (fileExist){
        await fs.writeFile(fileName,content, 'utf8');
        console.log(chalk.greenBright.bold(`${fileName} Edited`))
    }else{
        const msg = chalk.yellowBright.bold(`${fileName} doesn't exist. \n Do you want to create it? `)
        const answer = await confirm({ 
            message: msg
        });
        if (answer){
            await fs.writeFile(fileName,content, 'utf8');
            console.log(chalk.greenBright.bold(`${fileName} created`))
        };
    }
   }catch(err){
    console.log(err);
   }
};

export default wrtFile