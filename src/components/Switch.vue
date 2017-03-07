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
    name: 'VSwitch',
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
