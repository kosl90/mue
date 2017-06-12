<template>
  <li role="presentation" :class="cls">
    <a href="#" @click="onClicked">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    active: Boolean,
    onTabClicked: {
      type: Function,
      default: function noop() {},
    },
  },
  computed: {
    cls() {
      return [
        'tab-item',
        {
          active: this.active,
        },
      ];
    },
  },
  methods: {
    onClicked() {
      // eslint-disable-next-line
      console.log(this, this.onTabClicked);
      this.onTabClicked();
    },
  },
};
</script>
