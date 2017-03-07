<template>
  <section>
    <h2>Switch Example</h2>
    <div>
      <VSwitch v-model="switchOn"></VSwitch>{{ switchOn }}</div>
    <div>
      <p>prevent switch event if you need</p>
      <VSwitch @click.prevent></VSwitch>
    </div>
  </section>
</template>

<script>
  import VSwitch from '~components/Switch';

  export default {
    name: 'SwitchExample',
    components: {
      VSwitch,
    },
    data() {
      return {
        switchOn: true,
      };
    },
  };

</script>
