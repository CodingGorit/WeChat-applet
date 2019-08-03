// pages/redEnvlope/redEnvlope.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //通过调用官方接口，获取手机 的宽度
    var systemInfo=wx.getSystemInfoSync();
    var windowHeight = systemInfo.windowHeight;
    var windowWidth = systemInfo.windowWidth;
    

    var width = windowWidth;
    var height = 100;
    var radius = (height/2) + (width*width/8/height);
    var left = -(radius-width/2);
    this.setData({
      windowHeight: windowHeight,
      windowWidth: windowWidth,
      radius: radius,
      left:left
    })
  },
/**
 * 滚动的事件
 */
  scrollEvent:function(event){
    var scrollTop = event.detail.scrollTop;
    if(scrollTop>0 && scrollTop<=100){
      var height = 100 - scrollTop;
      var width = this.data.windowWidth;
      var radius = (height / 2) + (width * width / 8 / height);
      var left = -(radius - width / 2);
      this.setData({
        radius: radius,
        left: left
      })
    }

  }
})