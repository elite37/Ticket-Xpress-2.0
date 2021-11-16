let args = process.argv.slice(2);

const fs = require("fs");
const path = require("path");

let basePath = args[0];
let module_name = args[1];
let exclude = args[2];
let camelCase = args[3];

console.log(typeof camelCase)

let excludeRegEx = new RegExp(`^${exclude}`)

let classNameRegEx = /(?:class|className)=['|"](.+)['|"]/g;
let classRegEx = /(\S+)/g;
let dashCaseRegex = /(\S)-(\S)/g;

function toCamelCase(match, beforeDash, afterDash) {
  return `${beforeDash}${afterDash.toUpperCase()}`;
}

function classReplace(match, _class) {
  let newClass = _class
  if (camelCase){
    newClass = newClass.replace(dashCaseRegex, toCamelCase)
  }
  return `$\{${module_name}.${newClass}}`;
}

function classNameReplace(match, classList) {
  let classes = classList.replace(classRegEx, classReplace);
  return `className={\`${classes}\`}`;
}

function replaceCss(content) {
  return content.replace(classNameRegEx, classNameReplace);
}

function CssFileReplace(_path) {
  let content = fs.readFileSync(_path, 'utf8');
  let replaced = replaceCss(content);
  fs.writeFileSync(_path, replaced);
}

const replace = (base) => {
  fs.readdir(base, { withFileTypes: true }, (err, dirents) => {
    dirents.forEach((dirent) => {
      let fullPath = path.join(base, dirent.name);
      console.log(fullPath)
      if (dirent.isDirectory()) {
        replace(fullPath)
        return
      }
      if (
        path.extname(dirent.name) === (".jsx" || ".js")
        && !(excludeRegEx.test(dirent.name))
        ) {
        CssFileReplace(fullPath)
      }
    });
  });
};

replace(basePath);
