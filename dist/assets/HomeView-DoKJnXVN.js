import{h as T,A as x}from"./AboutSection-BxRUlZCb.js";import{d as D,_ as l,o as i,c as a,a as R,b as f,e as t,t as r,u as e,f as s,w as _,S as b,r as S,g as d,R as $,B as y,T as w,F as v,h as g,i as P,C as V}from"./index-B8ReCVoI.js";import{c as h}from"./cloud-blue-DYumz_0J.js";import{u as I,S as p}from"./pricesStore-DMsMLSAR.js";import{S as N}from"./SubtitleItem-CmndxpCC.js";import{S as A}from"./SpacesSection-DNdz8cHE.js";import{T as B}from"./TestimonialsSection-DYp7HIW2.js";import"./MainTitleItem-vlOcwFRI.js";const j=D("main",{state:()=>({heroText:"Išpakuokite savo šeimos šventę smagioje erdvėje „Dėžutis”!",aboutText:{descriptionTitle:"„Dėžutis” - šeimos švenčių erdvė Kaune.",description:"Erdvėje galima švęsti krikštynas, vaikų gimtadienius, suaugusių šventes. Vienoje erdvėje yra ir vaikų žaidimų kambarys, ir restoranas, ir lauko kiemelis. „Dėžučio“ komanda gali pasirūpinti šventės dekoracijomis, maitinimu ir pramogomis."}})}),C={},H={class:"metrics"},K=R('<div class="metrics__item" data-v-b520b8a0><div class="metrics__number" data-v-b520b8a0>1944+</div><div class="metrics__title" data-v-b520b8a0>Organizuotų švenčių</div></div><div class="metrics__item" data-v-b520b8a0><div class="metrics__number" data-v-b520b8a0>32k</div><div class="metrics__title" data-v-b520b8a0>Dėžučio draugų</div></div><div class="metrics__item" data-v-b520b8a0><div class="metrics__number" data-v-b520b8a0>1200+</div><div class="metrics__title" data-v-b520b8a0>Pagaminta ledų tortų</div></div><div class="metrics__item" data-v-b520b8a0><div class="metrics__number" data-v-b520b8a0>9m</div><div class="metrics__title" data-v-b520b8a0>Patirtis organizavime</div></div>',4),O=[K];function z(m,n){return i(),a("div",H,O)}const W=l(C,[["render",z],["__scopeId","data-v-b520b8a0"]]),Y={class:"hero__wrapper"},F={class:"hero"},M={class:"hero__text"},q={class:"hero__title"},G={class:"hero__action-buttons"},L={href:"https://fb.watch/rGqh9e364d/",target:"_blank"},J={class:"hero__image-wrapper"},Q={class:"hero__image-content"},U=["src"],X=["src"],Z=["src"],tt=["src"],st=f({__name:"HeroSection",setup(m){const{heroText:n}=j();return(k,E)=>{const u=S("router-link");return i(),a("div",Y,[t("div",F,[t("div",M,[t("h1",q,r(e(n)),1),t("div",G,[s(u,{to:{name:e($).RESERVATION},class:"hero__button"},{default:_(()=>[s(b,{class:"hero__call-to-action"},{default:_(()=>[d(" Rezervuoti ")]),_:1})]),_:1},8,["to"]),t("a",L,[s(b,{class:"hero__call-to-action hero__button",type:e(y).SECONDARY},{default:_(()=>[d(" Žiūrėti video ")]),_:1},8,["type"])])])]),t("div",J,[t("div",Q,[t("img",{class:"hero__image",src:e(T),alt:"Hero image"},null,8,U),t("img",{class:"hero__cloud hero__cloud--1",src:e(h),alt:"Debeselis"},null,8,X),t("img",{class:"hero__cloud hero__cloud--2",src:e(h),alt:"Debeselis"},null,8,Z),t("img",{class:"hero__cloud hero__cloud--3",src:e(h),alt:"Debeselis"},null,8,tt)])])]),s(W)])}}}),et=l(st,[["__scopeId","data-v-15b0df9a"]]),it={class:"prices__wrapper"},at={class:"prices"},ot={class:"prices__content"},_t={class:"card__image"},ct=["src","alt"],rt={class:"card__content"},nt={class:"card__title"},dt={class:"card__time"},lt={class:"card__prices"},mt={key:0,class:"card__price-item price-item"},ut={class:"price-item__text"},vt={class:"price-item__price"},ht=f({__name:"PricesSection",setup(m){const{pricesInfo:n}=I();return(k,E)=>{const u=S("router-link");return i(),a("div",it,[t("div",at,[s(w,null,{default:_(()=>[d("Paslaugų kainos")]),_:1}),s(N,null,{default:_(()=>[d(" Pasirinkite, kokią šventę švęsite pas mus, ir pamatysite, kiek apytiksliai tai gali kainuoti. ")]),_:1}),t("div",ot,[(i(!0),a(v,null,g(e(n),o=>(i(),a("div",{key:o.service,class:"prices__card card"},[t("div",_t,[t("img",{src:o.image,alt:o.title},null,8,ct)]),t("div",rt,[t("div",nt,r(o.title),1),t("div",dt,r(o.defaultTime),1),t("div",lt,[(i(!0),a(v,null,g(o.prices,c=>(i(),a(v,{key:c.type},[c.type===e(p).WEEK_PRICE||c.type===e(p).WEEKDAY_PRICE||c.type===e(p).WEEKEND_PRICE?(i(),a("div",mt,[t("div",ut,r(c.title),1),t("div",vt,r(c.price)+" €",1)])):P("",!0)],64))),128))]),s(u,{to:{name:e($).SERVICES,hash:`#${o.hash}`},class:"card__button-wrapper"},{default:_(()=>[s(b,{type:e(y).SECONDARY,class:"card__button"},{default:_(()=>[d(r(o.callToAction),1)]),_:2},1032,["type"])]),_:2},1032,["to"])])]))),128))])])])}}}),pt=l(ht,[["__scopeId","data-v-bb7ee0b2"]]),bt={class:"home"},ft={class:"home__clouds"},kt=f({__name:"HomeView",setup(m){return(n,k)=>(i(),a("div",bt,[s(et),s(A,{"show-route-button":"",class:"spaces-section"}),s(x),s(pt),s(B),t("div",ft,[s(V)])]))}}),Rt=l(kt,[["__scopeId","data-v-07eec183"]]);export{Rt as default};