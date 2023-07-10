// const fs = require('fs');
// const conf = require('conf')();
// const chalk = require('chalk');

import fs from 'fs-extra';
import chalk from 'chalk';

export const crtFile = async (fileName, content) =>{
   try{
    const fileExist = fs.existsSync(fileName);
    if (!fileExist){
        await fs.writeFile(fileName,content, 'utf8');
        console.log(`${fileName} created`)
    }
   }catch(err){
    console.log(err);
   }
};

export default crtFile