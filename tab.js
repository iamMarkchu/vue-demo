Vue.component('CkTabs', {
  template:
  `
    <div class="ck-tab">
      <div class="tabs is-centered is-boxed">
        <ul>
          <li v-for="tab in tabs" @click="selectTab(tab)" :class="{ 'is-active': tab.selected }"><a :href="formatLink(tab.name)"> {{ tab.name}} </a></li>
        </ul>
      </div>
      <div>{{ selectedTabDetail }}</div>
    </div>
  `,
  props: ['tabList'],
  created() {
    this.tabs = this.tabList;
  },
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    selectTab(selectTab) {
      this.tabs.forEach((tab) => {
        tab.selected = (selectTab.name == tab.name);
      });
    },
    formatLink(name) {
      return '#' + name.toLowerCase().replace(/\s+/, '-');
    }
  },
  computed: {
    selectedTabDetail() {
      let selectTab = {};
      this.tabs.forEach(tab => {
        if(tab.selected)  selectTab = tab;
      });
      return selectTab.description;
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    tabList: [
      { name: 'Home', description: 'Home Content', selected: true },
      { name: 'About Us', description: 'About Us Content', selected: false },
      { name: 'Contact Us', description: 'Contact Us Content', selected: false }
    ]
  }
})
