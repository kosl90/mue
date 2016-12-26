<template>
  <button
    class="btn"
    :class="classes"
    :disabled="disabled"
    :data-toggle="toggle ? 'button' : false"
    @click="handleClick($event)"
  >
  <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'MButton',
    props: {
      char: {
        type: String, // primary/secondary/success/info/warning/danger/link
        default: '',
        required: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      outline: {
        type: Boolean,
        default: false,
      },
      toggle: {
        type: Boolean,
        default: false,
      },
      active: {
        type: Boolean,
        default: false,
      },
      block: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: '',
      },
    },
    computed: {
      classes() {
        let mainStyle = `btn-${this.char}`;

        if (this.outline) {
          mainStyle = `btn-outline-${this.char}`;
        }

        return [
          mainStyle,
          this.size === '' ? '' : `btn-${this.size}`,
          {
            active: this.toggle && this.active,
            'btn-block': this.block,
          },
        ];
      },
    },
    methods: {
      toggled() {
        return this.$el.classList.contains('active');
      },
      handleClick(ev) {
        if (this.toggle) {
          const toggled = this.toggled();
          this.$emit('toggled', { toggled, ...ev });
          return;
        }

        this.$emit('click', ev);
      },
    },
  };
</script>
