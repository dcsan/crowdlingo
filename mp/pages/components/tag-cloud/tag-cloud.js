// components/tag-cloud.js

const words = [
  {word: "soccer", score: 10},
  {word: "goal", score: 5},
  {word: "score", score: 10},
  {word: "winning", score: 5},
  {word: "hope", score: 5},
  {word: "my team", score: 5},
  {word: "surprising", score: 15},
]

Component({

  data: {
  },

  properties: {
    topic: {
      type: Object
    }
  },

  methods: {
    onLoad() {
      console.log('tag-cloud.onLoad', this.data)
    },

    onShow() {
      console.log('tag-cloud.onShow', this.data)
    },

    goProfile() {
      console.log('goProfile')
      wx.switchTab({
        url: '/pages/tbot/profile/profile'
      })
    }
  },

  // call once when mounted
  // but the page will need to update
  attached: function(evt) {
    // let words = this.data.topic.words
    console.log('tag-cloud attached', evt)
    // debugger
    console.log('attached.data', this.data)
    // this.setData({
    //   words: words
    // })
    // let userVars = UserVars.get()
    // this.setData({
    //   coins: userVars.coins,
    //   stars: userVars.stars
    // })
  },

  ready() {
    console.log('tag-cloud.ready.data', this.data)
  }

})