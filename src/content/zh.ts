import type { Content } from './types';

const zh: Content = {
  lang: 'zh',
  htmlLang: 'zh-Hans',
  langLabel: '中文',
  title: '蔡也 — 行进中的生活',
  description:
    '蔡也（Emerson）的独立作品集：精选项目、田野笔记与经历——在文化之间移动，收集视角，把观察变成想法。',
  nav: {
    work: '作品',
    journal: '手记',
    experience: '经历',
    about: '关于',
    contact: '联系',
  },
  a11y: {
    skip: '跳到正文',
    menu: '菜单',
    language: '语言',
  },
  hero: {
    name: '蔡也',
    nameMeta: 'CAI YE — 深圳 / 下一站待定',
    label: '独立作品集 / 2026',
    headline: '行进中的生活。',
    sub: '在不同文化之间移动，收集看待事物的方式，再把观察慢慢变成想法。',
    meta: ['沟通', '创意项目', '日常观察'],
    scroll: '向下',
  },
  work: {
    label: '精选作品',
    intro: '两个项目，体量不同——一个是从零做完整的商业概念，另一个就是你正在读的这一页。',
    delta: {
      num: '01',
      title: 'Delta — 好东西，不该停在原地',
      categories: ['品牌概念', '循环商业', '数字体验'],
      year: '2026',
      intro:
        'Delta 借助策展选品、二次流转与回流激励，探讨人与「拥有」之间另一种关系。目前是一个独立概念，包含品牌识别、初步商业模型与数字原型。',
      image: '/images/delta/delta-cover.jpg',
      imageAlt:
        'Delta 概念站首页：一把旧椅子上放着二手相机、一摞书和一条叠好的毯子，主标语写着「好东西，不该停在原地」。', 
      imageCaption: '概念站点 — 演示数据与概念图',
      link: { href: '/zh/work/delta/', label: '查看项目' },
    },
    site: {
      num: '02',
      title: '一个三语的网站',
      categories: ['数字沟通', 'AI 辅助开发', '协作'],
      year: '2026',
      intro:
        '这个作品集最初是一个英、中、法三语的简历网站——从规划、写作到搭建全部从零开始，后来扩展出粤语版本。这项工作一半是编辑，一半是技术：决定说什么、用哪种语言说、按什么顺序说。',
      points: [
        '三个语言版本的信息架构，后扩展至四个',
        '跨屏幕尺寸设计并测试的响应式布局，基于 Astro 与 Cloudflare Pages 构建',
        '统筹七人团队，让每位成员都上线了自己的简历网站',
      ],
      image: '/images/site-cover-zh.jpg',
      imageMobile: '/images/site-mobile-zh.jpg',
      imageAlt: '本站首页：暖白底色上的大号衬线标题，以及作品、手记与经历的编辑式网格排版。',
      imageCaption: 'emerson-portfolio.pages.dev — 桌面端与移动端',
      link: { href: 'https://emerson-portfolio.pages.dev/', label: '访问网站', external: true },
    },
  },
  journal: {
    label: '田野手记',
    intro: '旅行、工作，和那些值得记下来的小事。',
    labels: {
      entry: '篇目',
      forthcoming: '整理中',
      read: '阅读',
      back: '田野手记',
      all: '全部手记',
      contents: '目录',
      tags: '标签',
    },
    entries: [
      {
        num: '01',
        title: '一个人走完的路',
        place: '新西兰 · 汤加里罗',
        tags: ['旅行', '独行'],
        description: '独自走完二十公里的越山步道——以及后来南北两岛上那些更安静的路。',
        slug: 'the-road-i-walked-alone',
        image: '/images/tongariro.jpg',
        imageAlt: '新西兰汤加里罗越山步道上的火山山脊。',
        aspect: 'portrait',
      },
      {
        num: '02',
        title: '人们带回家的东西',
        place: '新西兰 · 皇后镇',
        tags: ['文化', '观察'],
        description: '站在纪念品店的柜台后面，看来自五十多个国家的旅行者，如何决定什么值得带回家。',
        slug: 'what-people-take-home',
      },
      {
        num: '03',
        title: '陌生的去处',
        place: '美国',
        tags: ['旅居'],
        description: '四个州、六份工作，和一辆用工作签证买下的车——关于抵达与安顿的笔记。',
        slug: 'somewhere-unfamiliar',
      },
      {
        num: '04',
        title: '在移动中学习',
        place: '抱石攀岩',
        tags: ['运动', '练习'],
        description: '笔记整理中。',
        slug: null,
      },
    ],
    photos: [
      {
        image: '/images/wmrt-team.jpg',
        alt: 'WMRT 深圳站，与法国帆船队在最后一场比赛后的合影。',
        caption: 'WMRT 深圳',
        place: '与法国队 · 赛后',
        aspect: 'landscape',
      },
      {
        image: '/images/slope-point.jpg',
        alt: '新西兰 Slope Point 被风吹出形状的树。',
        caption: 'Slope Point',
        place: '南岛最南端',
        aspect: 'portrait',
      },
      {
        image: '/images/timaru-sunrise.jpg',
        alt: '南岛东海岸 Timaru 的海上日出。',
        caption: 'Timaru 日出',
        place: '南岛 · 东海岸',
        aspect: 'landscape',
      },
      {
        image: '/images/friends.jpg',
        alt: '新西兰北岛，下班后与同事在户外的合影。',
        caption: '北岛 · 下班后',
        place: '与同事',
        aspect: 'portrait',
      },
    ],
  },
  experience: {
    label: '经历',
    intro: '选取的经历与项目，按相关性排列。',
    items: [
      {
        role: '活动策划与统筹',
        org: '南山深港青年交流',
        date: '2026.10 结束',
        place: '深圳 · 活动',
        description:
          '与同伴共同策划面向 24 名深港青年的四站文化教育项目，统筹小组活动、互动任务与现场执行。',
      },
      {
        role: '随队翻译（志愿者）',
        org: '世界帆船对抗巡回赛 WMRT · 深圳',
        date: '2026.01',
        place: '深圳 · 赛事',
        description:
          '在为期八天的国际帆船赛中为法国队提供全程沟通支持，覆盖技术检查、设备交接与赛事运营各环节。获评 WMRT 优秀志愿者。',
      },
      {
        role: '海外工作经历',
        org: '零售与餐饮',
        date: '2023.12 – 2025.09',
        place: '美国 & 新西兰',
        description:
          '在美国与新西兰从事零售与餐饮的一线顾客岗位，与不同文化背景的顾客沟通，并适应不同的工作环境。',
      },
      {
        role: '晚辅老师',
        org: '励风教育（深圳）有限公司',
        date: '2026.06 – 2026.08',
        place: '深圳 · 兼职',
        description:
          '为深圳与香港的中学生提供英文课业辅导，按不同学习需求调整讲解方式。',
      },
    ],
  },
  about: {
    label: '关于',
    heading: '对人好奇，对陌生不慌。',
    paragraphs: [
      '我在深圳职业技术大学读应用法语，视对话的对象，在普通话、英语、粤语和法语之间来回切换。',
      '我大部分的所学来自工作：美国的超市、新西兰的雪糕柜与纪念品店、深圳的帆船赛、晚间的课堂。行业不同，问题相同——如何让对方听懂你，你又如何听懂对方。',
      '我对品牌、以及人们为什么购买、留存与放手这件事很感兴趣。Delta 由此而来，这个网站也是——由我自己设计搭建，借助 AI 工具完成。',
    ],
    traits: ['学以致用的行动者', '跨文化沟通者', '问题解决者'],
    image: '/images/slope-point.jpg',
    imageAlt: '新西兰南岛最南端 Slope Point 被风吹出形状的树。',
    imageCaption: 'Slope Point · 新西兰',
    beyondLabel: '工作之外',
    beyondIntro: '一周里剩下时间的去处。',
    beyond: [
      { title: '旅行', text: '长距离的步行与慢节奏的日子；一个地方只有走路才看得见的部分。' },
      { title: '攀岩', text: '以抱石为主——先用身体解决的问题，头脑慢一点才跟上。' },
      { title: '音乐', text: '一直在放，很少谈论。是以上所有事情的背景音。' },
      { title: '摄影', text: '日常照片：墙上的光，和桌上剩下的东西。' },
    ],
  },
  contact: {
    label: '联系',
    heading: '保持联络。',
    email: 'emerson.the.k@gmail.com',
    github: 'https://github.com/emersoncaiye',
    githubLabel: 'GitHub',
    note: '欢迎工作机会、合作，或者聊聊器物、城市与语言。',
  },
  articles: {
    'the-road-i-walked-alone': {
      slug: 'the-road-i-walked-alone',
      title: '一个人走完的路',
      place: '新西兰 · 汤加里罗越山步道',
      meta: '汤加里罗 · 20 公里 · 逾千米落差',
      tags: ['旅行', '独行'],
      intro:
        '独自走过二十公里的火山高原——不为证明什么，只是那一周里，这样的安排刚好让这趟步行成行。',
      image: '/images/tongariro.jpg',
      imageAlt: '阴天之下，汤加里罗越山步道上的火山山脊。',
      body: [
        '我一个人走完了汤加里罗越山步道：二十公里，爬升与下降都超过一千米。独行不是一种姿态，只是那一周里，这样的安排刚好让这趟步行成行。',
        '第一个小时人很多。所有人同一时间朝同一方向出发，有一段路像是排着队看风景。之后步道开始爬升，人群散开，到垭口附近，陪伴你的基本只剩自己的呼吸。',
        '我记得最清楚的不是山顶，而是中段：那段长而开阔的路，路标只是一根根立柱，风把声音都带走。在那里你不会再跟自己讨价还价——数步子，喝水，继续走。',
        '下山的路变成松散的碎石，膝盖开始抗议。同样的风景从另一侧再看一遍，才发现这几乎是另一趟步行。',
        {
          image: '/images/timaru-sunrise.jpg',
          alt: '南岛东海岸 Timaru 的海上日出。',
          caption: '南岛另一处：Timaru 日出，东海岸。',
        },
        '后来我常想起那次步行——不是当作证明，而是当作一种丈量难度的方法。当一件事显得不可能，我会想起：再长的路也是路，唯一的技巧就是一步一步往前走。',
      ],
    },
    'what-people-take-home': {
      slug: 'what-people-take-home',
      title: '人们带回家的东西',
      place: '新西兰 · 皇后镇',
      meta: '一个纪念品柜台 · 一个季节',
      tags: ['文化', '观察'],
      intro:
        '一个季度，在皇后镇的纪念品柜台后面。大部分是重复，偶尔刚好看见人们决定什么值得带回家。',
      body: [
        '有段时间我在皇后镇的一家纪念品店工作。工作是折叠、标价、回答同样的问题。有意思的部分发生在柜台另一侧。',
        '最贵的东西往往卖得最慢。人们会在漂亮而无用的东西面前犹豫很久，最后买下一个塞得进行李箱的小物件：一枚冰箱贴、一条茶巾、一张明信片——拍下那个地方他们早就拍过照。',
        '来自五十多个国家的旅行者经过柜台。有人想买「看起来像新西兰」的东西，有人想买「看起来我去过新西兰」的东西。这是两种不同的购买。',
        '我从那里带走的是对「品味」的怀疑——它不是固定不变的，而是随情境改变。同一个人，为别人挑礼物会花上一个小时，轮到自己时只用了其中很小的一部分。我们留下的东西，与其说关于物品本身，不如说关于我们希望它承载的故事。',
        '我至今仍然喜欢逛店。不为买东西——为了看人们如何决定，什么值得占他们行李里那一点重量。',
      ],
    },
    'somewhere-unfamiliar': {
      slug: 'somewhere-unfamiliar',
      title: '陌生的去处',
      place: '美国',
      meta: '四个州 · 六份工作 · 2023 年 12 月起',
      tags: ['旅居'],
      intro: '初到新国家的那几周是由文件组成的。一些关于抵达陌生之地、并慢慢把它安顿好的笔记。',
      body: [
        '初到新国家的那几周是由文件组成的：办银行账户要地址，租房子要租约，租约要工作，工作要电话号码。你把顺序弄错好几遍，直到某个下午，整个链条忽然通了。',
        '我学会了用一种还没学好的语言买车，也学会了在副驾座位上摊开词典读合同。当时并不觉得勇敢——只觉得像办事，一整天换来一张不敢弄丢的收据。',
        '我记得的都是些小而不好拍的时刻：在超市货架间终于听懂了一个玩笑；公交车司机认出了我；第一个不设闹钟入睡的夜晚。',
        '旅居没有让我变得无畏。它只是让「陌生」变小了——变成一类可以接近、可以开口问、最终可以处理的事情。人们看到的所谓自信，多数不过是一份更长的清单：哪些事曾出错，后来又被修好。',
        '四个州，六份工作，一辆很旧的车。我不太愿意把它称为冒险。那是一段生活——用第二语言进行的、连同一切琐碎事务一起的普通生活。',
      ],
    },
  },
  deltaCase: {
    eyebrow: '精选作品 / 01',
    title: 'Delta — 好东西，不该停在原地',
    standfirst: '一个关于策展型循环商业的品牌概念：让物品拥有可查证的过去，和更长的余生。',
    meta: [
      { label: '角色', value: '概念、品牌、PRD' },
      { label: '年份', value: '2026' },
      { label: '性质', value: '独立概念' },
    ],
    intro: [
      'Delta 始于一个关于「拥有」的问题。多数二手平台为价格与规模优化，把物品压扁成一条列表：没有来历，没有成色证据，也没有留下它的理由。这个概念从相反的方向出发——更少但更好的物品，诚实地描述，并被设计成持续流转。',
      '它是一个独立概念，不是一家运营中的公司。站点是带演示数据的工作原型；这里不声称任何销售、客户或商业成果。',
    ],
    modelTitle: '审美 · 相处 · 流转',
    model: [
      { key: 'Taste · 审美', text: '以策展代替搜索——对什么值得拥有，持有一个明确的观点。' },
      { key: 'Hold · 相处', text: '拥有是一段使用关系，而不是终点。' },
      { key: 'Transfer · 流转', text: '物品回流、转售或被传递；档案记录它走过的路。' },
    ],
    notesTitle: '项目笔记',
    notes: [
      {
        title: '起点与问题',
        text: '二手市场擅长价格，欠缺信任。成色难以核验，而一件物品的故事在它变成列表的那一刻就消失了。Delta 把「档案」当作产品的一部分。',
      },
      {
        title: '品牌定位',
        text: '「好东西，不该停在原地。」策展精选的旧物，拥有更长的生命——重品味而非捡漏，重克制而非催促。',
      },
      {
        title: '循环商业模型',
        text: '三方模型：审美策展、分级回流积分，以及将二次销售利润的固定份额注入公益基金。',
      },
      {
        title: '回流激励',
        text: '分级回流积分机制，邀请持有者把物品送回流通，而不是让它闲置在家。',
      },
      {
        title: '公益构成',
        text: '二次销售利润的固定份额注入慈善基金——也是「delta」这个名字的含义：从循环里流出的那一小部分增量。',
      },
      {
        title: '商业考量',
        text: '寄售是拟定的运营模式。每件上架物品应提供四类档案——主图、材质细节、成色证据与使用场景——不以滤镜制造旧感。定价、鉴定与结算仍是未解决的问题。',
      },
      {
        title: '数字原型',
        text: '一个中英双语的概念站点，含 Shop、The Edit、Consign、Archive 与 Flow Guide 板块，并附完整的 PRD。借助 AI Agent 加速概念推演；项目已在 GitHub 开源。',
      },
      {
        title: '社交媒体策略',
        text: '不按品类做目录，而按场景组织内容——搬家时需要的物件、日常中的非常之物、值得留下的东西。用图像、音乐与文字的碎片，先建立品牌世界，再谈目录。',
      },
    ],
    prototypeTitle: '原型',
    prototypeText: ['原型已上线，并明确标注为概念作品；商品数据为演示数据，图片为概念展示图。'],
    links: [
      { label: '概念站点', value: 'that-program.pages.dev', href: 'https://that-program.pages.dev/' },
      { label: '源码与 PRD', value: 'github.com/emersoncaiye/Delta', href: 'https://github.com/emersoncaiye/Delta' },
    ],
    disclaimer: '概念作品。不声称任何商业成果、客户或收入。',
    back: '返回作品',
    gallery: [
      {
        image: '/images/delta/delta-cover.jpg',
        alt: 'Delta 首页：旧椅子上放着二手相机、书与毯子，主标语「好东西，不该停在原地」。',
        caption: '封面 — 概念展示图',
      },
      {
        image: '/images/delta/delta-shop.jpg',
        alt: 'Delta 精选板块：四件策展演示物品，带编号、价格与成色档案的设计意图。',
        caption: 'Shop — 策展选品 · 演示数据',
      },
      {
        image: '/images/delta/delta-edit.jpg',
        alt: 'Delta 专题板块：「你可能不需要更多东西，你需要更好的选择」，以及三个按场景划分的专题。',
        caption: 'The Edit — 按场景，而非品类',
      },
      {
        image: '/images/delta/delta-flow.jpg',
        alt: 'Delta 流程指南页，说明寄售与回流流程。',
        caption: 'Flow Guide — 寄售与回流',
      },
    ],
  },
  footer: {
    rights: '© 2026 蔡也',
    colophon: '字体 Newsreader、Noto Serif SC 与 Inter · Astro 构建 · Cloudflare Pages 托管',
  },
};

export default zh;
