import fs from 'fs';
import { createServer } from 'net';

const mySocketFile = '/tmp/mysocketfile';

// delete old socket file if any
if (fs.statSync(mySocketFile, {throwIfNoEntry: false}))
  fs.unlinkSync(mySocketFile);

// prevent freeze at build time
if (process.env.npm_lifecycle_event !== 'build')
  createServer((socket) => {}).listen(mySocketFile);

export default async function (req, res, next) {
  console.log(`Got request ${req.url}`);
  next();
}
