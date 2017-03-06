<template>
  <button
    class="ve-btn"
    :class="classes"
    :disabled="disabled"
    :data-toggle="toggle ? 'button' : false"
    @click="handleClick($event)"
  >
  <slot></slot>
  </button>
</template>

<script>
  import '~styles/button.scss';

  export default {
    name: 'MButton',
    props: {
      kind: {  // maybe v-kind
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
        let mainStyle = `ve-btn-${this.kind}`;

        if (this.outline) {
          mainStyle = `ve-btn-outline-${this.kind}`;
        }

        return [
          mainStyle,
          this.size === '' ? '' : `ve-btn-${this.size}`,
          {
            active: this.toggle && this.active,
            've-btn-block': this.block,
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
