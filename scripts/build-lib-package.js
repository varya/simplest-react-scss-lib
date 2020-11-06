import path from 'path';
import { cp, mkdir } from 'shelljs';
var exec = require('child_process').exec;

import { ROOT, OUTPUT_DIR, OUTPUT_DIR_CODE } from '../config/config';

// Create package folder
mkdir(OUTPUT_DIR);
mkdir(OUTPUT_DIR_CODE);

// Put package file
cp(path.resolve(ROOT, 'package.json'), path.resolve(OUTPUT_DIR_CODE, 'package.json'));

// Put npmrc file
cp(path.resolve(ROOT, '.npmrc'), path.resolve(OUTPUT_DIR_CODE, '.npmrc'));

// Copy sources
cp('-r', path.resolve(ROOT, 'src'), OUTPUT_DIR_CODE);
// Remove stories
exec(`find ${OUTPUT_DIR_CODE} -type f -name '*.stories.js' -delete`)

// Copy configs
cp('-r', path.resolve(ROOT, 'config'), OUTPUT_DIR_CODE);
