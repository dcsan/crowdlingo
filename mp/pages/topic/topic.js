// pages/topic/topic.js

const topicInfo = {
  'world-cup': {
      title: "World Cup",
      subtitle: "Lets talk about the world cup"
  },
  nature: {
    title: "Rhino",
    subtitle: "is getting rare"
  }
}

Page({

  onLoad: function (options) {
    console.log("options", options)
    let thisTopic = topicInfo[options.cname]
    console.log("thisTopic", thisTopic)
    let data = {
      image: {
        src: '/media/world-cup.jpg'
      }
    }
    this.setData(thisTopic)
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