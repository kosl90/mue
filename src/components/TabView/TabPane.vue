<template>
  <div class="tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabPane',
  mounted() {
    this.$parent.addPane(this);
  },
  props: {
    label: String,
    name: String,
  },
  data() {
    return {
      index: null,
      active: false,
    };
  },
};
</script>
