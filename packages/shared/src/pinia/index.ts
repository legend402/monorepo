import { App, effectScope, markRaw, ref, Ref } from "vue";
import { defineStore } from "./defineStore";

export type StateTree = Record<string, {}>

export const piniaSymbol = Symbol();

export default function createPinia() {
  const scope = effectScope(true);
  const state = scope.run<Ref<Record<string, StateTree>>>(() => {
    return ref<Record<string, StateTree>>({})
  });

  const pinia = markRaw({
    install(app: App) {
      app.provide(piniaSymbol, pinia);
    },
    use() {},
    _s: new Map<string, Record<string, any>>(),
    state,
    _e: scope,
  });

  return pinia;
}

export {
  defineStore,
}