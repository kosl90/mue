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
      <h2>CheckBox Button Example</h2>
      <m-check v-model='checked' true-value="trueValue" false-value="falseValue" :checked="true">check it out: {{ checked }}</m-check><br>
    </section>
    <!--
    <section>
      <h2>Radio Button Example</h2>
      <m-radio v-model='radioModel' true-value='radio'>check this out: {{ radio }}</m-radio>
    </section>
    -->
    <section>
      <h2>Grid Example</h2>
      <div class="container-fluid">
        <m-row class="e-row" :gutter="30">
          <m-col class="e-col" :span="4"><div></div></m-col>
          <m-col class="e-col" :span="4"><div></div></m-col>
          <m-col class="e-col" :span="4"><div></div></m-col>
        </m-row>
        <m-row class="e-row">
          <m-col class="e-col" :span="6"><div></div></m-col>
        </m-row>
        <m-row class="e-row">
          <m-col class="e-col" :span="2" :offset="3"><div></div></m-col>
          <m-col class="e-col" :span="3" :push="1"><div></div></m-col>
          <m-col class="e-col" :span="2" :pull="8"><div></div></m-col>
        </m-row>
        <div>
          <m-col class="e-col" :span="2" :pull="8"><div></div></m-col>
        </div>
      </div>
    </section>
    <section>
      <h2>Image Example</h2>
      <m-img :src="img" />
      <m-img v-lazy :src="img" placeholder />
    </section>
    <section>
      <h2>Switch Example</h2>
      <div><m-switch v-model="switchOn"></m-switch>{{ switchOn }}</div>
      <div><p>prevent switch event if you need</p><m-switch @click.prevent></m-switch></div>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars, no-console */
import MButton from '~components/Button';
import MCheck from '~components/Checkbox';
// import MRadio from '~components/Radio';
import MRow from '~components/Row';
import MCol from '~components/Col';
import MImg from '~components/Image/Image';
import MSwitch from '~components/Switch';

import logo from '~assets/logo.png';


export default {
  name: 'app',
  components: {
    MButton,
    MCheck,
    // MRadio,
    MRow,
    MCol,
    MImg,
    MSwitch,
  },
  data() {
    return {
      img: logo,
      switchOn: true,
      checked: false,
      radioModel: 'this is a radio button',
      msg: 'this is a message',
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

.e-row {
  background: #e5e9f2;
}
/*
.e-col {
  background: transparent;
}
*/
/*.e-col,*/
.e-col div {
  height: 2em;
}
/*.e-col:nth-child(odd),*/
.e-col:nth-child(odd) div {
  background: #99a9bf;
}
/*.e-col:nth-child(even),*/
.e-col:nth-child(even) div {
  background: #d3dce6;
}
</style>
