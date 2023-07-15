import fs from 'fs-extra';
import chalk from 'chalk';

export const crtFile = async (fileName) =>{
   try{
    fileName.forEach(async (file) => {
        const fileExist = fs.existsSync(file);
        if (!fileExist){
            await fs.createFile(file)
            console.log(chalk.greenBright.bold(`${file} created`))
        }else{
            console.log(chalk.redBright.bold('File Exists'))
        }
    });
    
   }catch(err){
    console.log("Can not run command");
   }
};

export default crtFile