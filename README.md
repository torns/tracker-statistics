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

# npm
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
值得注意的是该行为需要在 `dom` 渲染完成后执行。

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

加入购物车行为是对商城类行为埋点的抽象。

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

购买行为是对商城类行为埋点的抽象。

#### 类型

```typescript
interface BuyProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 商品 ID
}
```

#### 使用

```javascript
trackerStatistics.buy({
  itemId: '1',
  userId: '1'
})
```

### 收藏行为

收藏行为通常用于对文章和商品等。

#### 类型

```typescript
interface CollectProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 内容项 ID
  name: string        // 对应收藏名称
}
```

#### 使用

```javascript
trackerStatistics.collect({
  name: 'shop',
  itemId: '1',
  userId: '1'
})
```

### 点赞行为

点赞行为通常用于对文章和评论等。

#### 类型

```typescript
interface LikeProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 内容项 ID
  name: string        // 对应点赞名称
}
```

#### 使用

```javascript
trackerStatistics.like({
  name: 'comment',
  itemId: '1',
  userId: '1'
})
```

### 点衰行为

点衰行为通常用于对文章和评论等执行差评的操作。

#### 类型

```typescript
interface UnlikeProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 内容项 ID
  name: string        // 对应点衰名称
}
```

#### 使用

```javascript
trackerStatistics.unlike({
  name: 'comment',
  itemId: '1',
  userId: '1'
})
```

### 写评论行为

用于对商品和文章等发布评论的埋点。

#### 类型

```typescript
interface CommentProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 内容项 ID
  content: string     // 评论的内容
  name: string        // 对应评论名称
}
```

#### 使用

```javascript
trackerStatistics.comment({
  name: 'comment',
  content: 'content',
  itemId: '1',
  userId: '1'
})
```

### 分享行为

用于对商品和文章等分享事件的埋点。

#### 类型

```typescript
interface ShareProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  itemId: string      // 内容项 ID
  name: string        // 对应分享名称
}
```

#### 使用

```javascript
trackerStatistics.share({
  name: 'shop',
  itemId: '1',
  userId: '1'
})
```

### 订阅行为

用于对消息通知的订阅。

#### 类型

```typescript
interface SubscribeProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
  name: string        // 对应订阅名称
}
```

#### 使用

```javascript
trackerStatistics.subscribe({
  name: 'notification',
  userId: '1'
})
```

### 停留行为

停留行为通常用于获取用户在某一个页面停留了多长时间。
该行为包含两个方法，需要在页面挂载和卸载的生命周期里进行调用。

#### 类型

```typescript
interface BaseProps {
  data?: DataProps    // 自定义业务数据
  isPrefab?: boolean  // 是否显示预制体
  userId: string      // 用户 ID
}
```

#### 使用

```javascript
// 页面加载时使用
trackerStatistics.stay.entry()

// 页面卸载时使用
trackerStatistics.stay.leave({
  userId: '1'
})
```
