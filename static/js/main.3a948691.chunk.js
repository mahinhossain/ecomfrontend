(this.webpackJsonpecomfrontend=this.webpackJsonpecomfrontend||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var r=c(3),a=c(1),n=c(27),s=c.n(n),o=(c(65),c(114)),l=c(9),i=c(8),d=c(10),u=(c(66),c(18)),j=c.n(u),b=c(7),p=c.n(b),O=c(16),m=c(21),h=c.n(m),f="GET_PRODUCTS",x="GET_PRODUCT",g="CART_ITEM_ADDED",v="USER_LOGIN",y="CART_FOR_CHECKOUT",w="SEARCH_TEXT",N="CART_ITEM_REMOVE",S="ERROR",I="LOGOUT",C="USER_REGISTRATION",R="PROFILE",k="GET_LOADING",E="PLACE_ORDER",P=(c(96),"https://protected-badlands-43308.herokuapp.com"),T=[],_=c(0);function A(){var e=Object(i.useHistory)(),t=Object(r.b)(),c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],o=n[1];console.log("user1 :>> ",s);var u=Object(r.c)((function(e){return e.Reducer.userLoginInfo})),j=Object(r.c)((function(e){return e.Reducer.userRegInfo})),b=Object(r.c)((function(e){return e.Reducer.cartItemAdded}));Object(r.c)((function(e){return e.Reducer.logout}));console.log("user2 :>> ",s),Object(a.useEffect)((function(){var e=localStorage.getItem("userloged");if(e){var t=JSON.parse(e);o(t)}}),[u,j]);var m=function(){t(function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userloged"),t({type:I,payload:"Logout Success"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("user3 :>> ",s),o(""),e.push("/login")};return console.log("user ",s),Object(_.jsxs)("div",{className:"",children:[Object(_.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark  p-0 m-0",children:[s?Object(_.jsxs)("div",{class:"dropdown p-2",children:[Object(_.jsx)("button",{class:" dropdown-toggle nav-item bg-dark text-white",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:s.name}),Object(_.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenu2",children:[Object(_.jsx)("button",{class:"dropdown-item nav-item",type:"button",onClick:function(){return m()},children:"Logout"}),Object(_.jsx)("button",{class:"dropdown-item nav-item bg-dark-gray",type:"button",onClick:function(){e.push("/profile")},children:"Profile"})]})]}):null,Object(_.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(_.jsx)("span",{class:"navbar-toggler-icon"})}),Object(_.jsxs)("div",{class:"collapse navbar-collapse p-0 ",id:"navbarSupportedContent",children:[Object(_.jsxs)("ul",{class:"navbar-nav mr-auto ",children:[Object(_.jsx)("li",{class:"nav-item  ",children:Object(_.jsx)(d.b,{to:"/"})}),Object(_.jsx)("li",{class:"nav-item",children:Object(_.jsx)(d.b,{to:"/shop",children:"Shop"})}),Object(_.jsx)("li",{class:"nav-item ",children:Object(_.jsxs)(d.b,{to:"/cart",children:["Cart"," ",Object(_.jsx)("span",{className:" badge-danger badge-pill ",children:b.length})," "]})}),Object(_.jsx)("li",{class:"nav-item",children:Object(_.jsx)(d.b,{to:"/test",children:"Other"})}),s?null:Object(_.jsx)("li",{class:"nav-item",children:Object(_.jsx)(d.b,{to:"/login",children:"Login"})})]}),Object(_.jsx)("form",{class:"form-inline my-lg-0 nav-item",children:Object(_.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t((c=e.target.value,function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:w,payload:c});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var c}})})]})]})," "]})}function L(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.Reducer.products})),c=Object(a.useState)([]),n=Object(l.a)(c,1)[0],s=Object(a.useState)(JSON.parse(localStorage.getItem("userloged"))),o=Object(l.a)(s,1)[0];Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.next=4,h.a.get("".concat(P,"/api/products")).then((function(e){c=e.data,t({type:k,payload:!1})})).catch((function(e){return console.log("err :>> ",e)}));case 4:t({type:f,payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[n,o]);var i=Object(r.c)((function(e){return e.Reducer.searchText})),u=Object(r.c)((function(e){return e.Reducer.loading}));return Object(_.jsx)("div",{className:"container-fluid",children:u?Object(_.jsx)("div",{className:"d-flex justify-content-center text-center  fa-3x align-items-center mt-5",children:Object(_.jsx)("div",{class:"text-danger  spinner-border mt-5 ",role:"status",children:Object(_.jsx)("span",{class:"sr-only",children:"Loading...................."})})}):Object(_.jsxs)("div",{children:[" ",Object(_.jsx)("h2",{className:"text-center text-warning",children:"Happy Shopping"}),Object(_.jsx)("div",{className:"row",children:t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).map((function(e){return Object(_.jsxs)("div",{className:"col-md-3  mb-2",children:[" ",Object(_.jsxs)("div",{class:"card  w-75  shadow-2xl ",children:[Object(_.jsxs)(d.b,{to:"/productDetails/"+e._id,children:[" ",Object(_.jsx)("img",{className:"card-img-top img-fluid p-3 ",src:e.img,alt:"name"})]}),Object(_.jsxs)("div",{class:"card-body",children:[Object(_.jsx)("p",{className:"text-truncate",children:e.name}),Object(_.jsxs)("div",{className:"row  ",children:[" ",Object(_.jsxs)("p",{className:"btn-success badge-success badge",children:["Seller:",e.brand]}),Object(_.jsxs)("p",{className:"btn-primary badge-warning badge",children:["Price:",e.price]}),0==e.inStock?Object(_.jsx)("p",{className:"btn-danger badge-warning badge   ",children:"Out of Stock"}):Object(_.jsxs)("p",{className:"  badge-warning badge text-dark",children:["In Stock:",e.inStock]})]})]})]})]},e._id)}))}),Object(_.jsx)("div",{className:"row"})]})})}var H=c(2);function q(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.Reducer.userLoginInfo}));console.log("loginInfo :>> ",t);var c=Object(r.c)((function(e){return e.Reducer.cartItemAdded})),n=JSON.parse(localStorage.getItem("userloged")),s=Object(a.useState)(c),o=Object(l.a)(s,2),d=o[0],u=o[1];Object(a.useEffect)((function(){u(c)}),[e,c]);var j=function(t){e(function(e){return function(){var t=Object(O.a)(p.a.mark((function t(c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:N,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},b=d.reduce((function(e,t){return e+Math.round(t.price)*t.quantity}),0),m=d.reduce((function(e,t){return e+Math.round(t.quantity)}),0),h={cart:d,user:n,totalItem:m,totalPrice:b},f=Object(i.useHistory)(),x=function(){var t;e((t=h,function(){var e=Object(O.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({type:y,payload:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),n?f.push("/checkout"):f.push("/login")};return Object(_.jsx)("div",{className:"container",children:d.length?Object(_.jsxs)("div",{className:" row",children:[" ",Object(_.jsxs)("div",{className:"col-md-9 border-right  ",children:[" ",Object(_.jsx)("h2",{className:" text-center ",children:"Your Cart"}),Object(_.jsxs)("div",{children:[" ",d.map((function(e,t){return Object(_.jsxs)("div",{className:"row bg-light border-bottom mb-5  border",children:[Object(_.jsx)("div",{className:"col-md-2 p-0 m-0 ",children:Object(_.jsx)("img",{src:e.img,alt:"",className:"img-fluid "})}),Object(_.jsxs)("div",{className:"col-md-8 row border-0  ",children:[Object(_.jsxs)("div",{className:"col-md-6 d-flex  flex-column justify-content-between  ",children:[" ",Object(_.jsx)("div",{className:"text-truncate",children:e.name}),Object(_.jsxs)("div",{className:"text-bold fw-bold",children:["Seller:",e.brand]}),Object(_.jsxs)("div",{className:"text-bold fw-bold text-danger",children:["Price:$",Math.floor(e.price)]}),Object(_.jsxs)("button",{className:"  btn-warning btn-sm   ",onClick:function(){return j(e)},children:[" ","Remove from cart"]})]}),Object(_.jsxs)("div",{className:"col-md-6 d-flex  flex-column justify-content-between   ",children:[Object(_.jsx)("button",{disabled:e.quantity<=1,className:" btn-danger btn-sm  w-25",onClick:function(){return function(e){var t=d.map((function(t){return t._id==e._id?Object(H.a)(Object(H.a)({},t),{},{quantity:t.quantity-1}):t})).filter((function(e){return 0!==e.quantity}));u(t)}(e)},children:"-"}),Object(_.jsxs)("h5",{children:[" ",e.quantity," x $",Math.round(e.price),"= $",Math.round(e.price*e.quantity)]}),Object(_.jsxs)("h5",{children:["Items Price:$",Math.round(e.price)*e.quantity]}),Object(_.jsx)("button",{className:" btn-success btn-sm w-25",onClick:function(){return function(e){var t=d.map((function(t){return t._id==e._id?Object(H.a)(Object(H.a)({},t),{},{quantity:t.quantity+1}):t}));u(t)}(e)},children:"+"})]})]})]})}))]})]}),Object(_.jsxs)("div",{className:"col-md-3",children:[" ",Object(_.jsxs)("h3",{className:"text-warning",children:["Total Price:",b]}),Object(_.jsxs)("h3",{className:"text-warning",children:["Total Item:",m]}),Object(_.jsx)("button",{className:"btn btn-success",onClick:function(){return x()},children:"Chekout"})]})]}):Object(_.jsxs)("div",{children:[" ",Object(_.jsx)("h1",{className:"text-center ",children:"Empty Cart"})]})})}c(102);function J(){var e=Object(r.c)((function(e){return e.Reducer.cartForCheckout})),t=Object(r.c)((function(e){return e.Reducer.placeOrder})),c=Object(a.useState)({}),n=Object(l.a)(c,2),s=n[0],o=n[1];console.log("shippingAdress",s);var i=Object(r.b)(),d=e.cart,u=e.user,b=e.totalPrice,m=e.totalItem;console.log("cartForCheckout",e);var f=function(e,t){var c=Object(H.a)({},s);c[t]=e,o(c)},x=function(){var e,t={orderItems:d,totalPrice:b,user:u,shippingAdress:s,paymentMethod:"cash",taxPrice:12,shippingPrice:50,itemPrice:12,totalItem:m};console.log("myobj",t),i((e=t,function(){var t=Object(O.a)(p.a.mark((function t(c){var r,a,n,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("userloged")),a=r.token,console.log("token",a),s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}},t.next=5,h.a.post("".concat(P,"/api/orders"),e,s).then((function(e){n=e.data,console.log("data order",n),j.a.fire({position:" center",icon:"success",title:" Success",showConfirmButton:!1,timer:1100})})).catch((function(e){c({type:S,payload:"Error"})}));case 5:console.log("data :>> ",n),c({type:E,payload:n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))};return console.log("placeOrder :>> ",t),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{class:"row",children:[Object(_.jsxs)("div",{class:"col-md-6",children:[Object(_.jsxs)("div",{class:"right border p-0",children:[Object(_.jsx)("div",{class:"header1",children:"Order Summary"}),d.map((function(e){return Object(_.jsxs)("div",{class:" d-flex justify-content-between align-content-center border-2 mb-3",children:[Object(_.jsx)("img",{class:" img-thumbnail text-center",src:e.img}),Object(_.jsxs)("p",{children:["$",e.price]}),Object(_.jsxs)("p",{class:" text-truncate",children:[" ",e.name]}),Object(_.jsx)("p",{class:"",children:e.amount})]})})),Object(_.jsx)("div",{class:"row lower",children:Object(_.jsx)("div",{class:"col text-right"})})]}),Object(_.jsxs)("div",{class:"bg-light border-bottom  w-50 p-2",children:[Object(_.jsxs)("h6",{className:"text-danger border-bottom",children:[" ","Items Price ",Object(_.jsxs)("span",{className:"float-right",children:[" ","$",b]})," "]}),Object(_.jsxs)("h6",{className:" border-bottom",children:["Total Items",Object(_.jsxs)("span",{className:"float-right",children:["$ ",m]})]}),Object(_.jsxs)("h6",{className:" border-bottom",children:[" ","Shipping ",Object(_.jsxs)("span",{className:"float-right",children:[" ","$ ",50]})," "]}),Object(_.jsxs)("h6",{className:" border-bottom",children:["Tax $ ",Object(_.jsxs)("span",{className:"float-right",children:[" $ ",12]})," "]}),Object(_.jsxs)("h6",{className:" border-bottom",children:["Total Price"," ",Object(_.jsxs)("span",{className:"float-right",children:[" ","$ ",b+50+12]})," "]})]})]}),Object(_.jsx)("div",{class:"col-md-6",children:Object(_.jsxs)("div",{class:"left border",children:[Object(_.jsxs)("div",{class:"row",children:[Object(_.jsx)("span",{class:"header1",children:"Shipping Adress"}),Object(_.jsx)("div",{class:"icons  d-flex justify-between"})]}),Object(_.jsxs)("form1",{children:[Object(_.jsx)("span",{children:"adress:"})," ",Object(_.jsx)("input",{value:s.adress,className:"form-control",onChange:function(e){return f(e.target.value,"adress")}})," ",Object(_.jsx)("span",{children:"City:"})," ",Object(_.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return f(e.target.value,"city")},value:s.city}),Object(_.jsx)("span",{children:"Postral Code"})," ",Object(_.jsx)("input",{type:"number",className:"form-control",onChange:function(e){return f(e.target.value,"postalcode")},value:s.postalcode}),Object(_.jsx)("span",{children:"Country :"})," ",Object(_.jsx)("input",{className:"form-control",onChange:function(e){return f(e.target.value,"country")},value:s.country}),Object(_.jsxs)("div",{class:"row p-0 m-0",children:[Object(_.jsx)("div",{class:"col-md-4 p-0 m-0"}),Object(_.jsx)("div",{class:"col-md-4"})]})," ",Object(_.jsx)("input",{type:"checkbox",id:"save_card",class:"align-left"})," ",Object(_.jsx)("label",{for:"save_card",children:"Save card details to wallet"})]}),Object(_.jsx)("button",{class:"btn1",onClick:function(){return x()},children:"Place Order"})]})}),Object(_.jsx)("div",{children:" "})]})})}var D=c(23),M=c.n(D),$=c(52);function G(){var e=Object(r.b)(),t=Object(i.useLocation)(),c=Object(i.useHistory)(),n=Object(r.c)((function(e){return e.Reducer.userLoginInfo})),s=Object(r.c)((function(e){return e.Reducer.err})),o=c.search?t.search.split("=")[1]:"/",d=Object(a.useState)({email:"",password:""}),u=Object(l.a)(d,2),j=u[0],b=u[1],m=JSON.parse(localStorage.getItem("userloged"));console.log("user :>> ",m),Object(a.useEffect)((function(){m&&c.push(o)}),[n,j]);var f=function(e,t){var c=Object(H.a)({},j);c[t]=e,b(c)},x=function(t){var c;t.preventDefault(),e((c=j,function(){var e=Object(O.a)(p.a.mark((function e(t){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.next=3,h.a.post("".concat(P,"/api/user/login"),c,a).then((function(e){r=e.data,localStorage.setItem("userloged",JSON.stringify(r))})).catch((function(e){t({type:S,payload:"Invalid UserName or Password"})}));case 3:console.log("data :>> ",r),t({type:v,payload:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(_.jsxs)("div",{className:" d-flex  justify-content-center ",children:[" ",Object(_.jsxs)("form",{className:" form-control-sm  col-md-6  ",children:[Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(_.jsx)("input",{type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return f(e.target.value,"email")},value:j.email}),Object(_.jsx)("small",{id:"emailHelp",class:"form-text text-muted"})]}),Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(_.jsx)("input",{type:"password",class:"form-control",placeholder:"Password",onChange:function(e){return f(e.target.value,"password")},value:j.password})]}),s?Object(_.jsx)("div",{class:"alert alert-danger",role:"alert",children:s}):null,Object(_.jsx)("button",{class:"btn btn-success rounded btn-sm",onClick:function(e){return x(e)},children:"Login"}),Object(_.jsxs)($.Link,{class:"font-bold btn btn-secondary p-2 float-end",to:"/register",children:[" ","Go to Register"]})]})]})}c(103);function U(){var e=Object(r.c)((function(e){return e.Reducer.cartItemAdded}));return console.log("cartItem :>> ",e),Object(_.jsx)("div",{children:Object(_.jsx)("div",{class:"card",children:Object(_.jsx)("div",{class:"row",children:Object(_.jsxs)("div",{class:"col-md-8 cart",children:[Object(_.jsx)("div",{class:"title",children:Object(_.jsxs)("div",{class:"row",children:[Object(_.jsx)("div",{class:"col",children:Object(_.jsx)("h4",{children:Object(_.jsx)("b",{children:"Shopping Cart"})})}),Object(_.jsx)("div",{class:"col align-self-center text-right text-muted",children:"3 items"})]})}),e.map((function(e){return Object(_.jsx)("div",{class:"row border-top border-bottom  p-3 ",children:Object(_.jsxs)("div",{class:"row main align-items-center",children:[Object(_.jsx)("div",{class:"col-2",children:Object(_.jsx)("img",{class:"img-fluid",src:e.img})}),Object(_.jsx)("div",{class:"col",children:Object(_.jsx)("div",{class:"row text-muted text-truncate",children:e.name})}),Object(_.jsxs)("div",{className:"d-flex",children:["   ",Object(_.jsx)("button",{className:"btn btn-success",children:"-"}),Object(_.jsx)("h2",{classname:"",children:"1"}),Object(_.jsx)("button",{className:"btn btn-danger",children:"+"})," "]})]})})}))]})})})})}c(104);var B=c(53),F=c.n(B),z=c(115);function K(){var e=Object(r.b)(),t=Object(i.useParams)().id;Object(a.useEffect)((function(){e(function(e){return function(){var t=Object(O.a)(p.a.mark((function t(c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("".concat(P,"/api/products/").concat(e)).then((function(e){T=e.data})).catch((function(e){return console.log("err :>> ",e)}));case 2:c({type:x,payload:T});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[]);var c=Object(r.c)((function(e){return e.Reducer.product}));console.log("product :>> ",c);var n=function(t){e(function(e){return function(){var t=Object(O.a)(p.a.mark((function t(c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.quantity=1,c({type:g,payload:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(_.jsx)("div",{class:"container",children:Object(_.jsxs)("div",{class:" row",id:"ads",children:[Object(_.jsx)("div",{class:"card-image col-md-4 card",children:Object(_.jsx)("img",{class:"img-fluid",src:c.img,alt:"Alternate Text"})}),Object(_.jsxs)("div",{class:" rounded col-md-8 card justify-content-evenly",children:[Object(_.jsx)("h3",{className:"text-danger",children:c.name}),Object(_.jsxs)("div",{className:"d-flex justify-content-between",children:[" ",Object(_.jsx)("p",{class:"badge-danger badge badge-pill",children:"Brand New"}),Object(_.jsxs)("p",{class:"  badge-danger badge-pill",children:["$ ",c.price]}),Object(_.jsx)(F.a,{className:"badge-danger badge-pill",rating:c.rating,starRatedColor:"yellow",numberOfStars:5,name:"rating",starDimension:"20px",starSpacing:"5px"})]}),Object(_.jsxs)("span",{class:"card-detail-badge",children:["In Stock: ",c.inStock]}),Object(_.jsxs)("span",{class:"card-detail-badge",children:["category: ",c.category]}),Object(_.jsxs)("span",{class:"card-detail-badge",children:["In Stock: ",c.brand]}),Object(_.jsxs)("span",{class:"",children:["Description: ",c.desccription]}),Object(_.jsxs)(z.a,{class:" badge-danger badge",children:["Stock: ",c.inStock]}),Object(_.jsxs)("span",{className:"d-flex   justify-content-end",children:[" ",Object(_.jsxs)("button",{class:"  btn-success btn w-50 m-2 badge-pill ",onClick:function(){return n(c)},children:[" ","Add tocart"]})]})]})]})})}function V(){var e=Object(r.b)(),t=Object(i.useLocation)(),c=Object(i.useHistory)(),n=Object(r.c)((function(e){return e.Reducer.userRegInfo}));console.log("userInfoReg  top :>> ",n);var s=Object(r.c)((function(e){return e.Reducer.err})),o=(JSON.parse(localStorage.getItem("userloged")),c.search?t.search.split("=")[1]:"/"),u=Object(a.useState)({email:"",password:"",name:"",confirmpassword:""}),b=Object(l.a)(u,2),m=b[0],f=b[1],x=function(e,t){var c=Object(H.a)({},m);c[t]=e,f(c)},g=function(t){if(t.preventDefault(),m.password!=m.confirmpassword)return alert("password not match"),!1;var c;e((c=m,function(){var e=Object(O.a)(p.a.mark((function e(t){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.next=3,h.a.post("".concat(P,"/api/user/"),c,a).then((function(e){(r=e.data)&&"User already Exists"==r&&j.a.fire({position:" center",icon:"error",title:" User already Exists",showConfirmButton:!1,timer:1100}),r._id&&(j.a.fire({position:" center",icon:"success",title:" Success",showConfirmButton:!1,timer:1100}),localStorage.setItem("userloged",JSON.stringify(r)),t({type:C,payload:r}))})).catch((function(e){t({type:S,payload:"Faild"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};console.log("userInfoReg  end :>> ",n),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userloged"));console.log("user :>> ",e),e&&c.push(o)}),[n]);return Object(_.jsxs)("div",{className:" d-flex  justify-content-center ",children:[" ",Object(_.jsxs)("form",{className:" form-control-sm  col-md-6  ",children:[Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputEmail1",children:"Name"}),Object(_.jsx)("input",{required:!0,type:"name",class:"form-control","aria-describedby":"emailHelp",placeholder:"name",onChange:function(e){return x(e.target.value,"name")},value:m.name}),Object(_.jsx)("small",{id:"emailHelp",class:"form-text text-muted"})]}),Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(_.jsx)("input",{required:!0,type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return x(e.target.value,"email")},value:m.email}),Object(_.jsx)("small",{id:"emailHelp",class:"form-text text-muted"})]}),Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(_.jsx)("input",{type:"password",class:"form-control",placeholder:"Password",onChange:function(e){return x(e.target.value,"password")},value:m.password})]}),Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputPassword1",children:"Confirm Password"}),Object(_.jsx)("input",{type:"password",class:"form-control",placeholder:"Password",onChange:function(e){return x(e.target.value,"confirmpassword")},value:m.confirmpassword})]}),s?Object(_.jsx)("div",{class:"alert alert-danger",role:"alert",children:s}):null,Object(_.jsxs)("div",{className:"d-flex flex-row  justify-content-around",children:[" ",Object(_.jsx)("button",{class:" rounded  btn-outline-success font-bold btn btn-secondary p-2  ",onClick:function(e){return g(e)},children:"Register"})," ",Object(_.jsx)(M.a,{className:"ml-3 rounded btn-sm btn text-capitalize text-success ",clientId:"361697230440-c93vesn28pho26m4hjsrskm983c26ks3.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:function(e){var t=e.profileObj;t.name,t.email,t.imageUrl;console.log("object :>> ",e.profileObj)},onFailure:function(e){j.a.fire("error","","error")},cookiePolicy:"single_host_origin"}),Object(_.jsxs)(d.b,{class:"font-bold btn btn-secondary float-end ",to:"/login",children:[" ","Go to Login"]})]})]})]})}function W(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("userloged"))),t=Object(l.a)(e,2),c=t[0];t[1];return console.log("profile :>> ",c),Object(_.jsx)("div",{children:Object(_.jsxs)("form",{className:" form-control-sm  col-md-6  ",children:[Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputEmail1",children:"Name"}),Object(_.jsx)("input",{required:!0,type:"name",class:"form-control","aria-describedby":"emailHelp",placeholder:"name",value:c.name}),Object(_.jsx)("small",{id:"emailHelp",class:"form-text text-muted"})]}),Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(_.jsx)("input",{required:!0,type:"email",class:"form-control","aria-describedby":"emailHelp",placeholder:"Enter email",value:c.email}),Object(_.jsx)("small",{id:"emailHelp",class:"form-text text-muted"})]}),Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(_.jsx)("input",{type:"password",class:"form-control",placeholder:"Password",value:c.password})]}),Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{for:"exampleInputPassword1",children:"Confirm Password"}),Object(_.jsx)("input",{type:"password",class:"form-control",placeholder:"Password",value:c.confirmpassword})]})]})})}var X=function(){return Object(_.jsxs)(d.a,{children:[Object(_.jsx)(o.a,{}),Object(_.jsx)(A,{}),Object(_.jsxs)(i.Switch,{children:[Object(_.jsx)(i.Route,{exact:!0,path:"/",children:Object(_.jsx)(L,{})}),Object(_.jsx)(i.Route,{path:"/login",children:Object(_.jsx)(G,{})}),Object(_.jsx)(i.Route,{path:"/shop",children:Object(_.jsx)(L,{})}),Object(_.jsx)(i.Route,{path:"/cart",children:Object(_.jsx)(q,{})}),Object(_.jsx)(i.Route,{path:"/test",children:Object(_.jsx)(U,{})}),Object(_.jsx)(i.Route,{path:"/register",children:Object(_.jsx)(V,{})}),Object(_.jsx)(i.Route,{path:"/profile",children:Object(_.jsx)(W,{})}),Object(_.jsx)(i.Route,{path:"/productDetails/:id",children:Object(_.jsx)(K,{})}),Object(_.jsx)(i.Route,{path:"*",children:Object(_.jsx)(J,{})})]})]})},Y=c(20),Q=c(34),Z=c(55),ee=c(29),te=JSON.parse(localStorage.getItem("cart")),ce={products:[],product:{},err:"",logout:"",cartItemAdded:te||[],userLoginInfo:"",cartForCheckout:"",searchText:"",userRegInfo:"",profile:"",loading:!0,placeOrder:""};var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(H.a)(Object(H.a)({},e),{},{products:t.payload});case x:return Object(H.a)(Object(H.a)({},e),{},{product:t.payload});case g:var c=t.payload,r=[].concat(Object(ee.a)(e.cartItemAdded),[c]);j.a.fire({position:" center",icon:"success",title:" Added to Cart",showConfirmButton:!1,timer:1100});var a=e.cartItemAdded.find((function(e){return e._id==c._id}));return a?(j.a.fire({position:" center",icon:"error",title:"Already Added to Cart",showConfirmButton:!1,timer:1100}),Object(H.a)(Object(H.a)({},e),{},{cartItemAdded:e.cartItemAdded.map((function(e){return e._id==a._id?c:e}))})):(localStorage.setItem("cart",JSON.stringify(r)),Object(H.a)(Object(H.a)({},e),{},{cartItemAdded:r}));case N:var n=t.payload,s=e.cartItemAdded.filter((function(e){return e._id!==n._id}));return localStorage.setItem("cart",JSON.stringify(s)),Object(H.a)(Object(H.a)({},e),{},{cartItemAdded:s});case v:return Object(H.a)(Object(H.a)({},e),{},{userLoginInfo:t.payload});case C:return Object(H.a)(Object(H.a)({},e),{},{userRegInfo:t.payload});case S:return Object(H.a)(Object(H.a)({},e),{},{err:t.payload});case I:return Object(H.a)(Object(H.a)({},e),{},{logout:t.payload});case k:return Object(H.a)(Object(H.a)({},e),{},{loading:t.payload});case w:return Object(H.a)(Object(H.a)({},e),{},{searchText:t.payload});case y:return Object(H.a)(Object(H.a)({},e),{},{cartForCheckout:t.payload});case R:return Object(H.a)(Object(H.a)({},e),{},{profile:t.payload});case E:return Object(H.a)(Object(H.a)({},e),{},{placeOrder:t.payload})}return e},ae=Object(Y.combineReducers)({Reducer:re}),ne=[Q.a],se=[Y.applyMiddleware.apply(void 0,ne)],oe=Z.composeWithDevTools.apply(void 0,se);var le,ie=Object(Y.createStore)(ae,le,oe);s.a.render(Object(_.jsx)(r.a,{store:ie,children:Object(_.jsx)(X,{})}),document.getElementById("root"))},65:function(e,t,c){},66:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.3a948691.chunk.js.map