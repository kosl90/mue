<style scoped>
  .example {
    margin: 0 1em;
    border: 2px lightgray solid;
  }
</style>

<template>
  <section>
    <h2>Accordion Example</h2>

    <section>
      <h3>Generic Collapse</h3>
      <VCollapse class='example'>
        <VCollapseItem v-for='item in items'>
          <template slot="title">{{ item.title }}</template>
          <p>{{ item.content }}</p>
        </VCollapseItem>
      </VCollapse>
    </section>

    <section>
      <h3>loose mode Accordion</h3>
      <VCollapse accordion class='example'>
        <VCollapseItem v-for='(item, i) in items' :active='i===0'>
          <template slot="title">{{ item.title }}</template>
          <p>{{ item.content }}</p>
        </VCollapseItem>
        <VCollapseItem>
          <template slot="title">header 2</template>
          <p>test2</p>
        </VCollapseItem>
      </VCollapse>
    </section>

    <section>
      <h3>strict mode Accordion</h3>
      <VCollapse accordion='strict' class='example'>
        <VCollapseItem v-for='item in items'>
          <template slot="title">{{ item.title }}</template>
          <p>{{ item.content }}</p>
        </VCollapseItem>
      </VCollapse>
    </section>
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
