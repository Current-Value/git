(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(41),a=n(5),c="SEND_MESSAGE",i={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3zdkU",selectedPage:"users_selectedPage__wTK3G"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8c3b9947-a7a3-4dd2-90f1-8059403eafb4"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},168:function(e,t,n){},169:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__2xSPb",item:"Navbar_item__Il3bt",activeLink:"Navbar_activeLink__6FyN-"}},290:function(e,t,n){"use strict";n.r(t);var r=n(1),a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,302)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},c=n(0),i=n.n(c),s=n(65),o=n.n(s),u=(n(168),n(36)),l=n(37),d=n(39),f=n(38),j=(n(169),n(20)),b=n.n(j),p=n(22),g=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(r.jsx)(p.b,{to:"/users",activeClassName:b.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)("a",{children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)("a",{children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)("a",{children:"Settings"})})]})},h=n(11),O=n(16),m=n(10),v=n.n(m),x=n(19),w=n(41),P=n(5),C=n(14),S=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),r):e}))},k="FOLLOW",y="UNFOLLOW",E="SET_USERS",A="SET_CURRENT_PAGE",_="SET_TOTAL_USERS_COUNT",I="TOGGLE_IS_FETCHING",U="TOGGLE_IS_FOLLOWING_PROGRESS",N={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},T=function(e){return{type:k,userId:e}},z=function(e){return{type:y,userId:e}},F=function(e){return{type:A,currentPage:e}},J=function(e){return{type:I,isFetching:e}},L=function(e,t){return{type:U,isFetching:e,userId:t}},R=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(P.a)(Object(P.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!0})});case y:return Object(P.a)(Object(P.a)({},e),{},{users:S(e.users,t.userId,"id",{followed:!1})});case E:return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case A:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case _:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case I:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case U:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(w.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},G=n(45),M=n(69),B=n(129),H=n(71),K=n.n(H),Y=n(133),q=n.n(Y),Q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,i=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/o),j=Object(c.useState)(1),b=Object(B.a)(j,2),p=b[0],g=b[1],h=(p-1)*o+1,O=p*o;return Object(r.jsxs)("div",{className:K.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){g(p-1)},children:"<<"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:q()(Object(M.a)({},K.a.selectedPage,a===e),K.a.pageNumber),onClick:function(t){i(e)},children:e},e)})),f>p&&Object(r.jsx)("button",{onClick:function(){g(p+1)},children:">>"})]})},W=n(134),Z=n.n(W),V=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg==",className:Z.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},X=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,i=e.users,s=Object(G.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(Q,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:i.map((function(e){return Object(r.jsx)(V,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},$=n(67),ee=n(9),te=n(135),ne=function(e){return e.usersPage.users},re=(Object(te.a)(ne,(function(e){return e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSize}),ae=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},oe=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)($.a,{}):null,Object(r.jsx)(X,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),ue=Object(ee.compose)(Object(O.b)((function(e){return{users:ne(e),pageSize:re(e),totalUsersCount:ae(e),currentPage:ce(e),isFetching:ie(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,C.c.follow.bind(C.c),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,C.c.unfollow.bind(C.c),z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:F,toggleFollowingProgress:L,getUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(F(e)),n.next=4,C.c.getUsers(e,t);case 4:a=n.sent,r(J(!1)),r((i=a.items,{type:E,users:i})),r((c=a.totalCount,{type:_,count:c}));case 8:case"end":return n.stop()}var c,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),le=n(94),de=n.n(le),fe=function(e){return Object(r.jsxs)("header",{className:de.a.header,children:[Object(r.jsx)("img",{src:"https://www.freelogodesign.org/file/app/client/thumb/4ab55ad7-33c3-455c-90c7-c0305fc8eb9f_200x200.png?1609680675892"}),Object(r.jsx)("div",{className:de.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[" ",e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(p.b,{to:"/login",children:"Login"})})]})},je=n(34),be="network/auth/SET_USER_DATA",pe={userId:null,email:null,login:null,isAuth:!1},ge=function(e,t,n,r){return{type:be,payload:{userId:e,email:t,login:n,isAuth:r}}},he=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(ge(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},me=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(fe,Object(P.a)({},this.props))}}]),n}(i.a.Component),ve=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(me),xe=n(128),we=n(33),Pe=n(56),Ce=n(53),Se=n.n(Ce),ke=Object(xe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(we.c)("Email","email",[Pe.b],we.a),Object(we.c)("Password","password",[Pe.b],we.a,{type:"password"}),Object(we.c)(null,"remember me",null,we.a,{type:"checkbox"},"remember me"),n&&Object(r.jsx)("div",{className:Se.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ye=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(v.a.mark((function r(a){var c,i;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(he()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(je.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(ke,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ee="INITIALIZED_SUCCESS",Ae={initialized:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},Ie=n(97),Ue=n(127),Ne={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;return e},ze=n(137),Fe=n(130),Je=Object(ee.combineReducers)({profilePage:Ie.b,dialogsPage:Ue.a,sidebar:Te,usersPage:D,auth:Oe,form:Fe.a,app:_e}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.compose,Re=Object(ee.createStore)(Je,Le(Object(ee.applyMiddleware)(ze.a)));window.__store__=Re;var De=Re,Ge=function(e){return function(t){return Object(r.jsx)(i.a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(e,Object(P.a)({},t))})}},Me=i.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),Be=i.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),He=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ve,{}),Object(r.jsx)(g,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(h.b,{path:"/dialogs",render:Ge(Me)}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:Ge(Be)}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(ue,{})}}),Object(r.jsx)(h.b,{path:"/login",render:function(){return Object(r.jsx)(ye,{})}})]})]}):Object(r.jsx)($.a,{})}}]),n}(i.a.Component),Ke=Object(ee.compose)(h.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(he()).then((function(){e({type:Ee})}))}}}))(He),Ye=function(e){return Object(r.jsx)(p.a,{children:Object(r.jsx)(O.a,{store:De,children:Object(r.jsx)(Ke,{})})})};o.a.render(Object(r.jsx)(Ye,{}),document.getElementById("root")),a()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(5),a=n(1),c=n(45),i=(n(0),n(53)),s=n.n(i),o=(n(56),n(90)),u=function(e){e.input;var t=e.meta,n=(e.child,Object(c.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(a.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:[Object(a.jsx)("div",{children:n.children}),r&&Object(a.jsx)("span",{children:t.error})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},i))," ",s]})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__39sqP",error:"FormsControls_error__2xbf4",formSummaryError:"FormsControls_formSummaryError__zSz6L"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},67:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/ZZ5H.a1a99674.gif");t.a=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"white"},children:Object(r.jsx)("img",{src:a})})}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__2QHbE",pageNumber:"Paginator_pageNumber__2RmnF",selectedPage:"Paginator_selectedPage__bMTYU"}},94:function(e,t,n){e.exports={header:"Header_header__4GK5D",loginBlock:"Header_loginBlock__14vg1"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(10),a=n.n(r),c=n(19),i=n(41),s=n(5),o=n(14),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",j={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"blabla",likesCount:11},{id:4,message:"dada",likesCount:11}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case f:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.0331eb17.chunk.js.map