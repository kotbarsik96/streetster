import{_ as p,e as m,m as v,f as y,o as t,c as s,a as o,n as k,t as h,g as n,F as b,i as f,j as B,H as x}from"./index.2621954f.js";const H={name:"BlogItem",data(){return{rootPath:m}},computed:{...v(["blogs"]),blogId(){const a=this.$route.params.blogId;if(!this.blogs.find(l=>l.id===a))this.$router.push({name:"404"});else return a},blog(){return this.blogs.find(a=>a.id===this.blogId)}},methods:{...y(["loadBlogs"]),mediaRef(a){return`children-${a}-media`},addAttributes(a,l){this.$nextTick().then(()=>{const c=this.$refs[a];c?c.forEach(_=>{for(let i in l){const e=l[i];typeof e=="string"&&(_[i]=e),typeof e=="object"&&(e.requiresRootPath?_[i]=m+e.value:_[i]=e.value)}}):this.addAttributes(a,l)})}},created(){this.loadBlogs()},mounted(){this.blog||this.$router.push({name:"404"})}},L={class:"start-block blog-start blog-page__start"},T={class:"start-block__wrapper"},A={key:0,class:"start-block__container container"},M={class:"blog-header__text blog-text"},P={class:"blog-text__header h2"},R={class:"blog-text__date"},V=o("div",{class:"blog-header__gradient"},null,-1),j={key:0,class:"blog-page"},C={class:"blog-page__container container"},E={key:0,class:"blog-content__header h2"},F={class:"blog-content__text"},N=["innerHTML"],S=["innerHTML"],q={key:2,class:"blog-content__media"};function w(a,l,c,_,i,e){return t(),s("main",null,[o("section",L,[o("div",T,[e.blog?(t(),s("div",A,[o("div",{class:"blog-header",style:k(`background-image: url('${i.rootPath+e.blog.image}')`)},[o("div",M,[o("div",P,h(e.blog.title),1),o("div",R,h(e.blog.date),1)]),V],4)])):n("",!0)])]),e.blog?(t(),s("section",j,[o("div",C,[(t(!0),s(b,null,f(e.blog.content,(d,g)=>(t(),s("div",{class:"blog-content",key:g},[d.title?(t(),s("div",E,h(d.title),1)):n("",!0),o("div",F,[(t(!0),s(b,null,f(d.children,(r,u)=>(t(),s(b,{key:u},[r.type==="subtitle"?(t(),s("div",{key:0,class:"blog-content__header h3",innerHTML:r.html},null,8,N)):n("",!0),r.type==="paragraph"?(t(),s("p",{key:1,class:"blog-content__paragraph",innerHTML:r.html},null,8,S)):n("",!0),r.type==="media"?(t(),s("div",q,[(t(),B(x(r.tag),{ref_for:!0,ref:e.mediaRef(u+g),attrs:e.addAttributes(e.mediaRef(u+g),r.attrs)},null,8,["attrs"]))])):n("",!0)],64))),128))])]))),128))])])):n("",!0)])}var G=p(H,[["render",w]]);export{G as default};