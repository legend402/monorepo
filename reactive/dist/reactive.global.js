var VueReactive = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/reactive/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // packages/shared/src/index.ts
  var isVarType = (type) => (val) => Object.prototype.toString.call(val) === `[object ${type}]`;
  var isObject = isVarType("Object");
  var isArray = isVarType("Array");

  // packages/reactive/src/index.ts
  var Vue = {
    createApp() {
    }
  };
  console.log(isObject(Vue));
  var src_default = Vue;
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=reactive.global.js.map
