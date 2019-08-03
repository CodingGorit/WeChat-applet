// pages/searchbar/searchbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 数据清除时间
  onClearEvent:function(event){
    this.setData({
      value:""
    })
  }
})