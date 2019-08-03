import {network} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
      //电影
    network.getMovieList({
      success:function(movies){
        that.setData({
          movies: movies
        })
      }
    });
    //电视剧

      network.getTvList({
        success:function(tvs){
          that.setData({
            tvs: tvs
          })
        }
      });

    //综艺
    network.getShowList({
      success:function(shows){
        that.setData({
          shows: shows
        })
      }
    });
    // wx.request({
    //   url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=7',
    //   success: function(res) {
    //     var shows = res.data.subject_collection_items;
    //     that.setData({
    //       shows: shows
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})