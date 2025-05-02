#!/usr/bin/env node
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const summary = data.summary || {};
console.log(`Inserted: ${summary.inserted}, Updated: ${summary.updated}, Errors: ${summary.errors}`);
// Optionally write GitHub Actions outputs:
console.log(`::set-output name=inserted::${summary.inserted || 0}`);
console.log(`::set-output name=updated::${summary.updated || 0}`);
console.log(`::set-output name=errors::${summary.errors || 0}`);
