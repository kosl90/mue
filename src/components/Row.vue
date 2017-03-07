<template>
  <div class="row" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'VRow',
    props: {
      gutter: {
        type: Number,
      },
      type: {
        type: String, // fixed/flex?
      },
    },
    computed: {
      gutterStyle() {
        const halfGutter = `-${this.gutter / 2}px`;
        return {
          marginLeft: halfGutter,
          marginRight: halfGutter,
          padding: 0,
        };
      },
    },
  };

</script>
