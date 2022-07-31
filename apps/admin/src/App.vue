<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { isObject } from '@monorepo/shared';
import HelloWorld from './components/HelloWorld.vue'
import { HSelect } from '@monorepo/ui/es'
import { useCounter } from './store/counter';

const count = useCounter()
</script>

<template>
  <div>
    <a href="javascript: void(0)" @click="count.increment">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <HSelect></HSelect>
    {{ count.num }} * 2 = {{count.double}}
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
