<template>
  <div>
    <tab-view v-model="active">
      <tab-pane v-for="item in items">
        <template slot="label">{{ item.label }}</template>{{ item.label }}
      </tab-pane>
      <tab-pane>
        <template slot="label">4</template>4
      </tab-pane>
    </tab-view>
    <div>actived tab: {{ active }}</div>
  </div>
</template>

<script>
import TabView from '../src/components/TabView';
import TabPane from '../src/components/TabPane';

export default {
  name: 'TabsExample',
  components: {
    TabView,
    TabPane,
  },
  data() {
    return {
      active: '1',
      items: [{ label: '1' }, { label: '2' }, { label: '3' }],
    };
  },
};
</script>
