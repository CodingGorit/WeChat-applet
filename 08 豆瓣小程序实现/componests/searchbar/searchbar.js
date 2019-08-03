// componests/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnavigator:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInputEvent:function(event){
      // console.log(event);
      var value = event.detail.value;
      var detail = {"value":value}; 
      var options = {};
      this.triggerEvent("searchinput",detail,options);
    }
  }
})
