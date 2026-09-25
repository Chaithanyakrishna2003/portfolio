// Matches achievementCard() in index.html. With a URL it renders as a clickable
// card (coding profiles); without one it renders as a plain card (exam ranks).
export default {
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string', validation: R => R.required()},
    {name: 'detail', title: 'Detail', type: 'text', rows: 2, description: 'Use &middot; between facts. **double asterisks** for bold'},
    {name: 'icon', title: 'Icon', type: 'string', description: 'Font Awesome name, e.g. "medal", "chess-knight", "star", "award"', initialValue: 'award'},
    {name: 'url', title: 'Link', type: 'url', description: 'Leave empty for a non-clickable card such as an exam rank'},
    {name: 'linkLabel', title: 'Link label', type: 'string', description: 'Shown in the pill, e.g. your username'},
    {name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first'}
  ]
}
