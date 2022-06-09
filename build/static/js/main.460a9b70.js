"use strict";(self.webpackChunkinputcounter=self.webpackChunkinputcounter||[]).push([[179],{630:(e,t,n)=>{var r=n(935),o=n(294),a=n(804),i=n(893);const s=a.ZP.div.withConfig({componentId:"sc-1ua4m8k-0"})(["display:flex;align-items:center;justify-content:center;font-size:16px;"]),l="\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n",u=a.ZP.button.withConfig({componentId:"sc-1ua4m8k-1"})([""," cursor:",";display:flex;align-items:center;justify-content:center;margin:0 8px;color:#fff;background-color:",";border:1px solid transparent;"],l,(e=>e.disabled?"not-allowed":"pointer"),(e=>e.disabled?"#BFB9C2":"#3518a6")),d=a.ZP.input.withConfig({componentId:"sc-1ua4m8k-2"})([""," color:#000;text-align:center;background-color:",";border:1px solid #a1a09e;"],l,(e=>e.disabled?"#E9EAEE":"#fff")),c=({min:e=0,max:t=65,step:n=1,name:r="defalutCustomInput",value:a=e,disabled:l,onChange:c,onBlur:m})=>{if(e>t)throw new RangeError("min should not be greater than max");if(n<=0)throw new RangeError("step shold not be zero or less then zero ");const p={target:{value:"",name:r}},[b,g]=(0,o.useState)(a),h=(0,o.useRef)(null),f=(0,o.useRef)({timer:"",isMouseUp_Out:!0,isFirstClick:!0}),x=r=>{const o=r.target.name;f.current.isMouseUp_Out=!1;let a=b;!function r(){if("decre"===o){if(a===e)return void j();a=a>t?t-n:a<e||a-n<e?e:a-n}else if("incre"===o){if(a===t)return void j();a=a>t?t:a<e?e+n:Number(a)+n>t?t:Number(a)+n}a!==t&&a!==e||j(),p.target.value=a,g(a),c&&c(p),f.current.isMouseUp_Out||(f.current.timer=setTimeout((()=>{f.current.isFirstClick=!1,r()}),f.current.isFirstClick?500:200))}()},j=()=>{clearTimeout(f.current.timer),f.current.timer="",f.current.isMouseUp_Out=!0,f.current.isFirstClick=!0},v=()=>{j()};return(0,i.jsxs)(s,{children:[(0,i.jsx)(u,{type:"button",name:"decre",onMouseDown:x,onMouseUp:j,onMouseOut:v,disabled:l||b<=e,children:"−"}),(0,i.jsx)(d,{type:"tel",ref:h,onChange:e=>{/^([0-9]?|[1-9]+[0-9]*)$/.test(e.target.value)&&g(e.target.value)},name:r,value:b,onBlur:()=>{if(b===a)return;let n=0;n=b>t?t:b<e?e:b,p.target.value=n,g(n),m&&m(p)},disabled:l}),(0,i.jsx)(u,{name:"incre",type:"button",onMouseDown:x,onMouseUp:j,onMouseOut:v,disabled:l||b>=t,children:"＋"})]})},m=a.ZP.div.withConfig({componentId:"sc-1zr4mh-0"})(["display:flex;justify-content:space-between;margin:14px 0;"]),p=a.ZP.label.withConfig({componentId:"sc-1zr4mh-1"})(["font-size:14px;display:flex;flex-direction:column;& small{margin-top:10px;color:#bfb9c2;font-size:12px;}"]),b=({remainGuest:e,aid:t,className:n,singleAllocation:r,onChange:a,disabled:s})=>{const l=(0,o.useMemo)((()=>{let t=Number(r.child)+Number(r.adult),n=4-t<0?0:4-t;return e<n?e:n}),[r,e]),u=n=>{let o=0,i=e;if(r[n.target.name]!==n.target.value){let e={...r};e[n.target.name]=n.target.value,o=r[n.target.name]-n.target.value,o<=0?i-=Math.abs(o):i+=Math.abs(o),a(i,e,t)}};return(0,i.jsxs)("div",{className:n,children:[(0,i.jsxs)(h,{children:["房間： ",Number(r.adult)+Number(r.child)," ","人"]}),(0,i.jsxs)(m,{children:[(0,i.jsxs)(p,{htmlFor:"adult",children:["大人",(0,i.jsx)("small",{children:"年齡20+"})]}),(0,i.jsx)(c,{min:1,max:Number(r.adult)+l,name:"adult",step:1,value:r.adult,onChange:u,onBlur:u,disabled:s})]}),(0,i.jsxs)(m,{children:[(0,i.jsx)(p,{htmlFor:"child",children:"小孩"}),(0,i.jsx)(c,{min:0,max:Number(r.child)+l,name:"child",step:1,value:r.child,onChange:u,onBlur:u,disabled:s})]})]})},g=a.ZP.form.withConfig({componentId:"sc-1qofr6d-0"})(["width:480px;padding:12px;margin:20px auto;"]),h=a.ZP.h3.withConfig({componentId:"sc-1qofr6d-1"})(["font-size:16px;font-weight:500;margin:18px 0;"]),f=a.ZP.p.withConfig({componentId:"sc-1qofr6d-2"})(["width:100%;padding:20px;margin:18px 0;background-color:#afa0e5;color:#e9eaee;border-radius:4px;"]),x=(0,a.ZP)(b).withConfig({componentId:"sc-1qofr6d-3"})(["&::after{content:'';display:inline-block;width:100%;height:1px;background-color:#f6efef;}&:last-child{&::after{display:none;}}"]),j=({guest:e,room:t,onChange:n})=>{const[r,a]=(0,o.useState)((()=>Array.from(new Array(t),(()=>({adult:1,child:0}))))),[s,l]=(0,o.useState)((()=>e-r.reduce(((e,t)=>e+Number(t.adult)+Number(t.child)),0))),u=(e,t,o)=>{let i=[...r];i[o]=t,a(i),l(e),n&&n(i)};return(0,i.jsxs)(g,{children:[(0,i.jsxs)(h,{children:["住客人數： ",e," 人 / ",t," 房"]}),(0,i.jsxs)(f,{children:["尚未分配人數： ",s," 人"]}),r.map(((n,r)=>(0,i.jsx)(x,{disabled:e===t,remainGuest:s,aid:r,onChange:u,singleAllocation:n},r)))]})},v=(0,a.vJ)(["*{box-sizing:border-box;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}input,button{all:unset;}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}input[type=number]{-moz-appearance:textfield;}"]),w=()=>{const[e,t]=(0,o.useState)(6);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(c,{min:5,max:8,name:"adult",step:1,value:e,onChange:e=>{console.log(e.target.value,e.target.name),t(e.target.value)},onBlur:e=>{console.log(e.target.value,e.target.name),t(e.target.value)},disabled:!1}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(j,{onChange:e=>console.log(e),guest:6,room:3})]})};r.render((0,i.jsx)(w,{}),document.getElementById("root"))}},e=>{e.O(0,[216],(()=>(630,e(e.s=630)))),e.O()}]);