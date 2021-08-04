import JkbInputNumber from '../packages/input-number/index';
export default {
  title: 'Example/InputNumber',
  component: JkbInputNumber
};
const Template = (args) => ({
  components: { JkbInputNumber },
  setup() {
    return { args };
  },
  template: ' <jkb-input-number ></jkb-input-number>',
});
export const Default = Template.bind({});
Default.args = {

};

