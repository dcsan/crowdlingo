module.exports = {
  title: 'CrowdLingo',
  description: 'speak with your friends',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',

    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },

    repo: 'https://github.com/dcsan/crowdlingo/tree/master/press/docs/guide',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },

      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/' }
        ]
      },
      // { text: 'Github', link: 'https://github.com/dcsan/crowdlingo' }
    ],

    // sidebar: [
    //   {
    //     title: 'Site',
    //     collapsible: false,
    //     children: [
    //       '/',
    //       '/guide',
    //     ]
    //   },
    //   {
    //     title: 'Speaking',
    //     children: [ 
    //       '/movies',
    //       ['/free-time', 'Free time'],    
    //      ]
    //   }      
    // ]

  }

}