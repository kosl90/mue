<template>
  <div class='v-collapse-item' :class='{"active": panelVisible}'>
    <header class='v-collapse-item__header' role='heading' :aria-level='level '>
      <!--
        If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to
        be collapsed, the header button element has aria-disabled set to true.
        -->
      <button class='v-collapse-item__header__btn' role='button' :aria-disabled='disableBtn && panelVisible' :aria-expanded='panelVisible'
        :aria-controls='panelID'>
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
        disableBtn: false,
      };
    },
    computed: {
      isOpen() {
        return this.panelVisible === 'true';
      },
    },
    methods: {
      close() {
        this.disableBtn = false;
        this.panelVisible = 'false';
        this.$emit.call(this.$parent, 'vee:item-closed', this);
      },
      open() {
        this.panelVisible = 'true';
        this.$emit.call(this.$parent, 'vee:item-open', this);
      },
      disableButton() {
        this.disableBtn = true;
      },
    },
  };

</script>
