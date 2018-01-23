Vue.component('CkTabs', {
  template:
  `
    <div class="ck-tabs">
      <div class="tabs is-centered is-boxed">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"><a @click="selectTab(tab)" :href="formatLink(tab.name)"> {{ tab.name}} </a></li>
        </ul>
      </div>
      <div class="tab-detail">
        <slot></slot>
      </div>
    </div>
  `,
  created() {
    this.tabs = this.$children;
  },
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    selectTab(selectTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (selectTab.name == tab.name);
      });
    },
    formatLink(name) {
      return '#' + name.toLowerCase().replace(/\s/, '-');
    }
  }
});

Vue.component('CkTab', {
  template:
  `
    <div v-show="isActive"><slot v-show=""></slot></div>
  `,
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
})

var app = new Vue({
  el: '#app',
  data: {
    tabList: [
      { name: 'Home', description: 'Home Content', selected: true },
      { name: 'About Us', description: 'About Us Content', selected: false },
      { name: 'Contact Us', description: 'Contact Us Content', selected: false },
      { name: 'Get Job', description: 'Get Job Content', selected: false },
      { name: 'Get Job 2', description: 'Get Job Content 2', selected: false },
    ]
  }
})
