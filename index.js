#!/usr/bin/env node
import { program } from 'commander';
import {crtFile}  from '../morph/commands/createFile.js';
import {readfile} from './commands/readFile.js';
import { wrtFile } from './commands/writeFile.js';
import {delFile} from './commands/deleteFile.js';
import {copyfile} from './commands/copyFile.js';

program.command(`create`)
    .argument('<fileName...>', 'File(s) to be Created')
    .description('Create an empty file')
    .action(crtFile);

program.command(`write <fileName> [content]`)
    .description('Write into a file')
    .action(wrtFile);

program.command(`read <filename>`)
    .description(`Read file Content`)
    .action(readfile)

program.command(`del`)
    .argument('<fileName...>', 'File(s) to be deleted')
    .description('Delete a single File')
    .action(delFile)

program.command(`copy`)
    .argument('<filesource>', 'File to be copied')
    .argument('<destination>', 'Destination')
    .description('Copy content of a file to another')
    .action(copyfile)


program.parse(process.argv);