<template>
  <div class='v-accordion'>
    <header class='v-accordion__header' role='heading' :aria-level='level'>
      <button class='v-accordion__header-btn' role='button' :aria-disabled='panelVisible' :aria-controls='panelID'>
        <slot name='header'></slot>
      </button>
    </header>
    <section :id='panelID' :aria-visible='panelVisible'>
      <slot name='panel'></slot>
    </section>
  </div>
</template>
