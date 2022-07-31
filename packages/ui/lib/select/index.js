"use strict";
const index_vue_vue_type_script_setup_true_lang = require("./index.vue_vue_type_script_setup_true_lang.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const HSelect = withInstall(index_vue_vue_type_script_setup_true_lang);
module.exports = HSelect;
