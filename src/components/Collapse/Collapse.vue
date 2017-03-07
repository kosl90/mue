<template>
  <div class="v-collapse" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Collapse',
    props: {
      accordion: {
        // [loose, strict, true, false]
        type: [Boolean, String],
        default: false,
      },
    },
    data() {
      return {
        lastActived: null,
      };
    },
    created() {
      if (this.accordion) {
        this.$on('vee:item-open', this.recordOpened);
      }
    },
    mounted() {
      if (this.accordion !== 'strict') {
        return;
      }

      // FIXME: this is not good ==
      const firstChild = this.findComponent(this.$el.firstChild.firstChild.firstChild);
      if (firstChild && !firstChild.active) {
        firstChild.open();
      }
    },
    methods: {
      findComponent(target) {
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
        if (!this.accordion || (activeChild === this.lastActived && this.accordion !== 'strict')) {
          this.triggerCollapse(activeChild);
        } else if (activeChild !== this.lastActived) {  // accordion mode
          if (this.lastActived) {
            this.lastActived.close();
          }

          activeChild.open();
        }
      },
      triggerCollapse(activeChild) {
        activeChild[activeChild.isOpen() ? 'close' : 'open']();
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
  };

</script>
