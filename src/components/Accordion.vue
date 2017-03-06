<template>
  <div class='v-accordion-item'>
    <header class='v-accordion-item__header' role='heading' :aria-level='level'>
      <button class='v-accordion-item__header-btn' role='button' :aria-disabled='panelVisible' :aria-controls='panelID'>
        <slot name='header'></slot>
      </button>
    </header>
    <section :id='panelID' :aria-visible='panelVisible'>
      <slot></slot>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'VAccordionItem',
    props: {
      ;
    },
  };
</script>
