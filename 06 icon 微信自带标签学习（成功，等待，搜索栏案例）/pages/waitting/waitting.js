// pages/waitting/waitting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seconds:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 每隔一秒进行一次操作
    var that=this;
    setInterval(function(){
      var seconds = that.data.seconds;
      if(seconds >=1 ){
        that.setData({
          seconds: seconds - 1
        })
      }
      
    },1000);
  },


})