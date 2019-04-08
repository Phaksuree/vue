new Vue({
  el: '#app',
  data: {
    password: '',
    categories: [
      { name: 'Javascript', sub: ['Vue.js', 'React', 'Angular2']},
      { name: 'Database', sub: ['MySQL', 'PostgreSQL', 'MariaDB']},
      { name: 'Javascript', sub: ['Operating System', 'Linux', 'Windows']}
    ]
  }
})