<template>
  <section>
    <h2>Image Example</h2>
    <VImage :src="img" />
    <VImage v-lazy :src="img" placeholder />
  </section>
</template>

<script>
  import Vue from 'vue';
  import logo from '~assets/logo.png';
  import VImage from '~components/Image';
  import LazyImg from '~directives/LazyLoader/LazyImage'; // eslint-disable-line

  Vue.use(LazyImg);

  export default {
    name: 'ImageExample',
    components: {
      VImage,
    },
    data() {
      return {
        img: logo,
      };
    },
  };

</script>
