<template>
  <section>
    <h2>Radio Button Example (TODO)</h2>
    <VRadio v-model='radioModel' true-value='radio'>check this out: {{ radioModel }}</VRadio>
  </section>
</template>

<script>
  import VRadio from '~components/Radio';

  export default {
    name: 'RadioBoxExample',
    components: {
      VRadio,
    },
    data() {
      return {
        radioModel: 'this is a radio button',
      };
    },
  };

</script>
