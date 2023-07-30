import fs from 'fs-extra';
import chalk from 'chalk';
import path from 'path'

export const delFolder = async (dirs)=>{
    try{
        dirs.forEach( async (folder) => {
            const folderExist = fs.pathExistsSync(folder);
            if (folderExist){
                fs.rm(folder, {recursive: true}, err =>{
                    if (err){
                        console.log("Can not run command");
                    }
                })
                console.log(chalk.redBright.bold(`${folder} deleted`))
            }else{
                console.log(chalk.redBright.bold('Folder does not Exists'))
            }
        });
        
    }catch(err){
        console.log("Can not run command")
    }
}

export default delFolder