import JkbButton from '../packages/button/index';
import { action } from '@storybook/addon-actions'
//需要默认的导出名字
export default {
  title: 'Example/Button',
  component: JkbButton
};
//
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { JkbButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  methods: { action: action('click') },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: ' <jkb-button >默认button</jkb-button>',
});

export const Plain = Template.bind({});
Plain.args = {
  plain: false
};

const ButtonsTemplate = (args) => ({
  components: { JkbButton },
  template: args.template
})

export const Primary = ButtonsTemplate.bind({});
Primary.args = {
  template: ` <jkb-button type="success" plain>成功按钮</jkb-button>
  <jkb-button type="warning" plain>警告按钮</jkb-button>`
}
//定义故事
export const ColoredPlain = ButtonsTemplate.bind({})
ColoredPlain.args = {
  template: `<jkb-button type="primary" plain>主要按钮</jkb-button> 
              <jkb-button type="success" plain>成功按钮</jkb-button>
              <jkb-button type="warning" plain>警告按钮</jkb-button>
              <jkb-button type="danger"  plain>危险按钮</jkb-button>
              `,
  disable: true
}
export const ColoredDisPlain = ButtonsTemplate.bind({})
ColoredDisPlain.args = {
  template: `<jkb-button type="primary" >主要按钮</jkb-button> 
  <jkb-button type="success" >成功按钮</jkb-button>
  <jkb-button type="warning" >警告按钮</jkb-button>
  <jkb-button type="danger"  >危险按钮</jkb-button>
  `
}
export const ColoredCircle = ButtonsTemplate.bind({})
ColoredCircle.args = {
  template: `<jkb-button type="primary" circle icon="jkb-icon-check"></jkb-button> 
  <jkb-button type="success" circle  icon="jkb-icon-check"></jkb-button>
  <jkb-button type="warning" circle  icon="jkb-icon-check"></jkb-button>
  <jkb-button type="danger"  circle  icon="jkb-icon-check"></jkb-button>
  `,
  
}
export const ColoredRound = ButtonsTemplate.bind({})
ColoredRound.args = {
  template: `<jkb-button type="primary" round>主要按钮</jkb-button> 
  <jkb-button type="success" round>成功按钮</jkb-button>
  <jkb-button type="warning" round>警告按钮</jkb-button>
  <jkb-button type="danger"  round>危险按钮</jkb-button>
  `
}

