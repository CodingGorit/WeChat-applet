// pages/weibo/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weibos:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  writeweibo: function(event){
    wx.navigateTo({
      url: '/pages/weibo/aweibo/aweibo',
    })
  }
})