import {globalUrls} from "urls.js";
// 在这里就不能使用 that.setData 传值了
const network = {
  // 获取电影列表
  getMovieList: function (params) {
    // 电影

    // wx.request({
    //   url: globalUrls.movielist,
    //   data: {
    //     count: count
    //   },
    //   success: function (res) {
    //     var movies = res.data.subject_collection_items;
    //     if (params && params.success) {
    //       params.success(movies);
    //     }
    //   }
    // });
    params.type = 'movie';
    this.getItemList(params);
  },
// 获取电视列表
  getTvList: function (params) {
    params.type = 'tv';
    this.getItemList(params);
  },
// 获取综艺列表
  getShowList: function (params) {
    params.type = "show";
    this.getItemList(params);
  },
 
// 获取item 列表
  getItemList:function(params){
    var url = "";
    if(params.type === 'movie'){
      url = globalUrls.movielist;
    }else if(params.type === 'tv'){
      url = globalUrls.tvlist;
    }else if(params.type === 'show'){
      url = globalUrls.showlist;
    }
    var count = params.count ? params.count : 7;

    wx.request({
      url:url,
      data: {
        count: count
      },
      success: function (res) {
        var items = res.data.subject_collection_items;
        var itemCount = items.length;
        var left = itemCount%3;
        if(left === 2 ){
          items.push(null);
        }
        // 更改 更多界面显示的问题
        if (params && params.success) {
          params.success(items);
        }
      }
    });
  },

// 网络请求获取详情页的数据 112

  // 获取详情
  getItemDetail: function (params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === 'movie') {
      url = globalUrls.movieDetail + id;
    } else if (type === 'tv') {
      url = globalUrls.tvDetail + id;
    } else {
      url = globalUrls.show + id;
    }
    wx.request({
      url: url,
      success: function (res) {
        var item = res.data;
        if (params.success) {
          params.success(item);
        }
      }
    })
  },

  // 获取标签
  getItemTags: function (params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === 'movie') {
      url = globalUrls.movieTags(id);
    } else if (type === 'tv') {
      url = globalUrls.tvTags(id);
    } else {
      url = globalUrls.showTags(id);
    }
    wx.request({
      url: url,
      success: function (res) {
        var tags = res.data.tags;
        if (params.success) {
          params.success(tags);
        }
      }
    })
  },

// 获取评论
  getItemComments: function (params) {
    var type = params.type;
    var id = params.id;
    var start = params.start ? params.start : 0;
    var count = params.count ? params.count : 3;
    var url = "";
    if (type === 'movie') {
      url = globalUrls.movieComments(id, start, count);
    } else if (type === 'tv') {
      url = globalUrls.tvComments(id, start, count);
    } else {
      url = globalUrls.showComments(id, start, count);
    }
    wx.request({
      url: url,
      success: function (res) {
        var data = res.data;
        if (params.success) {
          params.success(data);
        }
      }
    })
  },
 
  // 获取搜索电影 item
  getSearch:function(params){
    var q = params.q;
    var url = globalUrls.searchUrl(q);
    wx.request({
      url: url,
      success: function (res) {
        // console.log(res);
        var subjects = res.data.subjects;
        if(params.success){
          params.success(subjects);
        }
      }
    })
  }
}
export { network }