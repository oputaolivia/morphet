#!/usr/bin/env node

// Importing neccessary modules
import { program } from 'commander';

// Importing commands
import {crtFile}  from '../morph/commands/createFile.js';
import {readfile} from './commands/readFile.js';
import { wrtFile } from './commands/writeFile.js';
import {delFile} from './commands/deleteFile.js';
import {copyfile} from './commands/copyFile.js';
import {openfile} from './commands/openFile.js';
import {lookUp} from './commands/searchFile.js';
import {movefile} from './commands/moveFile.js';
import {listfile} from './commands/listFiles.js';

// Implementing commands
program.command(`create`)
    .argument('<fileName...>', 'File(s) to be Created')
    .description('Create empty file(s)')
    .action(crtFile);

program.command(`write <fileName> [content]`)
    .description('Write into a file')
    .action(wrtFile);

program.command(`read <filename>`)
    .description(`Read file Content`)
    .action(readfile)

program.command(`del`)
    .argument('<fileName...>', 'File(s) to be deleted')
    .description('Delete File(s)')
    .action(delFile)

program.command(`copy`)
    .argument('<filesource>', 'File to be copied')
    .argument('<destination>', 'Destination')
    .description('Copy content of a file to another file')
    .action(copyfile)

program.command(`open`)
    .argument('<fileName>', 'File to open with default application')
    .description('Open file with default application')
    .action(openfile)

program.command(`lookup`)
    .argument('<fileName...>', 'File(s) to lookup')
    .description('Search file(s) by name')
    .action(lookUp)

program.command(`move`)
    .argument(`<fileDir>`, 'File original path')
    .argument(`<destinationDir>`, 'File new directory')
    .description('Move file')
    .action(movefile)

program.command(`list`)
    .argument('<folder>','Path of directory in which to view content' )
    .description('List all available files in a directory')
    .action(listfile)

    
program.parse(process.argv);