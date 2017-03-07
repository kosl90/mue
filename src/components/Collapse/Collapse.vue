<template>
  <div class="v-collapse" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Collapse',
    props: {
      accordion: String, // [loose, strict]
    },
    data() {
      return {
        lastActived: null,
      };
    },
    created() {
      if (this.isAccordion) {
        this.$on('vee:item-open', this.recordOpened);
      }
    },
    mounted() {
      if (!this.isStrict) {
        return;
      }

      // FIXME: this is not good, won't work for async operations.
      const firstChild = this.findComponent(this.$el.firstChild.firstChild.firstChild);
      if (firstChild && !firstChild.active) {
        firstChild.open();
        firstChild.disableButton();
      }
    },
    methods: {
      findComponent(target) {
        // FIXME: maybe a better way to find the component.
        for (const child of this.$children) {
          if (child.$el.firstChild.firstChild.isSameNode(target)) {
            return child;
          }
        }
        return null;
      },
      recordOpened(item) {
        this.lastActived = item;
      },
      handleClick(ev) {
        const activeChild = this.findComponent(ev.target);
        if (!activeChild) {
          return;
        }

        // non-accordion mode or same item in loose accordion mode.
        if (!this.isAccordion || (activeChild === this.lastActived && !this.isStrict)) {
          this.triggerCollapse(activeChild);
        } else if (activeChild !== this.lastActived) {  // accordion mode
          if (this.lastActived) {
            this.lastActived.close();
          }

          activeChild.open();
          activeChild.disableButton();
        }
      },
      triggerCollapse(activeChild) {
        activeChild[activeChild.isOpen ? 'close' : 'open']();
      },
      handleKey(ev) {
        switch (ev.keyCode) {
          default:
        }
        // optional
        // DOWN_ARROW  // next
        // UP_ARROW  // previous
        // HOME_KEY  // first
        // END_KEY  // last
        // CTRL_KEY PAGE_DOWN_KEY  // next
        // CTRL_KEY PAGE_UP_KEY // previous
      },
    },
    computed: {
      isAccordion() {
        return typeof this.accordion !== 'undefined';
      },
      isStrict() {
        return this.isAccordion && String(this.accordion).toLowerCase() === 'strict';
      },
    },
  };

</script>
