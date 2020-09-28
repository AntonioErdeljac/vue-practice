new Vue({
  el: '#vue-app',
  data: {
    name: 'Vue app',
    job: 'test',
    website: 'https://www.google.com/',
  },
  methods: {
    greet: function(name) {
      return `Hello ${name}. Your job is ${this.job}`
    },
  }
});
