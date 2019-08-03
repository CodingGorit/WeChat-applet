// pages/sgementpage/segmentpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: ["最新", "关注", "同城"],
    currentindex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onSegmentItemChanged:function(event){
    var index=event.detail.index;
    this.setData({
      currentindex:index
    })
  }
})