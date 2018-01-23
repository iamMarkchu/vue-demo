Vue.component('task', {
  template: '<li><slot></slot></li>'
});
Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.description }}</task>
    </ul>
  `,
  data() {
    return {
      tasks: [
        { description: 'do homework', status: true },
        { description: 'do homework2', status: false },
        { description: 'do homework3', status: true },
        { description: 'do homework4', status: false },
        { description: 'do homework5', status: true }
      ]
    }
  }
});

var app = new Vue({
  el: '#app'
})
