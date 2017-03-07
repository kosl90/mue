<template>
  <img :src="src" :alt="alt" />
</template>

<script>
  export default {
    name: 'VImage',
    props: {
      // lazy: Boolean,
      // TODO: color and blur. this may need server's help.
      placeholder: Boolean,
      // TODO: support responsive image?
      src: String,
      alt: {
        type: String,
        default: '',
      },
    },
  };

</script>
