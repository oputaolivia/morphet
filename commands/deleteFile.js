import fs from 'fs-extra';
import chalk from 'chalk';
import path from 'path'

export const delFile = async (fileName)=>{
    try{
        fileName.forEach( async (file) => {
            const fileExist = fs.existsSync(file);
            if (fileExist){
                await fs.remove(file);
                console.log(chalk.greenBright.bold(`${file} Deleted`))
            }else{
                console.log(chalk.redBright.bold('File does not Exists'))
        }
        });
        
    }catch(err){
        console.log("Can not run command")
    }
}

export default delFile