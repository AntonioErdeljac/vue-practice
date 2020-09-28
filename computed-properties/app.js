new Vue({
  el: '#vue-app',
  data: {
    a: 0,
    b: 0,
    age: 20,
  },
  methods: {
    compute: function (value) {
      return this[value] + this.age;
    }
  }
});
