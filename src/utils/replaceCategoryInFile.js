// Utility script to fix categories - run once
const fs = require('fs');

const filePath = '../data/expandedProducts.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all Sports & Outdoors with Sports
content = content.replace(/category: 'Sports & Outdoors'/g, "category: 'Sports'");

// Replace all Toys & Games with Toys
content = content.replace(/category: 'Toys & Games'/g, "category: 'Toys'");

fs.writeFileSync(filePath, content);
console.log('Categories updated successfully!');
