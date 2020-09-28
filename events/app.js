new Vue({
  el: '#vue-app',
  data: {
    age: 25,
  },
  methods: {
    add: function(amount) {
      this.age += amount;
    },
    subtract: function(amount) {
      this.age -= amount;
    }
  }
});
