# tracker statistics

> 简单易用的用户行为埋点工具

- 可控的基础数据预制体
- 行为方法业务参数自定义
- 模块化组合式设计
- 完整的类型检查机制
- 开箱即用，减少项目复杂程度

`tracker statistics` 作为一个代码埋点的工具，能够适用于任何基于 `web` 的用户行为埋点工具，该工具抽象出了多种行为类型，每种类型对应一个处理函数。

通常情况下每个行为方法的固定参数无法满足较为复杂的业务需求，为此我们提供了自定义业务数据的功能。

## 安装

```bash
# yarn
yarn add tracker-statistics

# or with npm
npm install tracker-statistics
```

## 使用

在需要进行埋点的页面进行引入，如有大量页面需要使用埋点时，可是使用全局挂载的形式。

该 `sdk` 依赖于浏览器的 `sessionStorge` 或 `localStorage` 进行缓存数据的处理，因此会具有某些 `sessionStorge` 或 `localStorage` 的特性。

```javascript
import trackerStatistics from 'tracker-statistics'
```

### 初始化

初始化方法允许用户在私有化过程中传递服务器接口信息以及 `sdk` 中的一些配置。

#### 类型

```typescript
interface InitProps {
  url: string                                 // 接口服务的地址
  method: Method                              // 接口的请求类型， Method 类型为 request 支持的请求类型
  storage?: 'localStorage' | 'sessionStorage' // 缓存数据存储位置，目前只支持 sessionStorage
}
```

#### 使用

```javascript
trackerStatistics.init({
  url: 'http://xxx.com/send',
  method: 'post'
})
```

### 曝光行为

曝光行为通常用于列表页面针对某一项是否被完全的展示（即列表中的某一项是否在父级容器中完全显示），并提供针对这一项的浏览时长的统计。

#### 类型

```typescript
interface ExposeProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  containerId: string // 页面列表中的容器 ID
  name: string        // 对应列表名称
}
```

#### 使用

```javascript
trackerStatistics.expose({
  name: 'shop',
  containerId: 'shopListContainer',
  userId: '1'
})
```

### 点击行为

点击行为常常用于追踪用户的点击事件。

#### 类型

```typescript
interface ClickProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  name: string        // 对应点击名称
}
```

#### 使用

```javascript
trackerStatistics.click({ 
  name: '首页', 
  userId: '1'
})
```

### 加入购物车行为

加入购物车行为是对商城类行为埋点的抽象，是对点击行为的上层封装。

#### 类型

```typescript
interface CartProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 商品 ID
}
```

#### 使用

```javascript
trackerStatistics.cart({ 
  itemId: '1',
  userId: '1'
})
```

### 购买行为

购买行为是对商城类行为埋点的抽象，是对点击事件的上层封装。

#### 类型

```typescript
interface CartProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 商品 ID
}
```

```javascript
trackerStatistics.buy({
  itemId: '1',
  userId: '1'
})
```
