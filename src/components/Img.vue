<template>
    <img
      :src="imgSrc"
      :data-echo="lazySrc"
      :alt="alt"
      />
</template>

<script>
export default {
  name: 'MImg',
  props: {
    lazy: Boolean,
    // TODO: color and blur. this may need server's help.
    placeholder: Boolean,
    // TODO: support responsive image?
    src: String,
    alt: {
      type: String,
      default: '',
    },
  },
  mounted() {
    /* eslint-disable no-console */
    if (this.lazy) {
      if (this.width === undefined || this.height === undefined) {
        console.warn('width and height is recommended in lazy mode.');
      }
    }
  },
  computed: {
    imgSrc() {
      // using a blank image to avoid lint warning.
      return this.lazy ? 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=' : this.src;
    },
    lazySrc() {
      return this.lazy ? this.src : false;
    },
  },
};
</script>
