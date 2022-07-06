# useOverflow

## 安装

```sh
npm install @zreact/use-overflow
```

## 使用

```jsx
// count 为当前使用的测量数量
// measuredCount 为经过测量后最终得到的合适的数
const [count, measuredCount] = useOverflow({
    containerRef: containerRef, // 外层容器的 ref
    total: tags.length // 项目的总数
});
```

## API

## DEMO
