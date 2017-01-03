<template>
  <!-- TODO: a11y -->
  <label class='m-switch' :class='classes'>
    <input
      @click="$emit('click', $event)"
      @change="handleChange($event)"
      class="m-switch-internal"
      type="checkbox"
      :disabled="disabled"
      :checked="value"
      v-model="model"
      />
    <div class='m-switch-label'></div>
    <div class='m-switch-handler'></div>
  </label>
</template>

<script>
  export default {
    name: 'MSwitch',
    data() {
      return {
        model: Boolean,
      };
    },
    mounted() {
      this.model = !!this.value;
    },
    props: {
      value: Boolean,
      disabled: Boolean,
      onText: String, // TODO
      offText: String,
      size: {
        type: String,
        default: 'md',
      },
    },
    computed: {
      classes() {
        return [`m-switch-${this.size}`];
      },
    },
    methods: {
      handleChange(ev) {
        this.$emit('input', ev.target.checked);
        this.$emit('change', ev);
      },
    },
  };
</script>


<style>
  /* TODO: much more */
  .m-switch {
    /* TODO: color */
    --switchOnColor: #AEDCAE;
    --switchOffColor: #ddd;
    --switchHandlerOnColor: #5CB85C;
    --switchHandlerOffColor: #fff;

    position: relative;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    border-radius: 0.5em;
    margin-bottom: 0;
  }
  .m-switch-internal {
    display: none;
  }
  .m-switch-label {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--switchOffColor);
    transition: background .2s ease;
  }
  .m-switch-internal:checked ~ .m-switch-label {
    background: var(--switchOnColor);
  }
  .m-switch-handler {
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: var(--switchHandlerOffColor);
    transition: left .2s ease, background .2s ease;
  }
  .m-switch-internal:checked ~ .m-switch-handler {
    background: var(--switchHandlerOnColor);
    left: calc(100% - 1em);
  }
  .m-switch-md {
    min-width: 2em;
    min-height: 1em;
  }
</style>
