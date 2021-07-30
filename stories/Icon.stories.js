
import JkbIcon from '../packages/icon/index';
import IconList from '../src/icon.json'
export default {
  title: 'Example/Icon',
  component: JkbIcon
};
let style= `
  display:inline-flex;
  flex-direction:column;
  align-items:center;
  width:150px;
`
let templateStrings = IconList.map((iconName) => {
  return `<div style="${style}"><JkbIcon name="${iconName}" />${iconName}</div>`
})

let template =  templateStrings.join('')
const Template = (args) => ({
  components: { JkbIcon },
  template: args.template
});
export const Base = Template.bind({});
Base.args = {
  'template':`<JkbIcon name="more"></JkbIcon>`
};

export const All = Template.bind({});
All.args = {
  'template':`<div >${template}</div>`
};

