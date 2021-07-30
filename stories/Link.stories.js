import JkbButton from '../packages/button/index';

export default {
    title: 'Example/Button',
    component: JkbButton
  };

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { JkbButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: ' <jkb-button plain></jkb-button>',
  });

export const Primary = Template.bind({});
Primary.args = {
  plain:true
};