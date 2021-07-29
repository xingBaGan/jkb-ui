'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];

const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
const Files = [
  {
    filename: 'index.js',
    content: `import ${ComponentName} from './src/main.vue';

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

export default ${ComponentName};`
  },
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="jkb-${componentname}"></div>
</template>

<script>
export default {
  name: 'Jkb${ComponentName}'
};
</script>`
  },
  {
    filename: path.join('../../packages/theme-chalk/src', `${componentname}.scss`),
    content: `@import "mixins/mixins";
@import "common/var";

@include b(${componentname}) {
}`
  }
//   ,
//   {
//     filename: path.join('../../types', `${componentname}.d.ts`),
//     content: `import { ElementUIComponent } from './component'

// /** ${ComponentName} Component */
// export declare class El${ComponentName} extends ElementUIComponent {
// }`
//   }
];

// 添加到 components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 添加到 index.scss
const sassPath = path.join(__dirname, '../../packages/theme-chalk/src/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentname}.scss";`;
fileSave(sassPath)
  .write(sassImportText, 'utf8')
  .end('\n');

// 添加到 element-ui.d.ts
// const elementTsPath = path.join(__dirname, '../../types/element-ui.d.ts');

// let elementTsText = `${fs.readFileSync(elementTsPath)}
// /** ${ComponentName} Component */
// export class ${ComponentName} extends El${ComponentName} {}`;

// const index = elementTsText.indexOf('export') - 1;
// const importString = `import { El${ComponentName} } from './${componentname}'`;

// elementTsText = elementTsText.slice(0, index) + importString + '\n' + elementTsText.slice(index);

// fileSave(elementTsPath)
//   .write(elementTsText, 'utf8')
//   .end('\n');

// 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});


console.log('DONE!');
