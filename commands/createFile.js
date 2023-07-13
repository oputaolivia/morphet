import fs from 'fs-extra';
import chalk from 'chalk';

export const crtFile = async (fileName) =>{
   try{
    const fileExist = fs.existsSync(fileName);
    if (!fileExist){
        await fs.createFile(fileName)
        console.log(chalk.greenBright.bold(`${fileName} created`))
    }else{
        console.log(chalk.redBright.bold('File Exists'))
    }
   }catch(err){
    console.log(err);
   }
};

export default crtFile