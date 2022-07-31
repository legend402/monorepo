import _sfc_main from "./index.vue_vue_type_script_setup_true_lang.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const HSelect = withInstall(_sfc_main);
export {
  HSelect as default
};
