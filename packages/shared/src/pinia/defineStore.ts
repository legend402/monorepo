import { computed, ComputedRef, effectScope, EffectScope, getCurrentInstance, inject, markRaw, reactive, toRaw, toRefs } from "vue";
import { piniaSymbol } from ".";

interface Options<T = any> {
  id: string;
  state: () => T,
  getters: Record<string, (state: T) => any>,
  action: Record<string, Function>,
}

export function defineStore<T extends object>(options: Options<T>) {
  let { id } = options;

  function useStore() {
    const currentInstance = getCurrentInstance();
    let pinia: any;
    if (currentInstance) {
      pinia = inject(piniaSymbol);
    }
    if (!pinia) {
      throw new Error('请在main中注册pinia');
    }
    if (!pinia._s.has(id)) {
      createOptionsStore(id, options, pinia)
    }
    const store = pinia._s.get(id);
    return store
  };
  useStore.$id = id;

  return useStore;
}

function createOptionsStore(id: string, options: Options, pinia: any) {
  const { state, getters, action } = options;

  function setup() {
    pinia.state.value[id] = state ? state() : {};
    console.log(pinia.state.value[id]);
    
    const localState = toRefs(pinia.state.value[id]);

    return Object.assign(
      localState,
      action,
      Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = markRaw(
          computed(() => {
            const store = pinia._s.get(id);
            return getters[name].call(store, store)
          })
          );
        return computedGetters
      }, {} as Record<string, ComputedRef>)
    )
  }

  let store = createSetupStore(id, setup, pinia);

  return store;
}

function createSetupStore($id: string, setup: () => Record<string, any>, pinia: any) {
  let partialStore = {
    _p: pinia,
    $id,
    $reset: () => console.log("reset"),
    $patch: () => console.log("patch"),
    $onAction: () => console.log("onAction"),
    $subscribe: () => console.log("subscribe"),
    $dispose: () => console.log("dispose"),
  };

  let scope!: EffectScope;

  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  })

  const store: any = reactive(
    Object.assign(toRaw({}), partialStore, setupStore)
  )

  pinia._s.set($id, store);
  
  return store;
}