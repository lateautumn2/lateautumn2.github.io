import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-3b2ab2f2.js";import{_ as y,u as E,c as F,w as n,p as g,o as d,f as C,a as s,b as l,d as c,r as o,e as m}from"./app-3b40f6e0.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-a8779e39.js";import"./YunCard.vue_vue_type_script_setup_true_lang-54b895d4.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-372975b2.js";import"./index-463abdac.js";const G=JSON.parse('{"title":"git","description":"","frontmatter":{"title":"git","date":"2021-08-16T00:00:00.000Z","updated":"2021-08-16T00:00:00.000Z","categories":"笔记","tags":["git"]},"headers":[{"level":2,"title":"git 环境配置","slug":"git-环境配置","link":"#git-环境配置","children":[]},{"level":2,"title":"git基础指令","slug":"git基础指令","link":"#git基础指令","children":[]},{"level":2,"title":"git忽视文件","slug":"git忽视文件","link":"#git忽视文件","children":[]}],"relativePath":"pages/posts/gitknow.md","path":"/home/runner/work/lateautumn2.github.io/lateautumn2.github.io/pages/posts/gitknow.md","lastUpdated":1711002759000}'),e=JSON.parse('{"title":"git","description":"","frontmatter":{"title":"git","date":"2021-08-16T00:00:00.000Z","updated":"2021-08-16T00:00:00.000Z","categories":"笔记","tags":["git"]},"headers":[{"level":2,"title":"git 环境配置","slug":"git-环境配置","link":"#git-环境配置","children":[]},{"level":2,"title":"git基础指令","slug":"git基础指令","link":"#git基础指令","children":[]},{"level":2,"title":"git忽视文件","slug":"git忽视文件","link":"#git忽视文件","children":[]}],"relativePath":"pages/posts/gitknow.md","path":"/home/runner/work/lateautumn2.github.io/lateautumn2.github.io/pages/posts/gitknow.md","lastUpdated":1711002759000}'),h={name:"pages/posts/gitknow.md",data(){return{data:e,frontmatter:e.frontmatter,$frontmatter:e.frontmatter}},setup(){const a=E();a.meta.frontmatter=Object.assign(a.meta.frontmatter,e.frontmatter),g("pageData",e)}},u=s("p",null,[l("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。 "),s("br")],-1),B=s("p",null,"想删除某段代码,又担心会出bug,那么git会记录你每次的改动,每次的迭代都会有版本,方便回退.",-1),f={id:"git",tabindex:"-1"},D=s("p",null,"1.在开发过程中,经常会需要对一个文件进行修改甚至删除,但是我们又会希望保存这个文件的历史记录,达到方便回退的效果,这个时候,如果通过备份,那么管理起来就会很复杂",-1),A=s("p",null,"2.在多人开发时,每个人都会需要修改文件,那么修改或合并就会非常复杂.",-1),b=s("p",null,"git是分布式的版本控制系统。分布式版本控制系统的客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的提取操作，实际上都是一次对代码仓库的完整备份.",-1),_=s("div",{style:{height:"400px",width:"400px",margin:"0 auto"}},[s("img",{src:"https://z3.ax1x.com/2021/08/17/f59xPO.png"})],-1),k={id:"git-环境配置",tabindex:"-1"},v=s("p",null,"如果是第一次使用,则需要配置用户名与邮箱",-1),$=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# git config  user.name 你的目标用户名")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# git config  user.email 你的目标邮箱名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# 使用--global参数，配置全局的用户名和邮箱，只需要配置一次即可。推荐配置github的用户名和密码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"config"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--global"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"user.name"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'自己的用户名'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"config"),s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"--global"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"user.email"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'自己的正确的邮箱'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# 查看配置信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"config"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--list")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# git config  user.name 你的目标用户名")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# git config  user.email 你的目标邮箱名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# 使用--global参数，配置全局的用户名和邮箱，只需要配置一次即可。推荐配置github的用户名和密码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"config"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--global"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"user.name"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'自己的用户名'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"config"),s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"--global"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"user.email"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'自己的正确的邮箱'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"# 查看配置信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"config"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--list")])])]),s("button",{class:"collapse"})],-1),x={id:"git基础指令",tabindex:"-1"},w=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki github-dark has-diff vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#初始化git仓库")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"init")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将index.html文件提交至暂存区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"add"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"index.html")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将css文件下所有文件提价至暂存区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"add"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"css")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将目录下所有文件提交至暂存区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"add"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},".")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看文件信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"status")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将暂存区的文件提交至仓库区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"commit"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"-m"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'提交信息'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#修改上一次提交信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"commit"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--amend"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"-m")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#简略查看所有上传日志(不包括已回退的版本)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"log"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--oneline")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#简略查看所有上传日志(包括已回退的版本)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"rflog"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--oneline")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看工作区与暂存区代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"diff")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看暂存区与仓库区代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"diff"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--cached")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看工作区与仓库区代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"diff"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--HEAD")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看两个版本之前代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"diff"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"xf2222"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"xf2223")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将代码回退至指定版本号")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"diff"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"--hard"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"xf2222")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#创建新分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"branch"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"分支名称")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看分区详情")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"branch")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#删除指定分区(不能在当前分区删除当前分区)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"branch"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"-d"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"分区名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#切换至指定分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"checkout"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"分区名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#创建分区同时切换至此分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"checkout"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"-b"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"分区名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#合并其他分支至此分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"merge"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"分支名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#上传本地文件至远程服务器")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"push"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"远程服务器地址"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"分支名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#克隆远程服务器文件至本地")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"clone"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"远程服务器地址"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"本地文件夹名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#从远程服务器拉取文件至本地(后续只会拉取与本地有差异的文件)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"git"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"pull"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"远程服务器地址")])])]),s("pre",{class:"shiki github-light has-diff vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#初始化git仓库")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"init")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将index.html文件提交至暂存区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"add"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"index.html")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将css文件下所有文件提价至暂存区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"add"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"css")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将目录下所有文件提交至暂存区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"add"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},".")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看文件信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"status")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将暂存区的文件提交至仓库区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"commit"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-m"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'提交信息'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#修改上一次提交信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"commit"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--amend"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-m")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#简略查看所有上传日志(不包括已回退的版本)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"log"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--oneline")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#简略查看所有上传日志(包括已回退的版本)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"rflog"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--oneline")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看工作区与暂存区代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"diff")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看暂存区与仓库区代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"diff"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--cached")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看工作区与仓库区代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"diff"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--HEAD")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看两个版本之前代码的不同")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"diff"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"xf2222"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"xf2223")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#将代码回退至指定版本号")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"diff"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"--hard"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"xf2222")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#创建新分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"branch"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"分支名称")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#查看分区详情")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"branch")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#删除指定分区(不能在当前分区删除当前分区)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"branch"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-d"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"分区名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#切换至指定分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"checkout"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"分区名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#创建分区同时切换至此分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"checkout"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"-b"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"分区名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#合并其他分支至此分区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"merge"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"分支名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#上传本地文件至远程服务器")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"push"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"远程服务器地址"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"分支名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#克隆远程服务器文件至本地")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"clone"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"远程服务器地址"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"本地文件夹名")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"#从远程服务器拉取文件至本地(后续只会拉取与本地有差异的文件)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"git"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"pull"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"远程服务器地址")])])]),s("button",{class:"collapse"})],-1),P={id:"git忽视文件",tabindex:"-1"},N=s("blockquote",null,[s("p",null,".gitignore 名字放在此文件夹中的文件,不会被git跟踪,也不会被上传"),s("p",null,"idea.html : 忽视idea.html文件"),s("p",null,"css : 忽视css文件夹"),s("p",null,"css/index.css : 忽视css文件夹下的index.css文件"),s("p",null,"css/*.css : 忽视css文件夹下所有css文件")],-1);function T(a,V,O,Z,p,S){const t=m,r=i;return d(),F(r,{frontmatter:p.frontmatter,data:p.data},{"main-content-md":n(()=>[u,B,C(" more "),s("h1",f,[l("git "),c(t,{class:"header-anchor",href:"#git","aria-label":'Permalink to "git"'},{default:n(()=>[l("​")]),_:1})]),D,A,b,_,s("h2",k,[l("git 环境配置 "),c(t,{class:"header-anchor",href:"#git-环境配置","aria-label":'Permalink to "git 环境配置"'},{default:n(()=>[l("​")]),_:1})]),v,$,s("h2",x,[l("git基础指令 "),c(t,{class:"header-anchor",href:"#git基础指令","aria-label":'Permalink to "git基础指令"'},{default:n(()=>[l("​")]),_:1})]),w,s("h2",P,[l("git忽视文件 "),c(t,{class:"header-anchor",href:"#git忽视文件","aria-label":'Permalink to "git忽视文件"'},{default:n(()=>[l("​")]),_:1})]),N]),"main-header":n(()=>[o(a.$slots,"main-header")]),"main-header-after":n(()=>[o(a.$slots,"main-header-after")]),"main-nav":n(()=>[o(a.$slots,"main-nav")]),"main-content":n(()=>[o(a.$slots,"main-content")]),"main-content-after":n(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":n(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":n(()=>[o(a.$slots,"main-nav-after")]),comment:n(()=>[o(a.$slots,"comment")]),footer:n(()=>[o(a.$slots,"footer")]),aside:n(()=>[o(a.$slots,"aside")]),"aside-custom":n(()=>[o(a.$slots,"aside-custom")]),default:n(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const L=y(h,[["render",T]]);export{G as __pageData,L as default};
