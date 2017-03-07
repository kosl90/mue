<template>
  <section>
    <h2>Accordion Example</h2>
    <h3>Generic Collapse</h3>
    <VCollapse>
      <VCollapseItem v-for='item in items'>
        <template slot="title">{{ item.title }}</template>
        <p>{{ item.content }}</p>
      </VCollapseItem>
    </VCollapse>

    <h3>loose mode Accordion</h3>
    <VCollapse accordion>
      <VCollapseItem v-for='item in items'>
        <template slot="title">{{ item.title }}</template>
        <p>{{ item.content }}</p>
      </VCollapseItem>
      <VCollapseItem>
        <template slot="title">header 2</template>
        <p>test2</p>
      </VCollapseItem>
    </VCollapse>

    <h3>strict mode Accordion</h3>
    <VCollapse accordion='strict'>
      <VCollapseItem v-for='item in items'>
        <template slot="title">{{ item.title }}</template>
        <p>{{ item.content }}</p>
      </VCollapseItem>
      <!--<VCollapseItem>
        <template slot="title">header 2</template>
        <p>test2</p>
      </VCollapseItem>-->
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
    data() {
      return {
        items: [
          {
            title: 'This is title',
            content: 'A short content',
          },
          {
            title: 'Another title',
            content: 'A loooooooooooooooong content',
          },
        ],
      };
    },
  };

</script>
