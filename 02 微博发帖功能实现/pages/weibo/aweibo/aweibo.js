// pages/weibo/aweibo/aweibo.js
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

  },

  submitEvent:function(event){
    var content = event.detail.value.content;
    var pages = getCurrentPages();
    var page = pages[0];
    var weibos = page.data.weibos;
    weibos.push(content);
    page.setData({
      weibos:weibos
    })
    wx.navigateBack({
      
    })
  }
})