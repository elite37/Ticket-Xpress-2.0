let args = process.argv.slice(2);

const fs = require("fs");
const path = require("path");

let basePath = args[0];
let module_name = args[1];
let exclude = args[2];

let excludeRegEx = new RegExp(`^${exclude}`)

let classNameRegEx = /(?:class|className)=['|"](.+)['|"]/g;
let classRegEx = /(\S+)/g;

function classReplace(match, _class) {
  return `$\{${module_name}.${_class}}`;
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
