new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0,
  },
  methods: {
    add: function(amount) {
      this.age += amount;
    },
    subtract: function(amount) {
      this.age -= amount;
    },
    onMove: function(event) {
      const x = event.offsetX;
      const y = event.offsetY;

      this.x = x;
      this.y = y;
    }
  }
});
