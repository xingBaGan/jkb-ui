import JkbInput from '../packages/input/index';
export default {
  title: 'Example/Input',
  component: JkbInput
};
const Template = (args) => ({
  components: { JkbInput },
  setup() {
    return { args };
  },
  data() {
    return {
      value: ''
    }
  },
  template: ' <jkb-input v-model="value"></jkb-input>',
});
export const Default = Template.bind({});
Default.args = {

};

