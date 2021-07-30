在谢new.js 中

```js
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
```

需要安装 上述模块，并且node 最好是 v0.9 前，否则会有警告，但是还能运行。

需要安装sass 依赖。

storybook 下配置 全局scss
在preview.js 加上
`import '../packages/theme-chalk/src/index.scss';`
配置webpack，加上
//https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config

```js
v// .storybook/main.js

const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
```

并下载相应的Loader 依赖

### 引入 loader

会遇到

 Module build failed (from ./node_modules/XXX-loader/dist/cjs.js):
this.getOptions is not a function  错误

解决方法： 调低相应的版本。