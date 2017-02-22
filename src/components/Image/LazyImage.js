const blankImage = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

let inited = false;
/* eslint-disable */
function initEchoIfNeed(option) {
  if (inited) {
    return;
  }
  echo = echo(typeof window === 'undefined' ? this : window);
  echo.init(option);
  inited = true;
}


export default {
  install(Vue, option) {
    Vue.directive('lazy', {
      bind(el, binding, vnode, oldVnode) {
        initEchoIfNeed(option);
        const src = el.src;
        el.src = blankImage;
        if (binding.modifiers.background) {
          e.setAttribute('data-echo-background', src);
        } else {
          el.setAttribute('data-echo', src);
        }
      },
    });
  },
};

