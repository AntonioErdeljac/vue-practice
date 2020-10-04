var data = {
  name: 'Antonio'
}

Vue.component('greeting', {
  template: '<p>Reusable component - {{ name }} <button @click="changeName">Change name</button></p>',
  data: function() {
    return { ...data }
  },
  methods: {
    changeName: function() {
      this.name = 'Mario'
    }
  }
});

const one = new Vue({
  el: '#vue-app-one',
});

const two = new Vue({
  el: '#vue-app-two',
});
