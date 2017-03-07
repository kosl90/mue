<template>
  <section>
    <h2>Grid Example</h2>
    <div class="container-fluid">
      <VRow class="e-row" :gutter="30">
        <VCol class="e-col" :span="4">
          <div></div>
        </VCol>
        <VCol class="e-col" :span="4">
          <div></div>
        </VCol>
        <VCol class="e-col" :span="4">
          <div></div>
        </VCol>
      </VRow>
      <VRow class="e-row">
        <VCol class="e-col" :span="6">
          <div></div>
        </VCol>
      </VRow>
      <VRow class="e-row">
        <VCol class="e-col" :span="2" :offset="3">
          <div></div>
        </VCol>
        <VCol class="e-col" :span="3" :push="1">
          <div></div>
        </VCol>
        <VCol class="e-col" :span="2" :pull="8">
          <div></div>
        </VCol>
      </VRow>
      <div>
        <VCol class="e-col" :span="2" :pull="8">
          <div></div>
        </VCol>
      </div>
    </div>
  </section>
</template>

<script>
  import VRow from '~components/Row';
  import VCol from '~components/Col';

  export default {
    name: 'GridExample',
    components: {
      VRow,
      VCol,
    },
  };

</script>
