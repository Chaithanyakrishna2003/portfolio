// Matches blogCard() in index.html.
export default {
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: R => R.required()},
    {name: 'kicker', title: 'Kicker', type: 'string', description: 'Small label above the title', initialValue: 'New post'},
    {name: 'icon', title: 'Icon', type: 'string', initialValue: 'pen-nib'},
    {name: 'summary', title: 'Summary', type: 'text', rows: 4, description: '**double asterisks** for bold'},
    {name: 'url', title: 'Link to the post', type: 'url', description: 'Leave empty to show the badge below instead of a Read button'},
    {name: 'badge', title: 'Badge', type: 'string', description: 'Only used when there is no link, e.g. "First post in progress"'},
    {name: 'publishedAt', title: 'Published at', type: 'datetime', description: 'Newest posts appear first'}
  ]
}
