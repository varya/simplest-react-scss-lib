import path from 'path';

export const ROOT = path.resolve(__dirname, '..');

export const CODE_PACKSAGE_NAME = 'simplest-react-scss-lib';

export const COMPONENTS_SRC = path.resolve(ROOT, 'src/components');
export const GLOBALS_SRC = path.resolve(ROOT, 'src/globals');

export const OUTPUT_DIR = path.resolve(ROOT, 'dist');
export const OUTPUT_DIR_CODE = path.resolve(OUTPUT_DIR, CODE_PACKSAGE_NAME);

export const CONFIG_DIR = path.resolve(ROOT, 'config');