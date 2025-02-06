const fs = require('fs');
const zlib = require('zlib');

// File paths
const inputFile = './Example.txt';
const compressedFile = './WriteExample.gz';
const outputFile = './uncompressed.txt';

// Compression
const readStream = fs.createReadStream(inputFile, 'utf-8');
const writeStream = fs.createWriteStream(compressedFile);
const gzip = zlib.createGzip();

readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Compression complete.');

    // Decompression
    const readStreamZipped = fs.createReadStream(compressedFile);
    const writeStreamUnzipped = fs.createWriteStream(outputFile);
    const gunzip = zlib.createGunzip();

    readStreamZipped
      .pipe(gunzip)
      .pipe(writeStreamUnzipped)
      .on('finish', () => {
        console.log('Decompression complete.');
      })
      .on('error', (err) => {
        console.error('Error during decompression:', err.message);
      });
  })
  .on('error', (err) => {
    console.error('Error during compression:', err.message);
  });