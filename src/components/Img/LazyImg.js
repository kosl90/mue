const blankImg = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

export default {
  /* eslint-disable */
  install(Vue, option) {
    // TODO: build echo into vendor.js.
    echo.init(option);
    Vue.directive('lazy', {
      bind(el, binding, vnode, oldVnode) {
        const src = el.src;
        el.src = blankImg;
        el.setAttribute('data-echo', src);
      },
    });
  },
};

