// componests/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 解决数据渲染不及时的问题
    rate:{
      type:Number,
      value:0,
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        this.updateRate();
      }
    },
    starsize:{
      type:Number,
      value:20 //rpx
    },
    fontsize:{
      type:Number,
      value:20 //rpx
    },
    fontcolor:{
      type:String,
      value:"#ccc"
    },
    istext:{
      type:Boolean,
      value:true
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
    updateRate: function () {
      var that = this;
      var rate = that.properties.rate;
      var intRate = parseInt(rate);
      var light = parseInt(intRate / 2);
      var half = intRate % 2;
      var gray = 5 - light - half;
      // console.log(light,half,gray);
      var lights = [];
      var halfs = [];
      var grays = [];
      for (var index = 1; index <= light; index++) {
        lights.push(index);
      }
      for (var index = 1; index <= half; index++) {
        halfs.push(index);
      }
      for (var index = 1; index <= gray; index++) {
        grays.push(index);
      }
      // 传值，保留一位小数
      var ratetext = rate && rate > 0 ? rate.toFixed(1) : "未评分"
      that.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        ratetext: ratetext
      });
    }
  },

//通过计算获得星星的个数
  lifetimes:{
    attached: function () {
      this.updateRate();
    }
  }
})
