let args = process.argv.slice(2)

const fs = require("fs");

let module_name = args[2];
let basePath = args[0];

let classNameRegex = /(?:class|className)=['|"](.+)['|"]/g;
let classRegex = /(\S+)/g;

function classReplace(match, _class) {
  return `$\{${module_name}.${_class}}`;
}

function classNameReplace(match, classList) {
  let classes = classList.replace(classRegex, classReplace);
  return `className={\`${classes}\`}`;
}

function replaceCss(content) {
  return content.replace(classNameRegex, classNameReplace);
}

function CssFileReplace(path) {
    let content = fs.readFilesync(path)
    let replaced = replaceCss(content)
    fs.writeFileSync(path, replaced)
}

let paths = fs.readdirSync(basePath)
paths.forEach(path => CssFileReplace(path))