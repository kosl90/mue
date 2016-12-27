<template>
  <div
    class="col"
    :class="classes"
    :style="gutterStyle"
  >
    <slot></slot>
  </div>
</template>


<script>
  // 24 maybe better for much more flexiable layout.
  const MAX_COL = 12;
  const TypeTag = {
    Number: '[object Number]',
  };

  function typeTag(v) {
    return Object.prototype.toString.call(v);
  }

  function clip(min, max, val) {
    return Math.min(Math.max(min, val), max);
  }

  export default {
    name: 'MCol',
    props: {
      span: {
        // {xs, sm, md, lg, xl}
        type: [Number, Object],
        required: true,
      },
      push: {
        type: [Number, Object],
      },
      pull: {
        type: [Number, Object],
      },
      offset: {
        type: [Number, Object],
      },
    },
    computed: {
      gutterStyle() {
        const halfGutter = `${this.$parent.gutter / 2}px`;
        return {
          padding: 0,
          paddingLeft: halfGutter,
          paddingRight: halfGutter,
        };
      },
      classes() {
        const size = this.getColClass(this.span, 'col');
        const offset = this.getClassOf('offset');
        const push = this.getClassOf('push');
        const pull = this.getClassOf('pull');

        return [
          size,
          offset,
          push,
          pull,
        ];
      },
    },
    methods: {
      getClassOf(propName) {
        const prop = this[propName];
        return prop !== undefined && this.getColClass(prop, propName);
      },
      getColClass(info, prefix) {
        if (typeTag(info) === TypeTag.Number) {
          const span = clip(1, MAX_COL, info);
          return `${prefix}-md-${span}`;
        }

        const size = {};
        const keys = Object.keys(info);

        for (const key of keys) {
          const span = clip(1, MAX_COL, info[keys[key]]);
          size[`${prefix}-${key}-${span}`] = true;
        }

        return size;
      },
    },
  };
</script>

<style>
.col {
}
</style>
