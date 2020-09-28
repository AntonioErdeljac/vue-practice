new Vue({
  el: '#vue-app',
  data: {
    available: false,
    nearby: false,
  },
  computed: {
    getClass: function () {
      return { available: this.available, nearby: this.nearby };
    },
  }
});
