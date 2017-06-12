<template>
  <div id="app">
    <!--<ButtonExample></ButtonExample>
          <CheckBoxExample></CheckBoxExample>
          <RadioExample></RadioExample>
          <GridExample></GridExample>
          <ImageExample></ImageExample>
          <SwitchExample></SwitchExample>
          <CollapseExample></CollapseExample>-->
    <TabsExample></TabsExample>
  </div>
</template>

<script>
import RadioExample from './RadioBox';
import ButtonExample from './Button';
import CheckBoxExample from './CheckBox';
import ImageExample from './Image';
import GridExample from './Grid';
import SwitchExample from './Switch';
import CollapseExample from './Collapse';
import TabsExample from './TabsExample';

import './app.css';

// TODO: add router.
export default {
  name: 'app',
  components: {
    RadioExample,
    ImageExample,
    ButtonExample,
    CheckBoxExample,
    GridExample,
    SwitchExample,
    CollapseExample,
    TabsExample,
  },
};

</script>
