// pages/topic/topic.js

const topicInfo = require('./topicData.js')

Page({

  onLoad: function (options) {
    console.log("options", options)
    let oneTopic = topicInfo.find( t => t.cname === options.cname)
    console.log("oneTopic", oneTopic)
    this.setData(oneTopic)
  },

  onReady: function () {
  },

  onShow: function () {
  },

  onHide: function () {  
  },

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