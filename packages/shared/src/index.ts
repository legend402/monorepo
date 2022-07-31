import createPinia, { defineStore } from "./pinia";

const isVarType = <T>(type: string) => (val: any): val is T => Object.prototype.toString.call(val) === `[object ${type}]`;

export const isObject = isVarType<object>('Object');

export const isArray = isVarType<[]>('Array');

export {
  createPinia,
  defineStore,
}