import fs from 'fs-extra';
import chalk from 'chalk';
import confirm from '@inquirer/confirm';

export const readfile = async (fileName) =>{
   try{
    const fileExist = fs.existsSync(fileName);
    if (!fileExist){
        const msg = chalk.yellowBright.bold(`${fileName} doesn't exist. \n Do you want to create it? `)
        const answer = await confirm({ 
            message: msg
        });
        if (answer){
            fs.writeFile(fileName,'', 'utf-8');
            console.log(chalk.greenBright.bold(`${fileName} created`))
        };
    }else{
        fs.readFile(fileName, 'utf-8',(err, content)=>{
        console.log(content)
        })
    }
   }catch(err){
    console.log(err);
   }
};

export default readfile