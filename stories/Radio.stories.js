import JkbRadio from '../packages/radio/index';
export default {
  title: 'Example/Radio',
  component: JkbRadio
};
const Template = (args) => ({
  components: { JkbRadio },
  setup() {
    return { args };
  },
  template: args.template ? args.template : '<jkb-radio v-model="radio" label="mother" ></jkb-radio>',
  data() {
    return {
      radio: "father"
    }
  },
  methods: {
  }
});
export const Default = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
  template: ' <jkb-radio v-model="radio" label="father" disabled checked></jkb-radio><jkb-radio v-model="radio" label="mother" disabled ></jkb-radio>'
}
export const use_same_model_value = Template.bind({});

use_same_model_value.args = {
  template: ' <jkb-radio  name="retry_life" v-model="radio" label="hell" ></jkb-radio><jkb-radio name="retry_life" label="haven"  v-model="radio" ></jkb-radio>'
};