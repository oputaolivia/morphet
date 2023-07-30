import fs from 'fs-extra';
import chalk from 'chalk';

export const crtFolder = async (dirs) =>{
   try{
    dirs.forEach(async (folder) => {
        const folderExist = fs.pathExistsSync(folder);
        if (!folderExist){
            fs.mkdirSync(folder, {recursive: true}, err =>{
                if (err){
                    console.log("Can not run command");
                }
            })
            console.log(chalk.greenBright.bold(`${folder} created`))
        }else{
            console.log(chalk.redBright.bold('Folder Exists'))
        }
    });
    
   }catch(err){
    console.log("Can not run command");
   }
};

export default crtFolder