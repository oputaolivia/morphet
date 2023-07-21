import fs from 'fs-extra';
import chalk from 'chalk';

export const lookUp = async (fileName)=>{
    try {
        fileName.forEach( async file => {
            const fileExist = fs.existsSync(file);
            if (!fileExist){
                console.log(chalk.redBright.bold(`${file} does not exist`))
            }else{
                console.log(chalk.greenBright.bold(`${file}File Exists`))
            }
        });
    } catch (error) {
        console.error(error)
    }
}

export default lookUp