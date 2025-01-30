import fs from 'node:fs';
import path from 'node:path';

const publicFolder = path.resolve('public');
const dataFolder = path.resolve('public','data');

export function createDirForData(){
  try {
    if (!fs.existsSync(publicFolder)) {
      console.log("creating storage dir");
      fs.mkdirSync(publicFolder);
      fs.mkdirSync(dataFolder);
    }
  } catch (err) {
    console.error(err);
  }
}
