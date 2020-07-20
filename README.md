## React-redux todoList

探索 React + React-redux 开发 demo。

![首页](/pic.gif)

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
