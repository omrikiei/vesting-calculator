(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6530:function(e,t,s){Promise.resolve().then(s.bind(s,3904))},3904:function(e,t,s){"use strict";s.d(t,{VestingCalculatorComponent:function(){return A}});var a=s(7437),r=s(2265),l=s(1390),n=s(8971),i=s(9612),d=s(7625),c=s(7031),o=s(7059),m=s(2994),x=s(8147),h=s(2190),u=s(1699),g=s(5169),f=s(3574),p=s(407),v=s(7053),b=s(7712),N=s(1994),j=s(3335);function y(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,j.m6)((0,N.W)(t))}let w=(0,b.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),C=r.forwardRef((e,t)=>{let{className:s,variant:r,size:l,asChild:n=!1,...i}=e,d=n?v.g7:"button";return(0,a.jsx)(d,{className:y(w({variant:r,size:l,className:s})),ref:t,...i})});C.displayName="Button";let k=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:y("rounded-xl border bg-card text-card-foreground shadow",s),...r})});k.displayName="Card";let P=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:y("flex flex-col space-y-1.5 p-6",s),...r})});P.displayName="CardHeader";let S=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:y("font-semibold leading-none tracking-tight",s),...r})});S.displayName="CardTitle";let O=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:y("text-sm text-muted-foreground",s),...r})});O.displayName="CardDescription";let D=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:y("p-6 pt-0",s),...r})});D.displayName="CardContent",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:y("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter";let F=r.forwardRef((e,t)=>{let{className:s,type:r,...l}=e;return(0,a.jsx)("input",{type:r,className:y("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...l})});F.displayName="Input";var I=s(6394);let M=(0,b.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),R=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(I.f,{ref:t,className:y(M(),s),...r})});R.displayName=I.f.displayName;var z=s(9862);let V=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(z.fC,{className:y("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...r,ref:t,children:(0,a.jsx)(z.bU,{className:y("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});V.displayName=z.fC.displayName;var U=s(401),_=s(2489),E=s(5675);function A(){let[e,t]=(0,r.useState)([]),[s,v]=(0,r.useState)({hasCliff:!0,exercisePrice:0,vestingStartDate:(0,l.WU)(new Date,"yyyy-MM-dd"),term:4,numberOfOptions:1e3,vestingInterval:3}),[b,N]=(0,r.useState)(null),[j,y]=(0,r.useState)(25),[w,I]=(0,r.useState)(0),[M,z]=(0,r.useState)([]),[A,K]=(0,r.useState)(new Date),W=s=>{t(e.filter(e=>e.id!==s))},T=e=>{N(e)},$=()=>{N(null)},G=s=>{t(e.map(e=>e.id===s.id?s:e)),N(null)},Y=(0,r.useCallback)(()=>{if(0===e.length)return;let t=new Date;z(Array.from({length:12*Math.max(...e.map(e=>e.term))},(e,s)=>(0,n.z)(t,s)).map(t=>{let s=0,a=0,r=0,n=0,d=0;return e.forEach(e=>{let l=new Date(e.vestingStartDate),c=(0,i.d)(t,l),o=e.hasCliff?12:0;if(d+=e.numberOfOptions,c>=o){let t;t=e.hasCliff&&c===o?.25:Math.min((Math.floor((c-o)/e.vestingInterval)*e.vestingInterval+o)/(12*e.term),1);let l=e.numberOfOptions*t,i=l*e.exercisePrice,d=l*w-i,m=j/100*d;s+=i,a+=m,r+=d-m,n+=l}}),{month:(0,l.WU)(t,"MMM yyyy"),date:t,exercisePrice:s,taxes:a,profit:r,vestedPercentage:n/d*100}})),K(t)},[e,j,w]),Z=(()=>{let e=M.find(e=>e.date.getFullYear()===A.getFullYear()&&e.date.getMonth()===A.getMonth());return e?e.vestedPercentage:0})(),H=[{name:"Vested",value:Z},{name:"Unvested",value:100-Z}],B=["#8884d8","#82ca9d"];return(0,a.jsxs)(k,{className:"w-full max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800",children:[(0,a.jsxs)(P,{className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white",children:[(0,a.jsx)(S,{className:"text-2xl font-bold",children:"Startup Options Grant Vesting Calculator"}),(0,a.jsx)(O,{className:"text-purple-100",children:"Add your grants and calculate your vesting schedule"})]}),(0,a.jsx)(D,{className:"p-6",children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(R,{htmlFor:"taxPercentage",className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Tax Percentage"}),(0,a.jsx)(F,{id:"taxPercentage",type:"number",value:j,onChange:e=>y(Number(e.target.value)),className:"h-8 text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(R,{htmlFor:"estimatedPricePerShare",className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Estimated Price per Share (USD)"}),(0,a.jsx)(F,{id:"estimatedPricePerShare",type:"number",value:w,onChange:e=>I(Number(e.target.value)),className:"h-8 text-sm"})]})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-purple-700 dark:text-purple-300",children:"Add New Grant"}),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(V,{id:"hasCliff",checked:s.hasCliff,onCheckedChange:e=>v({...s,hasCliff:e})}),(0,a.jsx)(R,{htmlFor:"hasCliff",className:"text-sm",children:"Has Cliff"})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(R,{htmlFor:"exercisePrice",className:"text-xs",children:"Exercise Price (USD)"}),(0,a.jsx)(F,{id:"exercisePrice",type:"number",value:s.exercisePrice,onChange:e=>v({...s,exercisePrice:Number(e.target.value)}),className:"h-7 text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(R,{htmlFor:"vestingStartDate",className:"text-xs",children:"Vesting Start Date"}),(0,a.jsx)(F,{id:"vestingStartDate",type:"date",value:s.vestingStartDate,onChange:e=>v({...s,vestingStartDate:e.target.value}),className:"h-7 text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(R,{htmlFor:"term",className:"text-xs",children:"Term (Years)"}),(0,a.jsx)(F,{id:"term",type:"number",value:s.term,onChange:e=>v({...s,term:Number(e.target.value)}),className:"h-7 text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(R,{htmlFor:"numberOfOptions",className:"text-xs",children:"Number of Options"}),(0,a.jsx)(F,{id:"numberOfOptions",type:"number",value:s.numberOfOptions,onChange:e=>v({...s,numberOfOptions:Number(e.target.value)}),className:"h-7 text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)(R,{htmlFor:"vestingInterval",className:"text-xs",children:"Vesting Interval (Months)"}),(0,a.jsx)(F,{id:"vestingInterval",type:"number",value:s.vestingInterval,onChange:e=>v({...s,vestingInterval:Number(e.target.value)}),className:"h-7 text-sm"})]})]}),(0,a.jsx)(C,{onClick:()=>{t([...e,{...s,id:Date.now()}]),v({hasCliff:!0,exercisePrice:0,vestingStartDate:(0,l.WU)(new Date,"yyyy-MM-dd"),term:4,numberOfOptions:1e3,vestingInterval:3})},className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",children:"Add Grant"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-purple-700 dark:text-purple-300",children:"Added Grants"}),e.map(e=>(0,a.jsx)("div",{className:"flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm",children:b===e.id?(0,a.jsxs)("div",{className:"flex-1 grid grid-cols-3 gap-2",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(V,{id:"edit-hasCliff-".concat(e.id),checked:e.hasCliff,onCheckedChange:t=>G({...e,hasCliff:t})}),(0,a.jsx)(R,{htmlFor:"edit-hasCliff-".concat(e.id),className:"text-xs",children:"Has Cliff"})]}),(0,a.jsx)(F,{type:"number",value:e.exercisePrice,onChange:t=>G({...e,exercisePrice:Number(t.target.value)}),className:"h-7 text-xs",placeholder:"Exercise Price"}),(0,a.jsx)(F,{type:"date",value:e.vestingStartDate,onChange:t=>G({...e,vestingStartDate:t.target.value}),className:"h-7 text-xs"}),(0,a.jsx)(F,{type:"number",value:e.term,onChange:t=>G({...e,term:Number(t.target.value)}),className:"h-7 text-xs",placeholder:"Term (Years)"}),(0,a.jsx)(F,{type:"number",value:e.numberOfOptions,onChange:t=>G({...e,numberOfOptions:Number(t.target.value)}),className:"h-7 text-xs",placeholder:"Number of Options"}),(0,a.jsx)(F,{type:"number",value:e.vestingInterval,onChange:t=>G({...e,vestingInterval:Number(t.target.value)}),className:"h-7 text-xs",placeholder:"Vesting Interval"}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)(C,{size:"sm",onClick:()=>G(e),className:"bg-green-500 hover:bg-green-600 text-white",children:(0,a.jsx)(U.Z,{className:"h-4 w-4"})}),(0,a.jsx)(C,{size:"sm",onClick:$,className:"bg-gray-500 hover:bg-gray-600 text-white",children:(0,a.jsx)(_.Z,{className:"h-4 w-4"})})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:"text-gray-700 dark:text-gray-200",children:[e.hasCliff?"With Cliff":"No Cliff"," - $",e.exercisePrice," - ",e.vestingStartDate," - ",e.term," years - ",e.numberOfOptions," options - ",e.vestingInterval," mo interval"]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)(C,{size:"sm",onClick:()=>T(e.id),className:"bg-blue-500 hover:bg-blue-600 text-white",children:(0,a.jsx)(E.Z,{className:"h-4 w-4"})}),(0,a.jsx)(C,{size:"sm",onClick:()=>W(e.id),className:"bg-red-500 hover:bg-red-600 text-white",children:(0,a.jsx)(_.Z,{className:"h-4 w-4"})})]})]})},e.id))]}),(0,a.jsx)(C,{onClick:Y,className:"w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white",children:"Calculate Vesting"}),M.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"h-[400px] mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg",children:(0,a.jsx)(d.h,{width:"100%",height:"100%",children:(0,a.jsxs)(c.v,{data:M,onClick:e=>{e&&e&&e.activePayload.length>0&&K(e.activePayload[0].payload.date)},children:[(0,a.jsx)(o.K,{dataKey:"month",tick:{fontSize:12}}),(0,a.jsx)(m.B,{tick:{fontSize:12}}),(0,a.jsx)(x.u,{content:(0,a.jsx)(e=>{let{active:t,payload:s,label:r}=e;return t&&s&&s.length?(0,a.jsxs)("div",{className:"bg-white p-4 border rounded shadow-lg text-sm",children:[(0,a.jsx)("p",{className:"font-bold text-gray-800",children:r}),s.map((e,t)=>(0,a.jsxs)("p",{style:{color:e.color},children:[e.name,": $",e.value.toFixed(2)]},t))]}):null},{})}),(0,a.jsx)(h.D,{wrapperStyle:{fontSize:12}}),(0,a.jsx)(u.$,{dataKey:"exercisePrice",stackId:"a",fill:"#8884d8",name:"Exercise Price"}),(0,a.jsx)(u.$,{dataKey:"taxes",stackId:"a",fill:"#82ca9d",name:"Taxes"}),(0,a.jsx)(u.$,{dataKey:"profit",stackId:"a",fill:"#ffc658",name:"Profit"})]})})}),(0,a.jsxs)("div",{className:"mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg",children:[(0,a.jsxs)("h3",{className:"text-lg font-semibold text-center mb-4",children:["Vesting Status as of ",(0,l.WU)(A,"MMMM yyyy")]}),(0,a.jsx)("div",{className:"h-[300px]",children:(0,a.jsx)(d.h,{width:"100%",height:"100%",children:(0,a.jsxs)(g.u,{children:[(0,a.jsx)(f.b,{data:H,cx:"50%",cy:"50%",innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",children:H.map((e,t)=>(0,a.jsx)(p.b,{fill:B[t%B.length]},"cell-".concat(t)))}),(0,a.jsx)(x.u,{}),(0,a.jsx)(h.D,{})]})})}),(0,a.jsxs)("p",{className:"text-center mt-4",children:[Z.toFixed(2),"% Vested, ",(100-Z).toFixed(2),"% Unvested"]})]})]})]})})]})}}},function(e){e.O(0,[941,971,117,744],function(){return e(e.s=6530)}),_N_E=e.O()}]);