#!/usr/bin/env node
import { program } from 'commander';
import {crtFile}  from '../morph/commands/createFile.js';
import {readfile} from './commands/readFile.js';

const command = 'morph'
program.command(`write <fileName> [content]`)
    .description('Create a file')
    .action(crtFile);

program.command(`read <filename>`)
    .description(`Read file Content`)
    .action(readfile)
program.parse(process.argv);