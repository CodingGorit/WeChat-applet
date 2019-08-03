// components/segment/segment.js
Component({
  // 使用多个卡槽而添加的
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    items:{
      type:Array,
      value:[]
    },
    defaultindex:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 通过自定义组件的声明周期函数，将默认值 defaultindex 赋值给 下面的
    currentIndex:0
  },

  lifetimes:{
    attached:function(){
      var that=this
      this.setData({
        currentIndex: that.properties.defaultindex
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onItemTapEvent:function(event){
      var index = event.target.dataset.index;
      this.setData({
        // 修改默认值
        currentIndex:index
      })
      var detail = {"index":index};
      var options ={};
      this.triggerEvent("itemchanged",detail,options);
    }
  }
})
