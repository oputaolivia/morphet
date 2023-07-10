#!/usr/bin/env node
import { program } from 'commander';
import {crtFile}  from '../morph/commands/createFile.js';
// const {program} = require('commander');
// const { createFile } = require('./commands/createFile.js');

const command = 'morph'
program.command(`write <fileName> [content]`)
    .description('Create a file')
    .action(crtFile);

program.parse(process.argv);