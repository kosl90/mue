<template>
  <section>
    <h2>Button Example</h2>
    <section>{{ msg }}</section>
    <VButton kind="secondary" disabled>{{ disabledBtn }}</VButton>
    <VButton @click='handleClick(linkBtn)' kind="link">{{ linkBtn }}</VButton>
    <VButton @click="handleClick(secondaryBtn)" kind="secondary">{{ secondaryBtn }}</VButton>
    <VButton @click="handleClick(primaryBtn)" kind="primary" outline>{{ primaryBtn }}</VButton>
    <VButton @click="handleClick(infoBtn)" kind="info">{{ infoBtn }}</VButton>
    <VButton @toggled="handleClick(toggleBtn, $event)" toggle kind="primary">{{ toggleBtn }}</VButton>
    <VButton @toggled="handleClick(toggleBtn2, $event)" class="active" toggle kind="success">{{ toggleBtn2 }}</VButton>
    <VButton @click="handleClick(dangerBtn)" kind="danger">{{ dangerBtn }}</VButton>
    <VButton @click="handleClick(blockBtn)" kind="warning" block>{{ blockBtn }}</VButton>
  </section>
</template>

<script>
  import VButton from '~components/Button';

  export default {
    name: 'ButtonExample',
    components: {
      VButton,
    },
    data() {
      return {
        msg: 'this is a message',
        blockBtn: 'this is a block button',
        disabledBtn: 'this is a disabled link button',
        linkBtn: 'this is a link button',
        dangerBtn: 'this is a danger button',
        infoBtn: 'this is a info button',
        secondaryBtn: 'this is a secondary button',
        primaryBtn: 'this is a outline primary button',
        toggleBtn: 'this is a toggle button',
        toggleBtn2: 'this is a actived toggle button',
      };
    },
    methods: {
      handleClick(msg, ev) {
        this.msg = msg; if (ev && typeof ev.toggled !== 'undefined') {
          this.msg = `${msg}. toggled: ${ev.toggled}`;
          return;
        }
      },
    },
  };

</script>
