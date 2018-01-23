Vue.component('CkModal', {
  template:
  `
    <div class="modal ck-modal is-active" v-show="isVisible">
      <div class="modal-background" @click="close"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header"></slot>
          </p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
  `,
  props: ['isVisible'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    showModal: false,
    modal: {
      title: 'test title',
      body: 'test content'
    }
  }
})
