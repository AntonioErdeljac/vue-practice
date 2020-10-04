new Vue({
  el: '#vue-app',
  data: {
    output: 'Test'
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.inputRef.value;
    }
  }
});
