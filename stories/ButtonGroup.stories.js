import JkbButtonGroup from '../packages/button-group/index';
import JkbButton from '../packages/button/index';
export default {
  title: 'Example/ButtonGroup',
  component: JkbButtonGroup
};
const Template = (args) => ({
  components: { JkbButtonGroup ,JkbButton},
  setup() {
    return { args };
  },
  template:args.template?args.template: '<jkb-button-group> <jkb-button >默认button</jkb-button> <jkb-button >默认button</jkb-button></jkb-button-group>',
});
export const Default = Template.bind({});

export const MultiColorButtons = Template.bind({});

MultiColorButtons.args = {
  template: `<jkb-button-group> <jkb-button type="primary" plain>主要按钮</jkb-button> 
  <jkb-button type="success" plain>成功按钮</jkb-button>
  <jkb-button type="warning" plain>警告按钮</jkb-button>
  <jkb-button type="danger"  plain>危险按钮</jkb-button></jkb-button-group>`,
};