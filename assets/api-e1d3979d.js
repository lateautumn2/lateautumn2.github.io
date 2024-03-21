import{_ as r}from"./ValaxyMain.vue_vue_type_style_index_0_lang-3b2ab2f2.js";import{_ as y,u as i,c as F,w as o,p as d,o as u,f as m,a as s,b as l,d as p,r as a,e as D}from"./app-3b40f6e0.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-a8779e39.js";import"./YunCard.vue_vue_type_script_setup_true_lang-54b895d4.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-372975b2.js";import"./index-463abdac.js";const cs=JSON.parse('{"title":"vue组件","description":"","frontmatter":{"layout":null,"title":"vue组件","date":"2021-09-04T00:00:00.000Z","updated":"2021-09-04T00:00:00.000Z","categories":"笔记","tags":["vue"]},"headers":[{"level":2,"title":"组件通信","slug":"组件通信","link":"#组件通信","children":[]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"_钩子函数","slug":"钩子函数","link":"#钩子函数","children":[]}]}],"relativePath":"pages/posts/api.md","path":"/home/runner/work/lateautumn2.github.io/lateautumn2.github.io/pages/posts/api.md","lastUpdated":1711002759000}'),e=JSON.parse('{"title":"vue组件","description":"","frontmatter":{"layout":null,"title":"vue组件","date":"2021-09-04T00:00:00.000Z","updated":"2021-09-04T00:00:00.000Z","categories":"笔记","tags":["vue"]},"headers":[{"level":2,"title":"组件通信","slug":"组件通信","link":"#组件通信","children":[]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"_钩子函数","slug":"钩子函数","link":"#钩子函数","children":[]}]}],"relativePath":"pages/posts/api.md","path":"/home/runner/work/lateautumn2.github.io/lateautumn2.github.io/pages/posts/api.md","lastUpdated":1711002759000}'),A={name:"pages/posts/api.md",data(){return{data:e,frontmatter:e.frontmatter,$frontmatter:e.frontmatter}},setup(){const n=i();n.meta.frontmatter=Object.assign(n.meta.frontmatter,e.frontmatter),d("pageData",e)}},h=s("p",null,"组件化:封装的思想,把页面上可重用的部分,封装为组件,从而方便项目的开发和维护 一个页面,可以拆分成一个个组件,一个组件就是一个整体,每个组件都可以有自己独立的结构样式和行为",-1),B={id:"组件通信",tabindex:"-1"},C=s("p",null,"每个组件的变量和值都是独立的,在进行值传递时,则需要用到组件通信",-1),v=s("p",null,"1.父传子",-1),g=s("p",null,"示例",-1),f=s("p",null,"创建一个父文件,father.vue",-1),b=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"<!-- ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"      需求: 每次组件显示不同的数据信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"      步骤(口诀):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"        1. 子组件 - props - 变量 (准备接收)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"        2. 父组件 - 传值进去")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"     -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"Product"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"好吃的口水鸡"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"price"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"50"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"intro"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"开业大酬宾, 全场8折"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"Product"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"Product"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"好可爱的可爱多"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"price"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"20"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"intro"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"老板不在家, 全场1折"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"Product"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"Product"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"title"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"好贵的北京烤鸭"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"price"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"290"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":intro"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"str"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"Product"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 引入子组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," Product "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./components/MyProduct'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"data"),s("span",{style:{color:"#E1E4E8"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      str: "),s("span",{style:{color:"#9ECBFF"}},'"好贵啊, 快来啊, 好吃"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// 3. 注册组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// Product: Product // key和value变量名同名 - 简写")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Product")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"<!-- ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"      需求: 每次组件显示不同的数据信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"      步骤(口诀):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"        1. 子组件 - props - 变量 (准备接收)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"        2. 父组件 - 传值进去")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"     -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"Product"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"title"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"好吃的口水鸡"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"price"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"50"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"intro"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"开业大酬宾, 全场8折"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"Product"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"Product"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"title"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"好可爱的可爱多"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"price"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"20"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"intro"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"老板不在家, 全场1折"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"Product"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"Product"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"title"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"好贵的北京烤鸭"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"price"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"290"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":intro"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"str"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"Product"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 引入子组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," Product "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./components/MyProduct'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"data"),s("span",{style:{color:"#24292E"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      str: "),s("span",{style:{color:"#032F62"}},'"好贵啊, 快来啊, 好吃"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// 3. 注册组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// Product: Product // key和value变量名同名 - 简写")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Product")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1),_=s("ul",null,[s("li",null,"创建一个字文件MyProduct")],-1),k=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">标题: {{ title }}</"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">价格: {{ price }}元</"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">{{ intro }}</"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//通过props属性定义接收的key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  props: ["),s("span",{style:{color:"#9ECBFF"}},"'title'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'price'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'intro'"),s("span",{style:{color:"#E1E4E8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">标题: {{ title }}</"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">价格: {{ price }}元</"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">{{ intro }}</"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//通过props属性定义接收的key")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  props: ["),s("span",{style:{color:"#032F62"}},"'title'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'price'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'intro'"),s("span",{style:{color:"#24292E"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1),P={id:"单向数据流",tabindex:"-1"},x=s("blockquote",null,[s("p",null,"从父组件传至子组件的数据,不能被子组件所修改,遵循单向数据流的原则,子组件只有只读的属性")],-1),$=s("p",null,"2.子传父",-1),M=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"my-product"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">标题: {{ title }}</"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">价格: {{ price }}元</"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">{{ intro }}</"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"subFn"'),s("span",{style:{color:"#E1E4E8"}},">宝刀-砍1元</"),s("span",{style:{color:"#85E89D"}},"button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," eventBus "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'../EventBus'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  props: ["),s("span",{style:{color:"#9ECBFF"}},"'index'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'title'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'price'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'intro'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"subFn"),s("span",{style:{color:"#E1E4E8"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"//在子组件中通过this.$emit方法传值给父组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"//第一个为父组件接收时使用的方法名,第二个为需要传递的值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"$emit"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'subprice'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".index, "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#6A737D"}},"// 子向父")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      eventBus."),s("span",{style:{color:"#B392F0"}},"$emit"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"send"'),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".index, "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#6A737D"}},"// 跨组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"my-product"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">标题: {{ title }}</"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">价格: {{ price }}元</"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">{{ intro }}</"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"subFn"'),s("span",{style:{color:"#24292E"}},">宝刀-砍1元</"),s("span",{style:{color:"#22863A"}},"button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," eventBus "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'../EventBus'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  props: ["),s("span",{style:{color:"#032F62"}},"'index'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'title'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'price'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'intro'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"subFn"),s("span",{style:{color:"#24292E"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"//在子组件中通过this.$emit方法传值给父组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"//第一个为父组件接收时使用的方法名,第二个为需要传递的值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"$emit"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'subprice'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".index, "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#6A737D"}},"// 子向父")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      eventBus."),s("span",{style:{color:"#6F42C1"}},"$emit"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"send"'),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".index, "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#6A737D"}},"// 跨组件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1),j=s("p",null,"接收",-1),q=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"template>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <!-- 目标: 子传父 -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},'    <!-- 1. 父组件, @自定义事件名="父methods函数" -->')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},'    <MyProduct v-for="(obj, ind) in list" :key="obj.id"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},'    :title="obj.proname"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},'    :price="obj.proprice"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},'    :intro="obj.info"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},'    :index="ind"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},'    @subprice="fn"  //key为子组件设置的方法名,value为函数名')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ></MyProduct>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," MyProduct "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./components/MyProduct_sub'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"data"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"........."),s("span",{style:{color:"#E1E4E8"}},".")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    MyProduct")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"//形参接收传过来的实参")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"inde"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"price"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 逻辑代码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".list[inde].proprice "),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"&&"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".list[inde].proprice "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".list[inde].proprice "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," price)."),s("span",{style:{color:"#B392F0"}},"toFixed"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"template>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <!-- 目标: 子传父 -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},'    <!-- 1. 父组件, @自定义事件名="父methods函数" -->')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},'    <MyProduct v-for="(obj, ind) in list" :key="obj.id"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},'    :title="obj.proname"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},'    :price="obj.proprice"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},'    :intro="obj.info"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},'    :index="ind"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},'    @subprice="fn"  //key为子组件设置的方法名,value为函数名')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ></MyProduct>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," MyProduct "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./components/MyProduct_sub'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"data"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"........."),s("span",{style:{color:"#24292E"}},".")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    MyProduct")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"//形参接收传过来的实参")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"inde"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"price"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 逻辑代码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".list[inde].proprice "),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"&&"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".list[inde].proprice "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".list[inde].proprice "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," price)."),s("span",{style:{color:"#6F42C1"}},"toFixed"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1),S=s("p",null,"3.子与子互传",-1),V=s("blockquote",null,[s("p",null,"目标: 常用于跨组件通信时使用")],-1),w=s("ul",null,[s("li",null,[s("p",null,"创建空白vue对象EventBus.vue-监听事件"),s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"import Vue from 'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"//导出空白对象")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"export default new Vue()")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"import Vue from 'vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"//导出空白对象")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"export default new Vue()")])])]),s("button",{class:"collapse"})])]),s("li",null,[s("p",null,"组件1传值")])],-1),N=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"my-product"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">标题: {{ title }}</"),s("span",{style:{color:"#85E89D"}},"h3"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">价格: {{ price }}元</"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">{{ intro }}</"),s("span",{style:{color:"#85E89D"}},"p"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"subFn"'),s("span",{style:{color:"#E1E4E8"}},">宝刀-砍1元</"),s("span",{style:{color:"#85E89D"}},"button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//导入空白vue对象,监听事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," eventBus "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'../EventBus'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  props: ["),s("span",{style:{color:"#9ECBFF"}},"'index'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'title'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'price'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'intro'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"subFn"),s("span",{style:{color:"#E1E4E8"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"$emit"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'subprice'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".index, "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},") ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"my-product"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">标题: {{ title }}</"),s("span",{style:{color:"#22863A"}},"h3"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">价格: {{ price }}元</"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">{{ intro }}</"),s("span",{style:{color:"#22863A"}},"p"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"subFn"'),s("span",{style:{color:"#24292E"}},">宝刀-砍1元</"),s("span",{style:{color:"#22863A"}},"button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//导入空白vue对象,监听事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," eventBus "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'../EventBus'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  props: ["),s("span",{style:{color:"#032F62"}},"'index'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'title'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'price'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'intro'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"subFn"),s("span",{style:{color:"#24292E"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"$emit"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'subprice'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".index, "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},") ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1),T=s("ul",null,[s("li",null,[s("p",null,"组件2接收"),s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"ul"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"my-product"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"(item, index) in arr"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"index"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">{{ item.proname }}</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">{{ item.proprice }}</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"li"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"ul"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 目标: 跨组件传值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 引入空白vue对象(EventBus)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 接收方 - $on监听事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," eventBus "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'"../EventBus"'),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  props: ["),s("span",{style:{color:"#9ECBFF"}},'"arr"'),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// 3. 组件创建完毕, 监听send事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"created"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"//使用eventBus.$on接收传值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    eventBus."),s("span",{style:{color:"#B392F0"}},"$on"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"send"'),s("span",{style:{color:"#E1E4E8"}},", ("),s("span",{style:{color:"#FFAB70"}},"index"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"price"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(index,price)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"ul"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"my-product"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"(item, index) in arr"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":key"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"index"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">{{ item.proname }}</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">{{ item.proprice }}</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"li"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"ul"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 目标: 跨组件传值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 1. 引入空白vue对象(EventBus)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"// 2. 接收方 - $on监听事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," eventBus "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"../EventBus"'),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  props: ["),s("span",{style:{color:"#032F62"}},'"arr"'),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// 3. 组件创建完毕, 监听send事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"created"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"//使用eventBus.$on接收传值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    eventBus."),s("span",{style:{color:"#6F42C1"}},"$on"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"send"'),s("span",{style:{color:"#24292E"}},", ("),s("span",{style:{color:"#E36209"}},"index"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"price"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(index,price)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})])])],-1),U={id:"生命周期",tabindex:"-1"},Z=s("blockquote",null,[s("p",null,"组件从创建到销毁的整个过程就是生命周期")],-1),O={id:"钩子函数",tabindex:"-1"},J=s("blockquote",null,[s("p",null,[l("目标: "),s("strong",null,"Vue"),l(" 框架内置函数，随着组件的生命周期阶段，自动执行")])],-1),L=s("p",null,"作用: 特定的时间点，执行特定的操作",-1),R=s("p",null,"场景: 组件创建完毕后，可以在created 生命周期函数中发起Ajax 请求，从而初始化 data 数据",-1),z=s("p",null,"分类: 4大阶段8个方法",-1),G=s("ul",null,[s("li",null,"初始化"),s("li",null,"挂载"),s("li",null,"更新"),s("li",null,"销毁")],-1),H=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"<!-- vue生命周期 -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"h1"),s("span",{style:{color:"#E1E4E8"}},">{{msg}}</"),s("span",{style:{color:"#85E89D"}},"h1"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"complte"'),s("span",{style:{color:"#E1E4E8"}},">数据更新</"),s("span",{style:{color:"#85E89D"}},"button"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"data"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    msg:"),s("span",{style:{color:"#9ECBFF"}},"'hello,vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"complte"),s("span",{style:{color:"#E1E4E8"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".msg "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'hello.world'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"$destroy"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//初始化函数及事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"beforeCreate"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'初始化函数及事件,无法打印出数据'"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".msg)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//初始化数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"created"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'初始化数据,可以打印出数据'"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".msg)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//挂载前事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"beforeMount"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"   console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'虚拟dom挂载成真实dom前,无法打印出dom元素'"),s("span",{style:{color:"#E1E4E8"}},",document."),s("span",{style:{color:"#B392F0"}},"querySelector"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'h1'"),s("span",{style:{color:"#E1E4E8"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//挂载后事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"mounted"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"   console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'虚拟dom挂载成真实dom,可以打印出dom元素'"),s("span",{style:{color:"#E1E4E8"}},",document."),s("span",{style:{color:"#B392F0"}},"querySelector"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'h1'"),s("span",{style:{color:"#E1E4E8"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//dom数据更新前事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"beforeUpdate"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"   console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'打印出数据更新之前的dom元素'"),s("span",{style:{color:"#E1E4E8"}},",document."),s("span",{style:{color:"#B392F0"}},"querySelector"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'h1'"),s("span",{style:{color:"#E1E4E8"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"updated"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'打印出数据更新之后的dom元素'"),s("span",{style:{color:"#E1E4E8"}},",document."),s("span",{style:{color:"#B392F0"}},"querySelector"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'h1'"),s("span",{style:{color:"#E1E4E8"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//实例销毁前事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"beforeDestroy"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"   console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'移除所有组件'"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//实例销毁后事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"destroyed"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"   console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'实例销毁后事件,更新事件无法打印'"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"<!-- vue生命周期 -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"h1"),s("span",{style:{color:"#24292E"}},">{{msg}}</"),s("span",{style:{color:"#22863A"}},"h1"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"complte"'),s("span",{style:{color:"#24292E"}},">数据更新</"),s("span",{style:{color:"#22863A"}},"button"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"data"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    msg:"),s("span",{style:{color:"#032F62"}},"'hello,vue'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"methods: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"complte"),s("span",{style:{color:"#24292E"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".msg "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'hello.world'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"$destroy"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//初始化函数及事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"beforeCreate"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'初始化函数及事件,无法打印出数据'"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".msg)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//初始化数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"created"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'初始化数据,可以打印出数据'"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".msg)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//挂载前事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"beforeMount"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"   console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'虚拟dom挂载成真实dom前,无法打印出dom元素'"),s("span",{style:{color:"#24292E"}},",document."),s("span",{style:{color:"#6F42C1"}},"querySelector"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'h1'"),s("span",{style:{color:"#24292E"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//挂载后事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"mounted"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"   console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'虚拟dom挂载成真实dom,可以打印出dom元素'"),s("span",{style:{color:"#24292E"}},",document."),s("span",{style:{color:"#6F42C1"}},"querySelector"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'h1'"),s("span",{style:{color:"#24292E"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//dom数据更新前事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"beforeUpdate"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"   console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'打印出数据更新之前的dom元素'"),s("span",{style:{color:"#24292E"}},",document."),s("span",{style:{color:"#6F42C1"}},"querySelector"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'h1'"),s("span",{style:{color:"#24292E"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"updated"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'打印出数据更新之后的dom元素'"),s("span",{style:{color:"#24292E"}},",document."),s("span",{style:{color:"#6F42C1"}},"querySelector"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'h1'"),s("span",{style:{color:"#24292E"}},"))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//实例销毁前事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"beforeDestroy"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"   console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'移除所有组件'"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"//实例销毁后事件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"destroyed"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"   console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'实例销毁后事件,更新事件无法打印'"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1),I=s("p",null,[l("​"),s("br"),l(" ​")],-1);function K(n,Q,W,X,t,Y){const c=D,E=r;return u(),F(E,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":o(()=>[h,m(" more "),s("h2",B,[l("组件通信 "),p(c,{class:"header-anchor",href:"#组件通信","aria-label":'Permalink to "组件通信"'},{default:o(()=>[l("​")]),_:1})]),C,v,s("ul",null,[s("li",null,[g,f,b,_,k,s("h4",P,[l("单向数据流 "),p(c,{class:"header-anchor",href:"#单向数据流","aria-label":'Permalink to "单向数据流"'},{default:o(()=>[l("​")]),_:1})]),x,$,M,j,q,S,V,w,N,T])]),s("h2",U,[l("生命周期 "),p(c,{class:"header-anchor",href:"#生命周期","aria-label":'Permalink to "生命周期"'},{default:o(()=>[l("​")]),_:1})]),Z,s("h3",O,[l("_钩子函数 "),p(c,{class:"header-anchor",href:"#钩子函数","aria-label":'Permalink to "_钩子函数"'},{default:o(()=>[l("​")]),_:1})]),J,L,R,z,G,H,I]),"main-header":o(()=>[a(n.$slots,"main-header")]),"main-header-after":o(()=>[a(n.$slots,"main-header-after")]),"main-nav":o(()=>[a(n.$slots,"main-nav")]),"main-content":o(()=>[a(n.$slots,"main-content")]),"main-content-after":o(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":o(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":o(()=>[a(n.$slots,"main-nav-after")]),comment:o(()=>[a(n.$slots,"comment")]),footer:o(()=>[a(n.$slots,"footer")]),aside:o(()=>[a(n.$slots,"aside")]),"aside-custom":o(()=>[a(n.$slots,"aside-custom")]),default:o(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const ps=y(A,[["render",K]]);export{cs as __pageData,ps as default};
