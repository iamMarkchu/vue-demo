Vue.component('CkMessage', {
  template:
  `
    <article class="message mk-message" v-show="isVisible">
      <div class="message-header">
        <p v-text="title"></p>
        <button class="delete" aria-label="delete" @click="hideModal"></button>
      </div>
      <div class="message-body">
        <slot></slot>
      </div>
    </article>
  `,
  props: ['title'],
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    message: {
      title: 'message title',
      body: 'message body content'
    }
  }
})
