import fs from 'fs-extra';
import chalk from 'chalk';

export const crtFile = async (fileName, content) =>{
   try{
    const fileExist = fs.existsSync(fileName);
    if (!fileExist){
        await fs.writeFile(fileName,content, 'utf8');
        console.log(chalk.greenBright.bold(`${fileName} created`))
    }else{
        console.log(chalk.redBright.bold('File Exists'))
    }
   }catch(err){
    console.log(err);
   }
};

export default crtFile