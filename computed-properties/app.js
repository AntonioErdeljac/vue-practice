new Vue({
  el: '#vue-app',
  data: {
    a: 0,
    b: 0,
    age: 20,
  },
  computed: {
    computeA: function () {
      return this.a + this.age;
    },
    computeB: function () {
      return this.b + this.age;
    }
  }
});
