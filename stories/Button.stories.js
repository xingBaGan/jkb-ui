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
    template: ' <jkb-button ></jkb-button>',
  });

  export const Plain = Template.bind({});
  Plain.args = {
    plain:false
  };


export const ColoredPlain = () => ({
  components:{JkbButton},
  template:`<jkb-button type="primary" plain></jkb-button> 
            <jkb-button type="success" plain></jkb-button>
            <jkb-button type="warning" plain></jkb-button>
            <jkb-button type="danger"  plain></jkb-button>
            `
})

export const ColoredDisPlain = () => ({
  components:{JkbButton},
  template:`<jkb-button type="primary"></jkb-button> 
            <jkb-button type="success"></jkb-button>
            <jkb-button type="warning"></jkb-button>
            <jkb-button type="danger"></jkb-button>
            `
})