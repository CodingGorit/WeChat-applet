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
    var systemInfo=wx.getSystemInfoSync();
    var windowWidth = systemInfo.windowWidth;
    this.setData({
      "windowWidth":windowWidth
    })
  },
  onTouchStart:function(event){
    var startPageX = event.touches[0].pageX;
    this.setData({
      startPageX: startPageX
    })
  },
  onChangeEvent:function(event){//移动的距离实时显示
    var x=event.detail.x;
    this.setData({
      x:x
    })
  },

  onTouchEnd:function(event){
   var endPageX = event.changedTouches[0].pageX;
   var startPageX = this.data.startPageX;
   var x=this.data.x; //获得移动店距离
    if (startPageX > endPageX) {//起始点大于结束点，向左移动
      if(x< -20){
        this.setData({
          x:-100//删除按钮刚好占 100个像素
        })
      }else{//还没超过20个像素就返回
        this.setData({
          x:0
        })
      }
    }else{//往右移动
      if(x>-80){
        this.setData({
          x:0
        })
      }else{
        this.setData({
          x:-100
        })
      }
    }
  } 
})