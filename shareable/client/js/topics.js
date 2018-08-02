const log = console.log

let topics = [


    {
      category: "Friends",
      cname: "hangout",
      prompt: "Hangout with friends",
      type: "describe",
      image: "images/hangout.jpg",

      hints: [
        {
          q: "How often do you like to hang out with friends?",
          a: [
            "I hang out with my friends from time to time.",
          ]
        },
        {
          q: "Who do you usually like to hang out with?",
          a: [
            "Usually I like to hang out with one of my close friends.",
          ]
        },
        {
          q: "Where do you like to go when you hang out with your friends?",
          a: [
            "Well, that depends. Sometimes we go to a restaurant to enjoy tasty food if someone knows a decent place.",
          ]
        },
        {
          q: "Do you like to go out with a big group or just few friends?",
          a: [
            "Well, if I had to choose between the two, I would go with hanging out with a big group people because I feel that I am an extrovert.",
          ]
        },
      ],

      vocab: [
        "hangout",
        "Thirsty Thursday",
      ],

      patterns: [
        "actually",
        "often", "usually", "recently", "seldom", "occasionally",
        "I enjoy ", "I like to",
        "I take part in ",
        "however", "on the other hand",
      ],

      expansions: [
        "How long have been the last hangout?",
        "What do you do for hangout?",
        "What's average time for one hangout?",
        "What day you usually hangout?",
      ],
      expansion: "",

      answers: [
        {
          keyword: "where",
          text: "Well, that depends. Sometimes we go to a restaurant to enjoy tasty food if someone knows a decent place. ",
        },
        {
          keyword: "when",
          text: "I always hang out with my classmate on thirsty Thursday!"
        },
        {
          keyword: "what",
          text: "Well, that depends. Sometimes we go to a restaurant to enjoy tasty food if someone knows a decent place."
        },
      ],
      answer: ""

    },




  // parents
  {
    category: "parents",
    prompt: "What did you say to your SO's parents",
    type: "describe",
    image: "images/meet-parents.jpg",
    cname: 'meet-parents',
    hints: [
      {
        q: "What kind of book is it?",
        a: [
          "fiction", "biography", "a collection of short stories"
        ]
      },
      {
        q: "What is it about?",
        a: [
        ]
      },
      {
        q: "What sort of people would enjoy it?",
        a: [
        ]
      },
      {
        q: "Why did you like it?",
        a: [
        ]
      },
    ]
  },

  // good book
  {
    category: "Good book",
    prompt: "Describe a book you have recently read",
    type: "describe",
    image: "images/book.jpg",
    cname: 'good-book',
    hints: [
      {
        q: "What kind of book is it?",
        a: [
          "fiction", "biography", "a collection of short stories"
        ]
      },
      {
        q: "What is it about?",
        a: [
        ]
      },
      {
        q: "What sort of people would enjoy it?",
        a: [
        ]
      },
      {
        q: "Why did you like it?",
        a: [
        ]
      },
    ]
  },

//free-time
  {
    category: "Free Time",
    cname: "free-time",
    prompt: "What do you usually do in your free time?",
    type: "describe",
    image: "images/free-time.jpg",

    hints: [
      {
        q: "What do you do?",
        a: [
          "go to the park",
          "play sports",
          "read a book",
          "exercise",
          "chat with friends",
          "go shopping",
          "photography"
        ]
      },
      {
        q: "Who do you do it with?",
        a: [
          "family",
          "by myself",
          "friends",
          "new people"
        ]
      },
      {
        q: "Where do you do it?",
        a: [
          "at the park",
          "in my apartment",
          "At the shopping mall",
          "At a cafe",
          "the museum"
        ]
      },
      {
        q: "How does it make you feel?",
        a: [
          "relaxed",
          "I can focus",
          "more productive"
        ]
      },
      {
        q: "Why do you do it?",
        a: [
          "to recharge",
          "it makes me feel better"
        ]
      }
    ],

    vocab: [
      "reading",
      "playing sports",
      "surfing the internet",
      "writing a blog",
      "chatting with friends"
    ],

    patterns: [
      "actually",
      "often", "usually", "recently", "seldom", "occasionally",
      "I enjoy ", "I like to",
      "I take part in ",
      "however", "on the other hand",
    ],

    expansions: [
      "How long have you been interested in these activities?",
      "Do you like to do theses activities alone or with family?",
      "Do you think people have enough free time?",
      "What are some constructive leisure time activities?",
      "Why are some activities more popular than others?",
      "How have leisure time activities changed in the last 10 years?",
      "What type of activity would you suggest to your kids?",
      "What types of leisure activities are popular in your country?",
      "Why it is important for people to have time for leisure activities?",
      "Why are some leisure activities more popular than others?",
      "What types of leisure activities may become more popular in the future?",
      "What type of leisure activities helpful for children? Why?",
      "Some people do not have any leisure activity. Why is that the case?",
    ],
    expansion: "",

    answers: [
      {
        keyword: "sport",
        text: "Well, I do quite a lot of sport actually. I go swimming twice a week. There's a very good pool just around the corner from my office. I swim for an hour and do about 40 lengths. I also cycle to work when I can. Apart from that, I do a lot of reading and photography."
      },
      {
        keyword: "surfing",
        text: "When I was younger, I did a lot of surfing. I used to go snowboarding quite often too in the winter. But I haven't been for a long time, although I might go this year with some friends. These days I go cycling when I can. At the weekends I like to cook and invite friends around for dinner. I'm a big fan of cooking programs, and often try to copy the recipes, but they don't always turn out very well."
      },
      {
        keyword: "kids",
        text: "I don't have a lot of time to myself now that I'm married with two young children. So, a lot of my free time is used taking my kids to their activities. For example, on Saturday morning, I have to take my son to his basketball games, and my daughter to football practice. Then I have to ship them off to parties or friends' houses. Two or three times a month, my wife and I go for a meal with friends, and once a month, we go the cinema when my parents look after the kids. There's a great little cinema that shows independent or foreign films just near where we live.",
      },
      {
        keyword: "tennis",
        text: "I have tennis lessons with a group of friends at the weekend. There are eight of us, four moms and dads and four kids. The idea was that the lessons would give us the chance to do something sporty with our children, and it's great. The teacher is really good and we all have a fantastic time. Plus, we're getting better at tennis. Best of all, after an hour of tennis, the kids go off to play, and we can have a drink and a chat. Now, that's my idea of playing sport. Apart from that, I also go out bowling once a month.",
      },
      {
        keyword: "golf",
        text: "I play golf at the weekend. I get up really early on Sunday and play for about five hours with some friends from work. While I'm out, my husband prepares lunch which is usually ready by the time I get back. Apart from that, I play online video games and read a lot. Also, I go for a drink after work every Friday with my work colleagues. There's a pub nearby and we usually stay there for a couple of hours, which is good fun.",
      }
    ],
    answer: ""

  },

  // food
  {
    category: "饮食",
    cname: "eating-time",
    prompt: "你愿意花多少时间在饮食方面?",
    type: "describe",
    image: "images/eating-time.jpg",

    hints: [
      {
        q: "你会做饭吗?",
        a: [
          "会",
          "不会",
        ]
      },
      {
        q: "若会，你一般多久会做一次饭?",
        a: [
          "每天",
          "隔天",
          "一周两三次",
          "偶尔",
        ]
      },
      {
        q: "你喜欢吃外卖还是自家做饭? 为什么",
        a: [
          "喜欢外卖，因为好吃",
          "喜欢吃家里（或自己）做的饭，健康符合自己的胃口，但是没时间",
          "喜欢外卖，因为方便",
        ]
      },
      {
        q: "假如你是姐姐，你有一个半月的假期和自己的一个妹妹在家里，三餐你选择去外面吃或者叫外卖，还是自己做?",
        a: [
          "叫外卖",
          "出去吃",
          "自己做"
        ]
      },
      {
        q: "若有时间给你做饭，你是否会选择做饭，还是把时间拿来其他事情，吃什么草草应付就算?",
        a: [
          "做饭其实也没那么无聊，吃到自己做的饭满满的开心",
          "不想浪费时间在做饭上"
        ]
      },
      {
        q: "你是否愿意给自己的爱人做饭，可能工作后会很累? 为什么",
        a: [
          "会的，和喜欢的人吃饭，自己也会更注重生活",
          "不会，都很累"
        ]
      },
      {
        q: "你觉得和喜欢的人（或者亲人）吃饭是件重要的事吗? 为什么",
        a: [
          "是的，因为吃饭是一种情感的维系",
          "吃饭而已，无所谓"
        ]
      }
    ],

    vocab: [
      "做饭",
      "责任",
      "饮食健康",
      "生活方式",
      "权衡"
    ],

    patterns: [
      "偶尔",
      "经常", "usually", "recently", "seldom", "occasionally",
      "享受 ", "我愿意",
      "尽量",
      "但是", "如果可以",
    ],

    expansions: [
      "你怎样看待女人担当起家庭事务?",
      "重复的每天早起买菜做饭，一天三餐（还有家务）占去大部分时间?",
      "重复的事情花费的时间是否有意义?",
      "这对家庭主妇来说是否是一种不公平? 牺牲了很多自己的自由时间，而且每一天重复的事情会累，并且并不是自己想做的事情",
      "对于在一起的人（喜欢的人、亲人），你愿意为他们付出多少时间?",
      "你是否关心身边的人?",
      "你是否是一个自我主义的人，只关心自己做的事?",
      "喜欢的事情为生活的中心，其他放在后一位?",
      "你会计划自己日常时间吗?",
      "一个人的生活会很有规律吗?",
      "多长时间运动一次?",
      "把一天的主要事情排位，你的排位是什么?",
    ],
    expansion: "",

    answers: [
      {
        keyword: "做饭",
        text: "我不太排斥做饭但也不喜欢，做饭要花去很多时间，也不喜欢出去买菜，一个人生活的时候，一次会买两天的菜，吃的比较清淡，隔两三天才会认真做一顿好吃的，来不及就跑出处买外卖吃."
      },
      {
        keyword: "他人",
        text: "我很懒，很少去在意别人怎么样，但是我很珍惜跟家人一起吃饭的时候，一家人坐在一起。可能是从小家里养成的习惯吧，等家人齐了，才会开饭。家里人并不善于表达，坐在一起吃饭是一种家庭非常重要的事情，不需要太多话语，很有家的归属感."
      },
      {
        keyword: "吃饭",
        text: "对于吃饭，个人的态度是很随便的。我很喜欢家里的饭菜，外面的东西不是吃不习惯，就是吃得很腻，营养谈不上。没有好吃的，渐渐对吃饭不怎么看重，每次到了饿得受不了，就跑去吃，但吃不了多少就会吃不下去。不是自己不舍得花钱吃饭，是花钱了却没有好吃的饭.",
      },
      {
        keyword: "家庭",
        text: "自己一个人生活之后，才知道煮饭时间多么繁琐的事，而且人每天都要吃饭。我不是很喜欢煮饭做家务，所以一开始就下定决心以后要找一个家庭主男，慢慢地学会一个人生活了，感觉如果两个人可以相互帮忙，成家立业也是可以的。一个靠吃外卖的婚姻，感觉很糟糕。虽说不喜欢在吃饭上面花费太多的时间，但是两个人来做，配合得开心的话，也是可以的。个人也不喜欢外卖，也不能不劳而获.",
      },
      {
        keyword: "生活态度",
        text: "比较注重生活的质量，所以不喜欢在无聊的事情上花费太多的时间，所以自己比较自我主义。但也会空出一点时间出来和别人一起吃顿饭，看看电视。比较习惯了独处，不过有时还是需要外部的平衡，不要自己的一些不好的习惯会造成问题，例如偏食、营养不良，家人在的话会饮食会均衡一些。老是不按时吃饭，舍友出去吃饭的时候会跟上，不然老是会饿到没力气才会去找吃的，也离不开社交等等.",
      }
    ],
    answer: ""

  },

]

console.log("topics loaded")

// without router
function getCname() {
  // let cname = this.$route.query.cname
  let uri = window.location.href.split('?')
  let params = uri.slice(1)
  let param = params.pop()
  if (!param) return
  let cname = param.split('cname=').pop()
  return cname
}

function init() {
  let cname = getCname()
  log('cname', cname)
  let topic = topics.filter( t => t.cname && t.cname === cname).pop()
  log('filter.topic', topic)
  if (!topic) {
    topic = _.sample(topics, 1).pop()
    log('pick random topic', topic.cname)
  }

  topic.questions = _.sample(topic.questions, 3) || []
  topic.answer = _.sample(topic.answers, 1).pop() || {}

  let app = new Vue({
    el: '#app',
    data: {
      topic: topic
    },
    methods: {
      expand() {
        this.topic.expansion = _.sample(topic.expansions, 1).pop() || {}
      },
      pickAnswer(idx) {
        // debugger
        let answer = this.topic.answers[idx]
        this.topic.answer = answer
        console.log('pickAnswer', idx, answer)
      }
    }

  })
  // debugger

  app.expand()

  console.log("topic", topic)
  console.log("app", app)
  console.log("topic.vocab", topic.vocab)
}

function testFile() {
  fetch('::/data/topics.md')
    .then(response => response.text())
    .then(text => console.log(text))
}

// testFile()
init()
