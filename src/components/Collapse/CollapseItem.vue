<template>
  <div class='v-collapse-item' :class='{"active": panelVisible}'>
    <header class='v-collapse-item__header' role='heading' :aria-level='level '>
      <button class='v-collapse-item__header__btn' role='button' :aria-disabled='panelVisible' :aria-controls='panelID'>
        <slot name='title'>{{ title }}</slot>
      </button>
    </header>
    <div class='v-collapse-item__panel' :class='{ "auto-height": !maxHeight}' :id='panelID' :aria-visible='panelVisible'>
      <div class='v-collapse-item__panel__content'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import '~styles/collapse-item.scss';

  export default {
    name: 'VCollapseItem',
    props: {
      title: {
        type: String,
      },
      active: {
        type: Boolean,
      },
      level: {
        type: Number,
        default: 1,
      },
      maxHeight: String,
    },
    mounted() {
      if (this.active) this.open();
    },
    data() {
      return {
        panelID: `v-collapse-item-${this._uid}`,  // eslint-disable-line
        panelVisible: 'false',
      };
    },
    methods: {
      close() {
        this.panelVisible = 'false';
        this.$emit.call(this.$parent, 'vee:item-closed', this);
      },
      open() {
        this.panelVisible = 'true';
        this.$emit.call(this.$parent, 'vee:item-open', this);
      },
      isOpen() {
        return this.panelVisible === 'true';
      },
    },
  };

</script>
