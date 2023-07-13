#!/usr/bin/env node
import { program } from 'commander';
import {crtFile}  from '../morph/commands/createFile.js';
import {readfile} from './commands/readFile.js';
import { wrtFile } from './commands/writeFile.js';
import {delFile} from './commands/deleteFile.js';

const command = 'morph'
program.command(`create <fileName>`)
    .description('Create an empty file')
    .action(crtFile);

program.command(`write <fileName> [content]`)
    .description('Write into a file')
    .action(wrtFile);

program.command(`read <filename>`)
    .description(`Read file Content`)
    .action(readfile)

program.command(`del <fileName..>`)
.description('Delete File')
.option('-d, --del, <del..>')
.action(delFile)
program.parse(process.argv);