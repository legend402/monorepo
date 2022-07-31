import cpy from 'cpy';
import { resolve, dirname } from 'path';
import { promises as fs } from 'fs';
import less from 'less';
import glob from 'fast-glob';

const sourceDir = resolve(__dirname, '../src');

const targetLib = resolve(__dirname, '../lib');

const targetEs = resolve(__dirname, '../es');

const srcDir = resolve(__dirname, '../src');
console.log(targetEs);



const buildLess = async () => {
  await cpy(`${sourceDir}/**/*.less`, targetLib)
  await cpy(`${sourceDir}/**/*.less`, targetEs)

  const lessFiles = await glob('./**/*.less', { cwd: srcDir, onlyFiles: true });

  for (const path of lessFiles) {
    const filepath = `${srcDir}/${path}`;

    const lessCode = await fs.readFile(filepath, 'utf-8');

    const code = await less.render(lessCode, {
      paths: [srcDir, dirname(filepath)],
    })
    console.log(lessFiles);

    const cssPath = path.replace('.less', '.css');

    await fs.writeFile(resolve(targetLib, cssPath), code.css);
    await fs.writeFile(resolve(targetEs, cssPath), code.css);
  }
}

buildLess();