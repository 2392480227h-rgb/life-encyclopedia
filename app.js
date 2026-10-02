const items=[
{c:"逆天发言",l:"逆天",t:"我不会电脑",q:"I AM NOT A COMPUTER PERSON",s:"Reddit · r/AskReddit",u:"https://www.reddit.com/r/AskReddit/comments/5m3737/2016_askreddit_best_of_winners/",n:"一句完全不抽象的话，因为上下文和提名方式获得了抽象气质。"},
{c:"黑色幽默",l:"恶臭",t:"记忆力问题的终极答案",q:"i can't remember",s:"Reddit · r/AskReddit",u:"https://www.reddit.com/r/AskReddit/comments/14bbfcb/",n:"问题问如何改善记忆力，回答直接展示了自己的记忆力问题。"},
{c:"逆天发言",l:"逆天",t:"番茄厂到底干什么？",q:"They make them.",s:"Reddit · r/AskReddit",u:"https://www.reddit.com/r/AskReddit/comments/14bbfcb/",n:"逻辑没有错，信息量也几乎没有。"},
{c:"极臭",l:"极臭",t:"My name is cow",q:"My name is cow",s:"Reddit · AskReddit Best Of",u:"https://www.reddit.com/r/AskReddit/comments/5m3737/2016_askreddit_best_of_winners/",n:"没有解释，没有结论，甚至不像一个笑话，但完整得令人困惑。"},
{c:"政治抽象",l:"逆天",t:"赢！Endless win!",q:"赢！Endless win!",s:"Reddit · r/China_irl",u:"https://www.reddit.com/r/China_irl/comments/1jokwuj/",n:"典型的网络政治修辞。脱离上下文无法判断是在支持还是反讽。"},
{c:"政治抽象",l:"恶臭",t:"Be a chill guy, OK?",q:"Be a chill guy,OK？",s:"Reddit · r/China_irl",u:"https://www.reddit.com/r/China_irl/comments/1jokwuj",n:"讨论中文互联网互相站队时出现的元吐槽。"},
{c:"政治抽象",l:"逆天",t:"Ju国可以吗？",q:"Ju国 可以吗？ 😂",s:"Reddit · r/China_irl",u:"https://www.reddit.com/r/China_irl/comments/1unmv24",n:"用户与平台文字过滤机制斗智斗勇式玩笑。"},
{c:"简中互联网",l:"恶臭",t:"信息茧房了",q:"信息茧房了",s:"Reddit · r/China_irl",u:"https://www.reddit.com/r/China_irl/comments/1v56nws",n:"复杂问题被一个流行概念迅速盖章，形成解释完成但什么也没解释的效果。"},
{c:"简中互联网",l:"逆天",t:"上网就是为了情绪价值",q:"上网就是为了情绪价值",s:"Reddit · r/China_irl",u:"https://www.reddit.com/r/China_irl/comments/1jokwuj",n:"把社交媒体的信息、娱乐和情绪功能压缩成一句话。"},
{c:"简中互联网",l:"极臭",t:"抽象开始解构抽象",q:"抽象本质就是解构，破坏重组，只不过现在抽象开始解构抽象本身了。",s:"Reddit · r/China_irl",u:"https://www.reddit.com/r/China_irl/comments/17zn9x/",n:"互联网亚文化发展到开始研究自己为什么存在。"},
{c:"极臭",l:"极臭",t:"没人要求，但它就是出现了",q:"Nobody asked for this.",s:"Know Your Meme · Absurd Images",u:"https://trending.knowyourmeme.com/editorials/collections/25-absurd-images-from-the-internet-that-nobody-asked-for",n:"没有人需要它，但有人还是做了。互联网的核心物理定律之一。"},
{c:"极臭",l:"极臭",t:"图片已经拒绝解释",q:"Big Bird · Saint Zuckerberg · Long Furby · Mackerel Pizza",s:"Know Your Meme · Confusing Images",u:"https://knowyourmeme.com/editorials/collections/17-of-the-most-confusing-images-found-on-social-media",n:"标题本身已经像一台随机生成器。"},

{c:"恶臭",l:"恶臭",t:"孙笑川“打奶奶”",q:"为了500块钱打奶奶",s:"中文互联网 · 抽象文化考古",u:"https://tech.sina.com.cn/csj/2019-01-02/doc-ihqhqcis2321099.shtml",n:"这是网络恶搞与嫁祸式造梗的经典案例，不应当当作孙笑川真实实施暴力的事实。公开报道记载，相关说法源于粉丝将其他案件与孙笑川拼接传播。"},
{c:"逆天发言",l:"逆天",t:"微博找到了：带带大师兄",q:"XXX的微博找到了：@带带大师兄",s:"中文互联网 · 孙笑川相关迷因",u:"https://www.sohu.com/a/251495123_160576",n:"把与孙笑川无关的热点事件强行嫁接到其微博账号，是这一互联网迷因的重要传播套路。"},
{c:"逆天发言",l:"逆天",t:"陈冠希约架事件",q:"我就在洛杉矶，想见面吗？",s:"虎嗅 · 2019",u:"https://m.huxiu.com/article/288852.html",n:"2019年出现过孙笑川粉丝与陈冠希在社交媒体上的冲突，陈冠希直播赴约而对方未出现。孙笑川本人随后回应称这种行为很抽象，并否认替粉丝背锅。"},
{c:"恶臭",l:"恶臭",t:"东百往事：沈阳大街",q:"到沈阳了，指定没有你好果汁吃嗷！",s:"B站 · 东百往事考古",u:"https://www.bilibili.com/read/mobile?id=16491934",n:"2016年前后东北主播短视频素材被后来网友整理、剪辑并以“东百往事”传播，形成了大量二创和流行语。"},
{c:"逆天发言",l:"逆天",t:"这位更是重量级",q:"这是更是重量级",s:"东百往事 · 网络迷因",u:"https://moegirl.icu/%E4%B8%9C%E7%99%BE%E5%BE%80%E4%BA%8B",n:"源自东百往事相关视频中的一句话，后来常被反话使用，用来形容罕见或离谱的人和事。"},
{c:"极臭",l:"极臭",t:"你太baby了",q:"你太baby辣！",s:"东百往事 · 网络迷因",u:"https://www.sohu.com/a/546098636_100204787",n:"“baby”取“卑鄙”的谐音，是东百往事传播过程中较知名的梗之一。"},
{c:"极臭",l:"极臭",t:"老八：奥利给，干了！",q:"今天我老八，挑战一把吃㞎㞎。",s:"中文互联网 · 岛市老八迷因",u:"https://zh.wikiquote.org/zh-sg/%E5%B2%9B%E5%B8%82%E8%80%81%E5%85%AB",n:"岛市老八因极端猎奇的厕所挑战视频和“奥利给”口号成为网络迷因。此条仅作为互联网亚文化考古记录，不鼓励模仿。"},
{c:"极臭",l:"极臭",t:"老八胃大",q:"老八胃大",s:"中文互联网 · 老八迷因衍生",u:"https://gojistudios.com.hk/15222/",n:"围绕岛市老八形成的衍生说法，用夸张、重口味的方式描述其网络形象。"},
{c:"恶臭",l:"恶臭",t:"东北虎哥与东百往事",q:"我告诉你嗷，杀马特，到沈阳了！",s:"东百往事 · 快手/B站迷因",u:"https://moegirl.icu/zh-cn/%E4%B8%9C%E7%99%BE%E5%BE%80%E4%BA%8B",n:"“东百往事”通常指2016年前后东北主播相关短视频及其后续二创，虎哥、刀哥、杀马特团长等人物构成了这一迷因体系的核心素材。"},
{c:"逆天发言",l:"逆天",t:"沈阳大街圣地",q:"东百不能没有沈阳大街",s:"东百往事 · 二创文化",u:"https://www.bilibili.com/read/mobile?id=16491934",n:"网友把现实地点与网络二创叙事绑定，逐渐形成“沈阳大街”这一互联网迷因意象。"}
];
const cats=["全部","极臭","恶臭","逆天发言","政治抽象","黑色幽默","简中互联网"];
let active="全部";
const grid=document.querySelector("#grid"),input=document.querySelector("#searchInput"),nav=document.querySelector("#categories");
function cls(c){return c==="极臭"?"extreme":c==="恶臭"?"stinky":c==="政治抽象"?"politics":c==="黑色幽默"?"black":c==="简中互联网"?"cn":"absurd"}
function render(){const q=input.value.trim().toLowerCase();const list=items.filter(x=>(active==="全部"||x.c===active)&&(!q||(x.t+x.q+x.s+x.c+x.n).toLowerCase().includes(q)));grid.innerHTML=list.map((x,i)=>'<article class="card" data-i="'+items.indexOf(x)+'"><span class="tag '+cls(x.c)+'">'+x.c+" · "+x.l+'</span><h2>'+x.t+'</h2><div class="quote">“'+x.q+'”</div><div class="meta"><span>'+x.s+'</span><span>查看 →</span></div></article>').join("");document.querySelector("#empty").classList.toggle("hidden",list.length>0);document.querySelector("#totalCount").textContent=items.length;document.querySelector("#categoryCount").textContent=cats.length-1;grid.querySelectorAll(".card").forEach(el=>el.onclick=()=>detail(items[Number(el.dataset.i)]))}
function detail(x){document.querySelector("#detailContent").innerHTML='<span class="tag '+cls(x.c)+'">'+x.c+" · "+x.l+'</span><h2>'+x.t+'</h2><div class="quote">“'+x.q+'”</div><p>'+x.n+'</p><p>来源：'+x.s+'<br><a href="'+x.u+'" target="_blank" rel="noopener">打开原始来源 ↗</a></p>';document.querySelector("#detailDialog").showModal()}
nav.innerHTML=cats.map(c=>'<button class="category '+(c===active?"active":"")+'" data-c="'+c+'">'+c+"</button>").join("");
nav.querySelectorAll("button").forEach(b=>b.onclick=()=>{active=b.dataset.c;nav.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));render()});
input.oninput=render;
document.querySelector("#randomBtn").onclick=()=>detail(items[Math.floor(Math.random()*items.length)]);
document.querySelector("#closeDialog").onclick=()=>document.querySelector("#detailDialog").close();
render(),
{c:"简中互联网",l:"抽象文化",t:"NMSL：一个缩写的互联网史",q:"NMSL",s:"The China Project · 中文互联网俚语考古",u:"https://thechinaproject.com/2020/04/23/nmsl-the-origins-of-the-chinese-internet-slang/",n:"相关报道将NMSL的流行与早期直播、抽象文化传播联系起来。后来它从直播圈黑话扩散成更广泛的中文互联网表达。"},
{c:"极臭",l:"极臭",t:"你在赣神魔？",q:"你在赣神魔？",s:"澎湃新闻 · 抽象文化考古",u:"https://www.thepaper.cn/newsDetail_forward_29356506",n:"四川方言式表达进入直播黑话体系后，被大量二创和模仿，成为抽象文化早期具有辨识度的句式。"},
{c:"逆天发言",l:"逆天",t:"gkd / gck / 带哥",q:"gkd！gkd！",s:"澎湃新闻 · 抽象话考古",u:"https://www.thepaper.cn/newsDetail_forward_29356506",n:"抽象话大量吸收四川方言、拆字、拼音缩写和Emoji，形成一套熟人语境下的信息压缩系统。"},
{c:"恶臭",l:"恶臭",t:"抽象工作室黑话",q:"女子口巴",s:"澎湃新闻 · 抽象文化考古",u:"https://www.thepaper.cn/newsDetail_forward_29356506",n:"“女子口巴”等拆字写法属于抽象话常见构造方式，把普通词语故意改造成需要圈内语境才能迅速理解的写法。"},
{c:"简中互联网",l:"恶臭",t:"嗨粉：把热点变成孙笑川宇宙",q:"嫌疑人找到了：@带带大师兄",s:"The China Project · 中文互联网俚语考古",u:"https://thechinaproject.com/2020/04/23/nmsl-the-origins-of-the-chinese-internet-slang/",n:"相关报道记录了粉丝把无关案件和热点故意嫁接到孙笑川账号上的玩法。这种“万能背锅”式恶搞后来成为人物迷因的一部分。"},
{c:"极臭",l:"极臭",t:"东百往事：二次元经典老番",q:"经典老番，建议观看",s:"东百往事 · 迷因考古",u:"https://moegirl.icu/%E8%BF%99%E4%BD%8D%E6%9B%B4%E6%98%AF%E4%B8%AA%E5%AF%84%E5%90%A7",n:"东百往事早期被搬到B站时被加上“二次元”“经典老番”等戏谑标签，后来反而成为固定梗。"},
{c:"逆天发言",l:"逆天",t:"东百往事三部曲",q:"虎哥大战杀马特",s:"东百往事 · 迷因考古",u:"https://zh.wikipedia.org/wiki/%E4%B8%9C%E7%99%BE%E5%BE%80%E4%BA%8B",n:"资料通常把虎哥大战杀马特作为最知名主线，部分合集还会加入虎哥大战赵三金、虎哥追求彪姐等内容。"},
{c:"黑色幽默",l:"恶臭",t:"平台越删，二创越多",q:"删了又传，传了又删",s:"东百往事 · 亚文化研究",u:"https://zh.wikipedia.org/wiki/%E4%B8%9C%E7%99%BE%E5%BE%80%E4%BA%8B",n:"公开资料提到相关视频反复被下架、重新上传，二创者又通过剪辑、谐音和再包装延续传播。"},
{c:"极臭",l:"极臭",t:"沈阳大街：从路口变成圣地",q:"沈阳大街",s:"东百往事 · 地点考古",u:"https://zh.wikipedia.org/wiki/%E4%B8%9C%E7%99%BE%E5%BE%80%E4%BA%8B",n:"资料指出“沈阳大街”并非正式地名，而是东百往事相关视频拍摄地点形成的网络称呼，后来被二创文化赋予“圣地”意义。"},
{c:"简中互联网",l:"恶臭",t:"抽象文化的自我复制",q:"从一个梗长出一万个梗",s:"澎湃新闻 · 抽象文化考古",u:"https://www.thepaper.cn/newsDetail_forward_29356506",n:"澎湃新闻梳理了抽象文化从直播黑话到B站鬼畜、短视频和各种“×学”的扩散过程，呈现出典型的再加工和自我复制。"}
;