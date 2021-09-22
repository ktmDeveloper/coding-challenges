let files = [
    "app/services/ajax",
    "app/component",
    "app/component/modal",
    "app/component/footer",
    "app/component/header",
    "index.html",
    "package.json"
]

function printFilePath(files) {
    let map = {};
    files.forEach(file => {
        convert(file.split('/'), map);
    })
    function convert(filePath, obj) {
        let key = filePath.shift();
        if (filePath.length === 0) {
            obj[key] = true;
            return;
        }

        if (!obj[key] || obj[key] === true) {
            obj[key] = {}
        }
        convert(filePath, obj[key]);
    }
    
    /*
    Map is now
        app: {
          component: {
            footer: true,
            header: true,
            modal: true
          },
          services: {
            ajax: true,
          },
          'index.html': true,
          'package.json': true,
        }
    */
    const string = printString(map);
  /*
  string looks like
   app 
     component 
       modal 
       footer 
       header 
     services 
       ajax 
   index.html 
   package.json 
  */
  return string;
}

function printString(map, level = 1) {
    let res = '';
    for (let [key, val] of Object.entries(map)) {
        res += `${'  '.repeat(level)} ${key} \n`;
        if (val === true) {
            continue;
        }
        let objRes = printString(map[key], level + 1);
        res += objRes;
    }
    return res;
}

printFilePath(files);
