# 快速开始
现在就跟随文档一起快速入门吧！

## 安装

::: code-group
```bash [npm]
npm install steve-planet-ui
```

```bash [yarn]
yarn add steve-planet-ui
```

```bash [pnpm]
pnpm add steve-planet-ui
```
:::

## 全局引入
在`main.ts`中导入`setupPlanetUI`方法全局注册组件，并引入全局`style.css`样式文件后即可在各组件中直接使用

::: code-group

```typescript{3-4,6} [main.ts]
import {createApp} from "vue";
import App from "./App.vue";
import {setupPlanetUI} from "steve-planet-ui";
import "steve-planet-ui/dist/style.css";

const app = createApp(App);
app.use(setupPlanetUI());
app.mount("#app");
```
```vue [App.vue]
<template>
  <PButton>
    Click me!
    <template #tag>
      标签
    </template>
  </PButton>
</template>
```

:::

## 按需引入
> [!TIP]
> 按需引入依然需要先将全局样式文件导入

::: code-group

```vue [App.vue]
<template>
  <PButton>
    Click me!
    <template #tag>
      标签
    </template>
  </PButton>
</template>

<script setup lang="ts">
import {PButton} from "steve-planet-ui";
</script>
```

:::

## 最终效果
最终效果如下：

<DemoComp />
