<script>
import TabBar from './TabBar';
import TabItem from './TabItem';

export default {
  name: 'TabView',
  components: {
    TabBar,
    TabItem,
  },
  created() {
    this.activeName = String(this.value || '0');
  },
  render() {
    const panes = this.panes;

    const tabs = panes.map((pane, index) => {
      const tabName = String(pane.name || index);
      const labelContent = pane.$slots.label || pane.label;

      const active = tabName === this.activeName;

      // eslint-disable-next-line no-param-reassign
      pane.active = active;

      const item = {
        props: {
          active,
          onTabClicked: ev => this.onTabClicked(ev, { tabName, pane }),
        },
      };

      return (
        <TabItem {...item}>
          { labelContent }
        </TabItem>
      );
    });

    return (
      <div class="tabs">
        <TabBar class="tabs__header" ref="nav">
          {tabs}
        </TabBar>
        <div class="tabs__content">{this.$slots.default}</div>
      </div>
    );
  },
  props: {
    value: String,
  },
  data() {
    return {
      activeName: '',
      panes: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    onTabClicked(ev, payload) {
      const activeName = payload.tabName;
      this.activeName = activeName;
      this.$emit('input', activeName);
    },
    addPane(pane) {
      const index = this.$slots.default.indexOf(pane.$vnode);
      this.panes.splice(index, 0, pane);
    },
  },
};
</script>
