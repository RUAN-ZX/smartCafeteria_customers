Page({
  data: {
    
    swiperList: [
      "../../jpg/banner/1.jpg",
      "../../jpg/banner/2.jpg",
      "../../jpg/banner/3.jpg"
    ],
    r: [
    ],
    contentOpacity:0.0,
    
    cap_info:{},
  },
  onLoad: function () {
    let pic = getApp().pic;
    this.setData({
      r:[
        {
          rname: "第一餐厅",
          rstar: "4.9",
          rsold: "8997",
          rprice: "7.8",
          rcomment: "物美价廉",
          rpreface: pic+"r/1.jpg",
        },
        {
          rname: "第二餐厅",
          rstar: "4.9",
          rsold: "9103",
          rprice: "8.1",
          rcomment: "位置不错",
          rpreface: pic+"r/2.jpg",
        },
        {
          rname: "第五餐厅",
          rstar: "4.9",
          rsold: "12213",
          rprice: "8.2",
          rcomment: "环境很好",
          rpreface: pic+"r/5.jpg",
        },
        {
          rname: "教职工餐厅",
          rstar: "4.9",
          rsold: "6759",
          rprice: "8.1",
          rcomment: "精致典雅",
          rpreface: pic+"r/6.jpg",
        },
        {
          rname: "第三餐厅",
          rstar: "4.9",
          rsold: "7984",
          rprice: "8.0",
          rcomment: "还行",
          rpreface: pic+"r/3.jpg",
        },
        {
          rname: "第六餐厅",
          rstar: "4.9",
          rsold: "9984",
          rprice: "7.8",
          rcomment: "还可以",
          rpreface: pic+"r/6.jpg",
        },
        
      ],
    })
  },
  onReady: function () {
    this.setData({
      cap_info : getApp().cap_info,
      user : getApp().user,
      contentOpacity: 1.0
      // css 采用transition 可以不用js实现渐现
    })
  },
  rests:function(e){
    // e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  }

})