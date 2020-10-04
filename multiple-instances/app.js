const one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'App #1'
  },
  computed: {
    greet: function() {
      return 'Hello App #1'
    }
  }
});

const two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'App #2'
  },
  methods: {
    changeTitle: function() {
      one.title = 'Test'
    }
  },
  computed: {
    greet: function() {
      return 'Hello App #2'
    }
  }
});

two.title = 'Changed from outside'
