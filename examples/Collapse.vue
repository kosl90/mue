<template>
  <section>
    <h2>Accordion Example</h2>
    <h3>Generic Collapse</h3>
    <VCollapse>
      <VCollapseItem>
        <template slot="title">header 1</template>
        <p>test</p>
      </VCollapseItem>
      <VCollapseItem>
        <template slot="title">header 2</template>
        <p>test2</p>
      </VCollapseItem>
    </VCollapse>

    <h3>loose mode Accordion</h3>
    <VCollapse accordion>
      <VCollapseItem active>
        <template slot="title">header 1</template>
        <p>test</p>
      </VCollapseItem>
      <VCollapseItem>
        <template slot="title">header 2</template>
        <p>test2</p>
      </VCollapseItem>
    </VCollapse>

    <h3>strict mode Accordion</h3>
    <VCollapse accordion='strict'>
      <VCollapseItem>
        <template slot="title">header 1</template>
        <p>test</p>
      </VCollapseItem>
      <VCollapseItem>
        <template slot="title">header 2</template>
        <p>test2</p>
      </VCollapseItem>
    </VCollapse>
  </section>
</template>

<script>
  import { VCollapse, VCollapseItem } from '~components/Collapse';

  export default {
    name: 'CollapseExample',
    components: {
      VCollapse,
      VCollapseItem,
    },
  };

</script>
