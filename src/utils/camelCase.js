let args = process.argv.slice(2);

const fs = require("fs");
const path = require("path");

let basePath = args[0];
let exclude = args[1];

let excludeRegEx = new RegExp(`^${exclude}`);

let declarationRegex = /.+\s+{/g;
let dashCaseRegex = /(\S)-(\S)/g;

function middleReplace(match, beforeDash, afterDash) {
  return `${beforeDash}${afterDash.toUpperCase()}`;
}

function declarationReplace(match) {
  return match.replace(dashCaseRegex, middleReplace);
}

function replaceCss(content) {
  return content.replace(declarationRegex, declarationReplace);
}

function CssFileReplace(_path) {
  let content = fs.readFileSync(_path, "utf8");
  let replaced = replaceCss(content);
  fs.writeFileSync(_path, replaced);
}

const replace = (base) => {
  fs.readdir(base, { withFileTypes: true }, (err, dirents) => {
    dirents.forEach((dirent) => {
      let fullPath = path.join(base, dirent.name);
      if (dirent.isDirectory()) {
        replace(fullPath);
        return;
      }
      if (path.extname(dirent.name) === ".css") {
        CssFileReplace(fullPath);
      }
    });
  });
};

replace(basePath);
