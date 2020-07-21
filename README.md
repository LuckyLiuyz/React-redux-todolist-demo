# React-redux-todolist-demo

探索 React + React-redux 开发 demo。
[详细说明](http://cn.redux.js.org/docs/basics/UsageWithReact.html)

![效果](/pic.gif)

### 组件结构说明

| 表头           |            表头            |
| -------------- | :------------------------: |
| 展示组件       |          容器组件          |
| 作用           | 描述如何展现（骨架、样式） | 描述如何运行（数据获取、状态更新） |
| 直接使用 Redux |             否             | 是 |
| 数据来源       |           props            | 监听 Redux state |
| 数据修改       |   从 props 调用回调函数    | 向 Redux 派发 actions |
| 调用方式       |            手动            | 通常由 React Redux 生成 |

### 如何执行

#### 1、将项目克隆到本地，cd 到 react-redux-todolist

```javascript
git clone git@github.com:chenjun1127/react-redux-todolist.git
cd react-redux-todolist
```

#### 2、安装依赖

```javascript
npm install
```

#### 3、执行

```javascript
npm run dev
// npm run build(打包)
```

#### 4、打开浏览器浏览 http://localhost:3000/

Tips：在安装 node-sass 的时候，有可能不成功，如不成功，请先删除 node_modules ，然后将镜像源换成 taobao 的，再执行 npm install 或 yarn install；

-   删除 node_modules

```javascript
rd/s/q node_modules
```

-   切换淘宝镜像源

```bash
npm config set registry http://registry.npm.taobao.org
或
yarn config set registry http://registry.npm.taobao.org
```

-   再安装依赖

```bash
npm install
```

也可以单独为 node-sass 设置淘宝的二进制包镜像

```bash
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
或
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```
