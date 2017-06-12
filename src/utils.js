export function installComponent(Compnent) {
  // eslint-disable-next-line no-param-reassign
  Compnent.install = function installVueComponent(Vue) {
    Vue.component(Compnent.name, Compnent);
  };
}

export default {};
