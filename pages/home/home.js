// pages/home/home.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      // msg:"这是来自js的文件的msg数据",
      // num:666,
      // bl:false,
      //data属性内的数据可以通过数据的属性名称直接调用早wxml
      //不要在data内定义函数，否则函数无法被调用
      swiperArr:[
        { "image_src":"/upload/banner1.png",},
        { "image_src": "/upload/banner2.png", },
        { "image_src": "/upload/banner3.png", }
      ]
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    console.log(app.globalurl);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },
  /**自定义调用的方法两种写法*/
  testHandle:function() {
    console.log("测试事件绑定是否成功");
  },
  sonHandle(event){
    console.log("子元素绑定的事件");
    console.log(event.currentTarget.dataset.para);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onhide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})