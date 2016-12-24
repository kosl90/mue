<template>
  <div id="app">
    <section>{{ msg }}</section>
    <section>
      <h2>Button Example</h2>
      <m-button char="link">{{ linkBtn }}</m-button>
      <m-button char="secondary" disabled>{{ disabledBtn }}</m-button>
      <m-button @click="handleClick(secondaryBtn)" char="secondary">{{ secondaryBtn }}</m-button>
      <m-button @click="handleClick(primaryBtn)" char="primary" outline>{{ primaryBtn }}</m-button>
      <m-button @click="handleClick(infoBtn)" char="info">{{ infoBtn }}</m-button>
      <m-button @toggled="handleClick(toggleBtn, $event)" toggle char="primary">{{ toggleBtn }}</m-button>
      <m-button @toggled="handleClick(toggleBtn2, $event)" class="active" toggle char="success">{{ toggleBtn2 }}</m-button>
      <m-button @click="handleClick(dangerBtn)" char="danger">{{ dangerBtn }}</m-button>
      <m-button @click="handleClick(blockBtn)" char="warning" block>{{ blockBtn }}</m-button>
    </section>
    <section>
      <h2>CheckBox Example</h2>
      <m-check v-model='checked' true-value="trueValue" false-value="falseValue" :checked="true">check it out: {{ checked }}</m-check><br>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars, no-console */
import MButton from './components/Button';
import MCheck from './components/Checkbox';

export default {
  name: 'app',
  components: {
    MButton,
    MCheck,
  },
  data() {
    return {
      checked: false,
      msg: 'xx',
      blockBtn: 'this is a block button',
      disabledBtn: 'this is a disabled link button',
      linkBtn: 'this is a link button',
      dangerBtn: 'this is a danger button',
      infoBtn: 'this is a button',
      secondaryBtn: 'this is a secondary button',
      primaryBtn: 'this is a outline primary button',
      toggleBtn: 'this is a toggle button',
      toggleBtn2: 'this is a actived toggle button',
    };
  },
  methods: {
    handleClick(msg, ev) {
      this.msg = msg;

      if (ev && typeof ev.toggled !== 'undefined') {
        this.msg = `${msg}. toggled: ${ev.toggled}`;
        return;
      }
    },
  },
};
</script>

<style>
h2 {
  margin-bottom: 1rem;
}
section {
  margin-bottom: 3rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
