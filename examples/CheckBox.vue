<template>
  <section>
    <h2>CheckBox Button Example</h2>
    <VCheckBox v-model='checked' true-value="trueValue" false-value="falseValue" :checked="true">check it out: {{ checked }}</VCheckBox><br>
  </section>
</template>

<script>
  import VCheckBox from '~components/Checkbox';

  export default {
    name: 'CheckBoxExample',
    components: {
      VCheckBox,
    },
    data() {
      return {
        checked: false,
      };
    },
  };

</script>
