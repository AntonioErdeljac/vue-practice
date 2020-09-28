new Vue({
  el: '#vue-app',
  data: {
    name: 'Vue app',
    job: 'test',
    website: 'https://www.google.com/',
    websiteTag: '<a href="https://www.google.hr/">Website #2</a>',
  },
  methods: {
    greet: function(name) {
      return `Hello ${name}. Your job is ${this.job}`
    },
  }
});
