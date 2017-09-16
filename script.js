new Vue({
  el: '#AppVue',
  data:{
    lists:[

    ],
    newKeep: ''
  },
  methods: {
    addKeep: function(){
      this.lists.push({keep: this.newKeep, completed:false});
      this.newKeep = '';
    }
  }


});
