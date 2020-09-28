new Vue({
  el: '#vue-app',
  data: {
    age: 25,
  },
  methods: {
    addYear: function() {
      this.age = this.age + 1;
    },
    subtractYear: function() {
      this.age = this.age - 1;
    }
  }
});
