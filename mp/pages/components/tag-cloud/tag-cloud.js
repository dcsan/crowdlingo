// components/tag-cloud.js

const words = [
  {word: "one", score: 10},
  {word: "two", score: 5},
  {word: "three", score: 10}
]

Component({

  data: {
  },

  properties: {
    words: {
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
    console.log('tag-cloud attached', evt)
    // debugger
    console.log('this', this.data)
    this.setData({
      words: words
    })
    // let userVars = UserVars.get()
    // this.setData({
    //   coins: userVars.coins,
    //   stars: userVars.stars
    // })
  },

  ready() {
    console.log('st bar.ready.data', this.data)
  }

})