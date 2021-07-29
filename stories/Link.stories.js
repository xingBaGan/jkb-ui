import JkbLink from '../packages/link/index';

export default {
    title: 'Example/Link',
    component: JkbLink
  };

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { JkbLink },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<jbk-link></jbk-link>',
  });

export const Primary = Template.bind({});
Primary.args = {

};