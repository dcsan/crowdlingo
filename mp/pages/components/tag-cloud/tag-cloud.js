
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
    },

    removeTag(e) {
      let item = e.currentTarget.dataset.item
      let words = this.data.topic.words.filter( w => w.word !== item.word)
      this.setData({
        'topic.words': words
      })
    },

    // TODO pull from text field.value ?
    addTag(e) {
      let word = "new word"
      let words = this.data.topic.words
      words.push(word)
      this.setData({
        'topic.words': words
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

});