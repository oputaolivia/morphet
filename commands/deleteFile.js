import fs from 'fs-extra';
import chalk from 'chalk';
import path from 'path'

export const delFile = async (fileName)=>{
    try{
        const fileExist = fs.existsSync(fileName);
        if (fileExist){
            await fs.remove(fileName);
            console.log(chalk.greenBright.bold(`${fileName} Deleted`))
        }else{
        console.log(chalk.redBright.bold('File does not Exists'))
        }
    }catch(err){
        console.log(err)
        // console.log("Can not run command")
    }
}

export default delFile