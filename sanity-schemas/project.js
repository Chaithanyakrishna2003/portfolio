// Matches projectCard() in index.html. Field names map 1:1 onto the rendered card.
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: R => R.required()},
    {name: 'icon', title: 'Icon', type: 'string', description: 'Font Awesome name, e.g. "comments", "robot", "cube"', initialValue: 'cube'},
    {name: 'summary', title: 'Summary', type: 'text', rows: 3, description: 'Wrap numbers in **double asterisks** to bold them'},
    {name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first'},
    {name: 'stack', title: 'Tech stack', type: 'array', of: [{
      type: 'object', fields: [
        {name: 'label', type: 'string', title: 'Name'},
        {name: 'key', type: 'boolean', title: 'Highlight in blue?', initialValue: false}
      ], preview: {select: {title: 'label'}}
    }]},
    {name: 'metrics', title: 'Metrics', type: 'array', of: [{
      type: 'object', fields: [
        {name: 'icon', type: 'string', title: 'Icon', initialValue: 'chart-line'},
        {name: 'label', type: 'string', title: 'Text'}
      ], preview: {select: {title: 'label'}}
    }]},
    {name: 'links', title: 'Links', type: 'array', of: [{
      type: 'object', fields: [
        {name: 'icon', type: 'string', title: 'Icon', initialValue: 'fa-brands fa-github'},
        {name: 'label', type: 'string', title: 'Button text'},
        {name: 'url', type: 'url', title: 'URL'}
      ], preview: {select: {title: 'label', subtitle: 'url'}}
    }]}
  ]
}
