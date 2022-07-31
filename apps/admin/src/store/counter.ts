import { defineStore } from "@monorepo/shared";

export const useCounter = defineStore({
  id: 'counter',
  state: () => ({
    num: 1,
  }),
  getters: {
    double (state) {
      return state.num * 2;
    }
  },
  action: {
    increment() {
      (this.num as unknown as number)++;
    }
  }
})