(this.webpackJsonpshop1=this.webpackJsonpshop1||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/pizza-logo.f3327011.svg"},43:function(e,t,a){e.exports=a.p+"static/media/empty-cart.ceb2faf0.png"},46:function(e,t,a){e.exports=a(74)},51:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),i=(a(51),a(15)),o=a.n(i);var s=function(e){var t=e.onClick,a=e.className,n=e.outline,r=e.children;return c.a.createElement("button",{onClick:t,className:o()("button",a,{"button--outline":n})},r)},m=a(10),u=a(6),d=a(40),p=a.n(d);var E=function(){var e=Object(u.c)((function(e){return e.cart})),t=e.totalPrice,a=e.totalCount;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement(m.b,{to:"/"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("img",{width:"38",src:p.a,alt:"Pizza logo"}),c.a.createElement("div",null,c.a.createElement("h1",null,"React Pizza"),c.a.createElement("p",null,"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439")))),c.a.createElement("div",{className:"header__cart"},c.a.createElement(m.b,{to:"/cart"},c.a.createElement(s,{className:"button--cart"},c.a.createElement("span",null,t," \u20bd"),c.a.createElement("div",{className:"button__delimiter"}),c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,a))))))},C=c.a.memo((function(e){var t=e.activeCategory,a=e.items,n=e.onClickCategory;return c.a.createElement("div",null,c.a.createElement("div",{className:"categories"},c.a.createElement("ul",null,c.a.createElement("li",{className:null===t?"active":"",onClick:function(){return n(null)}},"\u0412\u0441\u0435"),a&&a.map((function(e,a){return c.a.createElement("li",{className:t===a?"active":"",onClick:function(){return n(a)},key:"".concat(e,"_").concat(a)},e)})))))}));C.defaultProps={activeCategory:null,items:[]};var h=C,v=a(18),f=c.a.memo((function(e){var t=e.items,a=e.activeSortType,n=e.onClickSortType,r=c.a.useState(!1),l=Object(v.a)(r,2),i=l[0],o=l[1],s=c.a.useRef(),m=t.find((function(e){return e.type===a})).name,u=function(e){(e.path||e.composedPath&&e.composedPath()).includes(s.current)||o(!1)};return c.a.useEffect((function(){document.body.addEventListener("click",u)}),[]),c.a.createElement("div",{ref:s,className:"sort"},c.a.createElement("div",{className:"sort__label"},c.a.createElement("svg",{className:i?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),c.a.createElement("b",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"),c.a.createElement("span",{onClick:function(){o(!i)}},m)),i&&c.a.createElement("div",{className:"sort__popup"},c.a.createElement("ul",null,t&&t.map((function(e,t){return c.a.createElement("li",{onClick:function(){return function(e){n&&n(e),o(!1)}(e)},className:a===e.type?"active":"",key:"".concat(e.type,"_").concat(t)},e.name)})))))}));f.defaultProps={items:[]};var b=f,_=function(e){var t=e.id,a=e.name,n=e.type,r=e.size,l=e.totalPrice,i=e.totalCount,o=e.onRemove,m=e.onMinus,u=e.onPlus;return c.a.createElement("div",{className:"cart__item"},c.a.createElement("div",{className:"cart__item-img"},c.a.createElement("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})),c.a.createElement("div",{className:"cart__item-info"},c.a.createElement("h3",null,a),c.a.createElement("p",null,n," \u0442\u0435\u0441\u0442\u043e, ",r," \u0441\u043c.")),c.a.createElement("div",{className:"cart__item-count"},c.a.createElement("div",{onClick:function(){m(t)},className:"button button--outline button--circle cart__item-count-minus"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"}))),c.a.createElement("b",null,i),c.a.createElement("div",{onClick:function(){u(t)},className:"button button--outline button--circle cart__item-count-plus"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))),c.a.createElement("div",{className:"cart__item-price"},c.a.createElement("b",null,l," \u20bd")),c.a.createElement("div",{className:"cart__item-remove"},c.a.createElement(s,{onClick:function(){o(t)},className:"button--circle",outline:!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))))};function y(e){var t=e.id,a=e.name,n=e.imageUrl,r=e.price,l=e.types,i=e.sizes,m=e.onClickAddPizza,u=e.addedCount,d=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],p=[26,30,40],E=c.a.useState(l[0]),C=Object(v.a)(E,2),h=C[0],f=C[1],b=c.a.useState(0),_=Object(v.a)(b,2),y=_[0],k=_[1];return c.a.createElement("div",{className:"pizza-block"},c.a.createElement("img",{className:"pizza-block__image",src:n,alt:"Pizza"}),c.a.createElement("h4",{className:"pizza-block__title"},a),c.a.createElement("div",{className:"pizza-block__selector"},c.a.createElement("ul",null,d.map((function(e,t){return c.a.createElement("li",{key:e,onClick:function(){return function(e){f(e)}(t)},className:o()({active:h===t,disabled:!l.includes(t)})},e)}))),c.a.createElement("ul",null,p.map((function(e,t){return c.a.createElement("li",{key:e,onClick:function(){return function(e){k(e)}(t)},className:o()({active:y===t,disabled:!i.includes(e)})},e," \u0441\u043c.")})))),c.a.createElement("div",{className:"pizza-block__bottom"},c.a.createElement("div",{className:"pizza-block__price"},"\u043e\u0442 ",r," \u20bd"),c.a.createElement(s,{onClick:function(){var e={id:t,name:a,imageUrl:n,price:r,size:p[y],type:d[h]};m(e)},className:"button--add",outline:!0},c.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})),c.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),u&&c.a.createElement("i",null,u))))}y.defaultProps={name:"---",price:0,types:[],sizes:[]};var k=y,g=a(41);var w=function(){return c.a.createElement(g.a,{className:"pizza-block",speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},c.a.createElement("circle",{cx:"132",cy:"142",r:"115"}),c.a.createElement("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),c.a.createElement("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),c.a.createElement("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),c.a.createElement("rect",{x:"137",y:"408",rx:"25",ry:"25",width:"140",height:"46"}))},L=a(42),N=a.n(L),j=function(e){return{type:"SET_PIZZAS",payload:e}},O=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],z=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular",order:"desc"},{name:"\u0446\u0435\u043d\u0435",type:"price",order:"desc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442",type:"name",order:"asc"}];var P=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.pizzas.items})),a=Object(u.c)((function(e){return e.cart.items})),n=Object(u.c)((function(e){return e.pizzas.isLoaded})),r=Object(u.c)((function(e){return e.filters})),l=r.category,i=r.sortBy;c.a.useEffect((function(){e(function(e,t){return function(a){a({type:"SET_LOADED",payload:!1}),N.a.get("http://localhost:3001/pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=").concat(e.order)).then((function(e){var t=e.data;a(j(t))}))}}(i,l))}),[l,i]);var o=c.a.useCallback((function(t){e({type:"SET_CATEGORY",payload:t})}),[]),s=c.a.useCallback((function(t){var a;e({type:"SET_SORT_BY",payload:{type:(a=t).type,order:a.order}})}),[]),m=function(t){e({type:"ADD_PIZZA_CART",payload:t})};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content__top"},c.a.createElement(h,{activeCategory:l,onClickCategory:o,items:O}),c.a.createElement(b,{activeSortType:i.type,items:z,onClickSortType:s})),c.a.createElement("h2",{className:"content__title"},"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"),c.a.createElement("div",{className:"content__items"},n?t.map((function(e){return c.a.createElement(k,Object.assign({onClickAddPizza:m,key:e.id,addedCount:a[e.id]&&a[e.id].items.length},e))})):Array(12).fill(0).map((function(e,t){return c.a.createElement(w,{key:t})}))))},B=a(43),x=a.n(B);var M=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.cart})),a=t.totalPrice,n=t.totalCount,r=t.items,l=Object.keys(r).map((function(e){return r[e].items[0]})),i=function(t){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?")&&e(function(e){return{type:"REMOVE_CART_ITEM",payload:e}}(t))},o=function(t){e(function(e){return{type:"PLUS_CART_ITEM",payload:e}}(t))},d=function(t){e(function(e){return{type:"MINUS_CART_ITEM",payload:e}}(t))};return c.a.createElement("div",{className:"container container--cart"},n?c.a.createElement("div",{className:"cart"},c.a.createElement("div",{className:"cart__top"},c.a.createElement("h2",{className:"content__title"},c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("div",{className:"cart__clear"},c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",{onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&e({type:"CLEAR_CART"})}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),c.a.createElement("div",{className:"content__items"},l.map((function(e){return c.a.createElement(_,{key:e.id,id:e.id,name:e.name,type:e.type,size:e.size,totalPrice:r[e.id].totalPrice,totalCount:r[e.id].items.length,onRemove:i,onMinus:d,onPlus:o})}))),c.a.createElement("div",{className:"cart__bottom"},c.a.createElement("div",{className:"cart__bottom-details"},c.a.createElement("span",null,"\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",c.a.createElement("b",null,n," \u0448\u0442.")),c.a.createElement("span",null,"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",c.a.createElement("b",null,a," \u20bd"))),c.a.createElement("div",{className:"cart__bottom-buttons"},c.a.createElement("a",{href:"/",className:"button button--outline button--add go-back-btn"},c.a.createElement("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement(m.b,{to:"/"},c.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"))),c.a.createElement(s,{onClick:function(){console.log("\u0412\u0410\u0428 \u0417\u0410\u041a\u0410\u0417",r)},className:"pay-btn"},c.a.createElement("span",null,"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"))))):c.a.createElement("div",{className:"cart cart--empty"},c.a.createElement("h2",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",c.a.createElement("i",null,"\ud83d\ude15")),c.a.createElement("p",null,"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",c.a.createElement("br",null),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),c.a.createElement("img",{src:x.a,alt:"Empty cart"}),c.a.createElement(m.b,{to:"/",className:"button button--black"},c.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"))))},T=a(3);var A=function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(E,null),c.a.createElement("div",{className:"content"},c.a.createElement(T.a,{path:"/",component:P,exact:!0}),c.a.createElement(T.a,{path:"/cart",component:M,exact:!0})))},S=a(11),V=a(44),R=a(2),Z={category:null,sortBy:{type:"popular",order:"desc"}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return"SET_SORT_BY"===t.type?Object(R.a)(Object(R.a)({},e),{},{sortBy:t.payload}):"SET_CATEGORY"===t.type?Object(R.a)(Object(R.a)({},e),{},{category:t.payload}):e},I={items:[],isLoaded:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return"SET_PIZZAS"===t.type?Object(R.a)(Object(R.a)({},e),{},{items:t.payload,isLoaded:!0}):e},W=a(14),U=a(28),Y=a(45),G={items:{},totalPrice:0,totalCount:0},J=function(e){return e.reduce((function(e,t){return t.price+e}),0)},X=function(e,t){return Object.values(e).reduce((function(e,a){return e+function(e,t){var a=t.split("."),n=Object(Y.a)(a),c=n[0];return n.slice(1).reduce((function(e,t){return e[t]}),e[c])}(a,t)}),0)},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PIZZA_CART":var a=e.items[t.payload.id]?[].concat(Object(U.a)(e.items[t.payload.id].items),[t.payload]):[t.payload],n=Object(R.a)(Object(R.a)({},e.items),{},Object(W.a)({},t.payload.id,{items:a,totalPrice:J(a)})),c=X(n,"items.length"),r=X(n,"totalPrice");return Object(R.a)(Object(R.a)({},e),{},{items:n,totalCount:c,totalPrice:r});case"REMOVE_CART_ITEM":var l=Object(R.a)({},e.items),i=l[t.payload].totalPrice,o=l[t.payload].items.length;return delete l[t.payload],Object(R.a)(Object(R.a)({},e),{},{items:l,totalPrice:e.totalPrice-i,totalCount:e.totalCount-o});case"PLUS_CART_ITEM":var s=[].concat(Object(U.a)(e.items[t.payload].items),[e.items[t.payload].items[0]]),m=Object(R.a)(Object(R.a)({},e.items),{},Object(W.a)({},t.payload,{items:s,totalPrice:J(s)})),u=X(m,"items.length"),d=X(m,"totalPrice");return Object(R.a)(Object(R.a)({},e),{},{items:m,totalCount:u,totalPrice:d});case"MINUS_CART_ITEM":var p=e.items[t.payload].items,E=p.length>1?e.items[t.payload].items.slice(1):p,C=Object(R.a)(Object(R.a)({},e.items),{},Object(W.a)({},t.payload,{items:E,totalPrice:J(E)})),h=X(C,"items.length"),v=X(C,"totalPrice");return Object(R.a)(Object(R.a)({},e),{},{items:C,totalCount:h,totalPrice:v});case"CLEAR_CART":return{totalPrice:0,totalCount:0,items:{}};default:return e}},F=Object(S.c)({filters:H,pizzas:D,cart:q}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d,Q=Object(S.e)(F,K(Object(S.a)(V.a)));l.a.render(c.a.createElement(m.a,null,c.a.createElement(u.a,{store:Q},c.a.createElement(A,null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c4b37a95.chunk.js.map