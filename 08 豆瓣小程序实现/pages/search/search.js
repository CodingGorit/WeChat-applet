// pages/search/search.js
import {network} from "../../utils/network.js";
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
    var that = this;
    // 获取缓存数据，然后显示到界面上
    wx.getStorage({
      key: 'searched',
      success: function(res) {
        // console.log(res);
        var data = res.data;
        that.setData({
          histories:data
        })
      },
    })
  },

  onSearchInputEvent:function(event){
    // console.log(event);
    var that = this;
    var value = event.detail.value;
    if(!value || value === ""){
      that.setData({
        subjects:null
      });
      return;
    }
    network.getSearch({
      q:value,
      success:function(subjects){
        that.setData({
          subjects:subjects
        })
      }
    })
  },

  onItemTapEvent: function(event){
    var that = this;
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    // 将历史搜索数据保存到本地缓存中,把多个搜索记录保存下来，要减去重复的数据
    var histories = that.data.histories;
    var isExisted = false;

    if(histories){
      for (var index = 0; index < histories.length; index++) {
        var movie = histories[index];
        // 判断是否有相同的数据存在
        if (movie.id === id) {
          isExisted = true;
          break;
        }
      }
    }

    if (!isExisted){
      if(!histories){
        histories = [];
      }

      histories.push({
        title:title, 
        id:id
        });

      wx.setStorage({
        key: 'searched',
        data: histories,
        success: function () {
          console.log("保存成功");
        }
      })
    }
    // histories.push({ title: title, id: id })

    wx.navigateTo({
      url: '/pages/detail/detail?type=movie&id='+id,
    });
  },

  // 删除缓存数据
  onClearEvent:function(event){
    // 1.将缓存的数据删除
    // 2.将histories 清空
    // 3. 使用 wx.removStorage
    wx.removeStorage({
      key: 'searched',
      success: function(res) {
        console.log("删除成功");
      },
    });
    this.setData({
      histories:null
    });
  }
})

