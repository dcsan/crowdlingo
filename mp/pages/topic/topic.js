// pages/topic/topic.js

const topicData = require('../../data/topicData.js')

Page({

  onLoad: function (options) {
    console.log("options", options)
    let topic = topicData.find( t => t.cname === options.cname)
    if (topic.image) {
      topic.image.path = "/data/" + topic.image.src
    }
    console.log("topic", topic)
    this.setData({topic})
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