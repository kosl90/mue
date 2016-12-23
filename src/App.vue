<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <div>{{ msg }}</div>
    <m-button @click="handleClick(blockBtn)" char="warning" block>{{ blockBtn }}</m-button>
    <m-button @click="handleClick(dangerBtn)" char="danger">{{ dangerBtn }}</m-button>
    <m-button @click="handleClick(infoBtn)" char="info">{{ infoBtn }}</m-button>
    <m-button @click="handleClick(secondaryBtn)" char="secondary">{{ secondaryBtn }}</m-button>
    <m-button @click="handleClick(primaryBtn)" char="primary" outline>{{ primaryBtn }}</m-button>
    <m-button @toggled="handleClick(toggleBtn, $event)" toggle char="primary">{{ toggleBtn }}</m-button>
    <m-button @toggled="handleClick(toggleBtn2, $event)" class="active" toggle char="success">{{ toggleBtn2 }}</m-button>
  </div>
</template>

<script>
import MButton from './components/Button';

export default {
  name: 'app',
  components: {
    MButton,
  },
  data() {
    return {
      msg: 'xx',
      blockBtn: 'this is a block button',
      dangerBtn: 'this is a danger button',
      infoBtn: 'this is a button',
      secondaryBtn: 'this is a secondary button',
      primaryBtn: 'this is a outline primary button',
      toggleBtn: 'this is a toggle button',
      toggleBtn2: 'this is a actived toggle button',
    };
  },
  methods: {
    /* eslint-disable no-unused-vars, no-console */
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
