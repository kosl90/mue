<template>
  <!-- TODO: a11y -->
  <label class="">
    <!-- TODO: customized checkbox -->
    <!-- state: focus/indeterminate/blur/disabled/checked/unchecked -->
    <!-- <i class="checkbox-box"></i> -->
    <!-- default :true-value/:false-value is not expected behaviour -->
    <input
      type="checkbox"
      v-model="model"
      :name="name"
      :disabled="disabled"
      :checked="checked"
      @change="update($event)"
    />
    <slot></slot>
  </label>
</template>

<script>
  /* eslint-disable no-console */
  export default {
    name: 'VCheck',
    data() {
      return {
        model: this.checked,
      };
    },
    props: {
      name: {
        type: String,
      },
      required: { // TODO
        type: Boolean,
        default: false,
      },
      value: { // required??? http://mdn.beonex.com/en/HTML/Element/input.html
      },
      indeterminate: { // TODO
        type: Boolean,
        default: false,
      },
      trueValue: {
        type: [String, Number],
      },
      falseValue: {
        type: [String, Number],
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      checked: {
        type: Boolean,
        default: false,
      },
    },
    created() {
      // make sure the value of v-model is synced with wanted true/false value.
      this.emitValue(this.checked);
    },
    methods: {
      update(ev) {
        /* eslint-disable no-param-reassign */
        const checked = this.model;

        // FIXME: is this a good idea?
        ev.target.value = this.emitValue(checked);

        this.$emit('change', ev);
      },
      emitValue(checked) {
        const value = this.wantedValue(checked);
        this.$emit('input', value);
        return value;
      },
      wantedValue(checked) {
        if (checked) {
          return this.trueValue !== undefined ? this.trueValue : checked;
        }

        return this.falseValue !== undefined ? this.falseValue : checked;
      },
    },
  };

</script>

<style>
</style>
