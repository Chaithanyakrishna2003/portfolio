// Free-text blocks that are not cards: the hero tagline and the About section.
// Single document: create one and keep editing it, do not make a second.
export default {
  name: 'siteText',
  title: 'Site text (hero + About)',
  type: 'document',
  fields: [
    {name: 'heroTagline', title: 'Hero tagline', type: 'text', rows: 3,
     description: 'The sentence under your name. **double asterisks** for bold'},
    {name: 'aboutParagraphs', title: 'About paragraphs', type: 'array',
     of: [{type: 'text', rows: 6}],
     description: 'One entry per paragraph. **double asterisks** for bold'},
    {name: 'capabilities', title: 'Capability tiles', type: 'array', of: [{
      type: 'object', fields: [
        {name: 'icon', type: 'string', title: 'Icon', initialValue: 'circle-check'},
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'body', type: 'text', rows: 3, title: 'Body',
         description: '**double asterisks** highlight a number in accent colour'}
      ], preview: {select: {title: 'title', subtitle: 'body'}}
    }]},
    {name: 'interests', title: 'Beyond work tags', type: 'array', of: [{type: 'string'}]}
  ]
}
