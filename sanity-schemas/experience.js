// Matches experienceCard() in index.html.
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'company', title: 'Company', type: 'string', validation: R => R.required()},
    {name: 'role', title: 'Role', type: 'string', validation: R => R.required()},
    {name: 'dates', title: 'Dates', type: 'string', description: 'e.g. "Jul 2026 – Present"'},
    {name: 'current', title: 'Current role?', type: 'boolean', description: 'Shows the green "Current" badge', initialValue: false},
    {name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first, so newest role = 1'},
    {name: 'stack', title: 'Tech stack', type: 'array', of: [{
      type: 'object', fields: [
        {name: 'label', type: 'string', title: 'Name'},
        {name: 'key', type: 'boolean', title: 'Highlight in blue?', initialValue: false}
      ], preview: {select: {title: 'label'}}
    }]},
    {name: 'bullets', title: 'Bullet points', type: 'array', of: [{type: 'text', rows: 3}],
     description: 'Wrap metrics in **double asterisks** to bold them'},
    {name: 'impacts', title: 'Impact numbers', type: 'array', of: [{
      type: 'object', fields: [
        {name: 'value', type: 'number', title: 'Number', description: 'Counts up from 0 to this'},
        {name: 'suffix', type: 'string', title: 'Suffix', description: 'e.g. "M+", "%"'},
        {name: 'label', type: 'string', title: 'Label'}
      ], preview: {select: {title: 'label', subtitle: 'value'}}
    }]},
    {name: 'metrics', title: 'Metric chips', type: 'array', of: [{
      type: 'object', fields: [
        {name: 'icon', type: 'string', title: 'Icon', initialValue: 'bolt'},
        {name: 'label', type: 'string', title: 'Text'}
      ], preview: {select: {title: 'label'}}
    }]}
  ]
}
