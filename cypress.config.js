const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

function readPdf(pdfPath) {
  let dataBuffer = fs.readFileSync(pdfPath);
  return pdf(dataBuffer);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        getPdfContent({ pdfName, dir }) {
          const pdfPath = path.join(dir, pdfName);
          return readPdf(pdfPath);
        },
      });
    },
  },
});
