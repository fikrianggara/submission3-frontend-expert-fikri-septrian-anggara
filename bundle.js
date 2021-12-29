!function(n){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(u&&u(e);m.length;)m.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,s=1;s<t.length;s++){var c=t[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},i={2:0},a=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([10,1,0]),t()}({10:function(n,e,t){"use strict";t.r(e);t(4),t(5);var r={init:function(n){var e=this,t=n.button,r=n.drawer,i=n.content;t.addEventListener("click",(function(n){n.preventDefault(),e._toggleDrawer({event:n,drawer:r,content:i})})),i.addEventListener("click",(function(n){e._closeDrawer({event:n,drawer:r,content:i})}))},_toggleDrawer:function(n){var e=n.event,t=n.drawer;n.content.setAttribute("style","filter:brightness(0.4)"),e.stopPropagation(),t.classList.toggle("open")},_closeDrawer:function(n){var e=n.event,t=n.drawer;n.content.setAttribute("style",'filter:""'),e.stopPropagation(),t.classList.remove("open")}},i={BASE_URL:"https://restaurant-api.dicoding.dev",MEDIUM_PICTURE_URL:"https://restaurant-api.dicoding.dev/images/medium",SMALL_PICTURE_URL:"https://restaurant-api.dicoding.dev/images/small",CATEGORY:["Indonesian","Italian","Chinese","America","Eastern","Japanese"],CACHE_NAME:"RestaurantCatalogue-V1",DATABASE_NAME:"restaurant-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"},a={ALL_RESTAURANT:"".concat(i.BASE_URL,"/list"),DETAIL:function(n){return"".concat(i.BASE_URL,"/detail/").concat(n)}};function o(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function s(n){o(a,r,i,s,c,"next",n)}function c(n){o(a,r,i,s,c,"throw",n)}s(void 0)}))}}function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var l=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,o,l;return e=n,t=null,r=[{key:"allRestaurant",value:(l=s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.ALL_RESTAURANT);case 2:return t=e.sent,e.next=5,t.json();case 5:return(r=e.sent).restaurant=r.restaurants.forEach((function(e){n._addCategoryToRestaurant(e)})),e.abrupt("return",r.restaurants);case 8:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})},{key:"detailRestaurant",value:(o=s(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.DETAIL(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)}))),function(n){return o.apply(this,arguments)})},{key:"_addCategoryToRestaurant",value:function(e){return e.category=n._generateRestaurantCategory(),e}},{key:"_generateRestaurantCategory",value:function(){var n=Math.floor(Math.random()*i.CATEGORY.length);return i.CATEGORY[n]}},{key:"filterByCategory",value:function(n,e){return n.filter((function(n){return n.category===e}))}}],t&&c(e.prototype,t),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}(),u=function(n){return"\n    <li class='restaurant-item' id='".concat(n.id,'\'>\n                        <div class="item-left">\n                        <picture>\n                            <source class="item-img lazyload" media="(max-width: 600px)" srcset="').concat(i.SMALL_PICTURE_URL,"/").concat(n.pictureId,'" type="image/jpeg">\n                            <img class="item-img lazyload" src="').concat(i.MEDIUM_PICTURE_URL,"/").concat(n.pictureId,'" alt="').concat(n.name,"\"></img>\n                        </picture>\n                            <span class='rating'>").concat(n.rating,'</span>\n                        </div>\n                        <div class="item-right">\n                            <h2 class=\'item-res-name\'><a href="/#/detail/').concat(n.id,"\" class='detail-anchor'>").concat(n.name,"</a></h2>\n                            <h3 class='item-desc'>").concat(n.description,"\n                            </h3>\n                            <div class=\"location-rating-category\">\n                                <h4 class='item-rating'>").concat(n.rating,"</h4>\n                                <h4 class='item-loc'>").concat(n.city,'</h4>\n                                <h4 class="item-category">').concat(n.category,"</h4>\n                            </div>\n                        </div>\n                    </li>")},d=function(n){return'\n        <div class="top-detail-container">\n            <div class="top-image-detail-container">\n                <img class=\'detail-image\'src="'.concat(i.MEDIUM_PICTURE_URL,"/").concat(n.pictureId,'" alt="').concat(n.name,"\" />\n            </div>\n            <div class=\"bottom-image-detail-container\">\n                <h1 class='detail-name' tabindex='0'>").concat(n.name,"</h1>\n                <h2 class='detail-rating' tabindex='0'>").concat(n.rating," <span class='rating-star'>⭐️</span></h2>\n                <h3 class='detail-categories' tabindex='0'>\n                ").concat(n.categories.map((function(n){return n.name})).join(", "),"\n                </h3>\n                \n                <h3 class='detail-address'>").concat(n.city,", ").concat(n.address,"</h3>\n            </div>\n        </div>\n        <div class=\"bottom-detail-container\">\n            <p class='detail-description' tabindex='0' >").concat(n.description,"</p>\n            <div class=\"menu-container\">\n                <div class=\"menu-makanan\">\n                    <h3 class='makanan-title' tabindex='0'>Menu Makanan</h3>\n                    <ul class='list-makanan'>\n                        ").concat(n.menus.foods.map((function(n){return"<li tabindex='0'>".concat(n.name,"</li>")})).join(""),"\n                    </ul>\n                </div>\n                <div class=\"menu-minuman\">\n                    <h3 class='minuman-title' tabindex='0'>Menu Minuman</h3>\n                    <ul class='list-minuman'>\n                        ").concat(n.menus.drinks.map((function(n){return"<li tabindex='0'>".concat(n.name,"</li>")})).join(""),"\n                    </ul>\n                </div>\n            </div>\n            <div class=\"review-container\">\n            <h2 class='reviews-title' tabindex='0'>Reviews</h2>\n            <ul class='review-list'>\n                ").concat(n.customerReviews.map((function(n){return"<li class='review-item'>\n                    <h3 class='review-name' tabindex='0'>".concat(n.name,"</h3>\n                    <p class='review-review' tabindex='0'>").concat(n.review,"</p>\n                    <h4 class='review-date'>").concat(n.date,"</h4>\n                </li>")})).join(""),"\n            </ul>\n            </div>\n        </div>\n    ")};function m(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function p(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){m(a,r,i,o,s,"next",n)}function s(n){m(a,r,i,o,s,"throw",n)}o(void 0)}))}}var f={render:function(){return p(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return","\n            <section class=\"content\">\n\n            <article class='hero' id='hero'>\n                <div class=\"hero-image\">\n                    <img src=\"./images/heros/hero-image_4.jpg\" width=\"450\" alt=\"Hero Image\">\n                </div>\n                <div class=\"hero-desc\">\n                    <h1 name='motto' tabindex=\"0\">Find The Fine Food At </h1>\n                    <span class='hero-logo' tabindex=\"0\">Dine-In</span>\n                    <h2 tabindex=\"0\" name='motto description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n                        Accusamus dolorem similique voluptatum\n                        tempore expedita ad cupiditate quasi, adipisci, optio tenetur consequatur esse? Molestias\n                        consequatur id quam laboriosam pariatur nisi corporis, qui ratione. Et beatae necessitatibus\n                        odio ea facere tempore! Illum minima cupiditate nemo corrupti exercitationem vitae animi earum\n                        aperiam sunt!</h2>\n                </div>\n\n            </article>\n\n            <article class=\"restaurant\" id='maincontent'>\n                <h1 class='subtitle'>Our Restaurant Partner</h1>\n                <div class=\"category-list-container\">\n                    <ul class='category-list'>\n                        \n                            <li class='category'>\n                            <a clas='category-link' href=\"#\">\n                                <span class='category-value'>Indonesian</span>\n                                </a>\n                            </li>\n                        \n                            <li class='category'>\n                            <a clas='category-link' href=\"#\">\n                                <span class='category-value'>Italian</span>\n\n                                </a>\n                            </li>\n                            <li class='category'>\n                            <a clas='category-link' href=\"#\">\n                                <span class='category-value'>Chinese</span>\n\n                                </a>\n                            </li>\n                            <li class='category'>\n                            <a clas='category-link' href=\"#\">\n                                <span class='category-value'>American</span>\n\n                                </a>\n                            </li>\n                        <li class='category'>\n                        <a clas='category-link' href=\"#\">\n                                <span class='category-value'>Eastern</span>\n\n                                </a>\n                            </li>\n                        <li class='category'>\n                        <a clas='category-link' href=\"#\">\n                                <span class='category-value'>Japanese</span>\n\n                                </a>\n                            </li>\n\n                    </ul>\n                </div>\n                <ul class='restaurant-lists' id='restaurant-lists'>\n                </ul>\n\n            </article>\n        </section>\n    ");case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return p(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.allRestaurant();case 2:e=n.sent,t=document.getElementById("restaurant-lists"),e.forEach((function(n){t.innerHTML+=u(n)}));case 5:case"end":return n.stop()}}),n)})))()}},h={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},b=t(3);function g(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function x(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){g(a,r,i,o,s,"next",n)}function s(n){g(a,r,i,o,s,"throw",n)}o(void 0)}))}}var w=i.DATABASE_NAME,v=i.DATABASE_VERSION,k=i.OBJECT_STORE_NAME,y=Object(b.a)(w,v,{upgrade:function(n){n.createObjectStore(k,{keyPath:"id"})}}),R={getRestaurant:function(n){return x(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y;case 4:return e.abrupt("return",e.sent.get(k,n));case 5:case"end":return e.stop()}}),e)})))()},getAllRestaurant:function(){return x(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y;case 2:return n.abrupt("return",n.sent.getAll(k));case 3:case"end":return n.stop()}}),n)})))()},putRestaurant:function(n){return x(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.hasOwnProperty("id")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,y;case 4:return e.abrupt("return",e.sent.put(k,n));case 5:case"end":return e.stop()}}),e)})))()},deleteRestaurant:function(n){return x(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y;case 2:return e.abrupt("return",e.sent.delete(k,n));case 3:case"end":return e.stop()}}),e)})))()}};function _(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function z(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){_(a,r,i,o,s,"next",n)}function s(n){_(a,r,i,o,s,"throw",n)}o(void 0)}))}}var E={init:function(n){var e=this;return z(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.likeButtonContainer,i=n.restaurant,e._likeButtonContainer=r,e._restaurant=i.restaurant,t.next=5,e._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var n=this;return z(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._restaurant.id,e.next=3,n._isRestaurantExist(t);case 3:if(!e.sent){e.next=7;break}n._renderLiked(),e.next=8;break;case 7:n._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isRestaurantExist:function(n){return z(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getRestaurant(n);case 2:return t=e.sent,e.abrupt("return",!!t);case 4:case"end":return e.stop()}}),e)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",z(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",z(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}};function j(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function A(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){j(a,r,i,o,s,"next",n)}function s(n){j(a,r,i,o,s,"throw",n)}o(void 0)}))}}function C(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function L(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){C(a,r,i,o,s,"next",n)}function s(n){C(a,r,i,o,s,"throw",n)}o(void 0)}))}}var P={"/":f,"/home":f,"/detail/:id":{render:function(){return A(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return","\n    <div id='detail'></div>\n    <div id=\"likeButtonContainer\"></div>");case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return A(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=h.parseActiveUrlWithoutCombiner(),n.next=3,l.detailRestaurant(e.id);case 3:t=n.sent,document.querySelector("#detail").innerHTML=d(t.restaurant),E.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:t});case 7:case"end":return n.stop()}}),n)})))()}},"/favorite":{render:function(){return L(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return","\n            <section class=\"content\">\n            <article class='hero' id='hero'>\n                <div class=\"hero-image\">\n                    <img src=\"./images/heros/hero-image_4.jpg\" width=\"450\" alt=\"Hero Image\">\n                </div>\n\n            </article>\n\n            <article class=\"restaurant\" id='maincontent'>\n                <h1 class='subtitle'>Your Favorite Restaurant</h1>\n                <ul class='restaurant-lists' id='restaurant-lists'>\n                </ul>\n\n            </article>\n        </section>\n    ");case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return L(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h.parseActiveUrlWithoutCombiner(),n.next=3,R.getAllRestaurant();case 3:e=n.sent,t=document.querySelector("#restaurant-lists"),e.length?e.forEach((function(n){t.innerHTML+=u(n)})):t.innerHTML+="\n      <h2 class='no-favorite'>You don't Have any Favorite restaurant yet</h2>\n      ";case 6:case"end":return n.stop()}}),n)})))()}}};function S(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function T(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var M=function(){function n(e){var t=e.button,r=e.drawer,i=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=t,this._drawer=r,this._content=i,this._initialAppShell()}var e,t,i,a,o;return e=n,(t=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=h.parseActiveUrlWithCombiner(),t=P[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.querySelector("#maincontent").focus()}));case 9:case"end":return n.stop()}}),n,this)})),o=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=a.apply(n,e);function o(n){S(i,t,r,o,s,"next",n)}function s(n){S(i,t,r,o,s,"throw",n)}o(void 0)}))},function(){return o.apply(this,arguments)})}])&&T(e.prototype,t),i&&T(e,i),Object.defineProperty(e,"prototype",{writable:!1}),n}(),O=(t(1),t(9),t(2)),B=t.n(O);function I(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}var U=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=3;break}return n.next=3,B.a.register();case 3:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){I(a,r,i,o,s,"next",n)}function s(n){I(a,r,i,o,s,"throw",n)}o(void 0)}))});return function(){return e.apply(this,arguments)}}(),q=new M({button:document.querySelector("#hamburger"),drawer:document.querySelector("#drawer"),content:document.querySelector("#maincontent")});window.addEventListener("hashchange",(function(){q.renderPage()})),window.addEventListener("load",(function(){q.renderPage(),U()}))},5:function(n,e,t){var r=t(6),i=t(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},7:function(n,e,t){(e=t(8)(!1)).push([n.i,'html {\n  scroll-behavior: smooth;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: "Cormorant Garamond", sans-serif;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #9ca3af;\n}\n\nimg {\n  display: block;\n}\n\nbody {\n  background-color: #18181b;\n  position: relative;\n}\n\nh1,\nh2 {\n  font-family: "Cormorant Garamond", sans-serif;\n}\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: 900;\n}\n\nh2 {\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n\np {\n  font-size: 1rem;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  display: block;\n  min-width: 44px !important;\n  min-height: 44px !important;\n  text-decoration: none;\n  font-size: 1.25rem;\n  color: #a1a1aa;\n}\n\na > * {\n  min-width: 44px !important;\n  min-height: 44px !important;\n}\n\na:hover {\n  color: #e4e4e7;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #ca8a04;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n.logo *,\n.hero-logo,\n.title h1 {\n  font-family: "Imperial Script", "Cormorant Garamond", sans-serif;\n  color: #ca8a04;\n  font-weight: 400;\n  font-size: 3rem;\n}\n\n.title {\n  text-align: center;\n}\n\n#hamburger {\n  color: #a1a1aa;\n  text-align: center;\n  margin-top: 10px;\n}\n\n#hamburger-container {\n  margin: auto;\n  position: fixed;\n  z-index: 99;\n}\n\n#drawer {\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  -webkit-box-shadow: 0 8px 32px 0 rgba(44, 45, 54, 0.37);\n          box-shadow: 0 8px 32px 0 rgba(44, 45, 54, 0.37);\n  border-right: 1.8px solid rgba(68, 67, 67, 0.4);\n  border-bottom: 1.8px solid rgba(68, 67, 67, 0.4);\n  border-radius: 0 0 5px 0;\n  width: 250px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 300px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  position: fixed;\n  top: 0;\n  z-index: 99;\n  padding: 20px;\n  height: 100%;\n  -webkit-transform: translate(-250px, 0);\n          transform: translate(-250px, 0);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n\n#drawer.open {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n\n.navbar-left {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n}\n\n.navbar-right {\n  margin-top: 20px;\n}\n\n.navbar-list {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.navbar-item {\n  margin: 15px;\n}\n\nmain {\n  width: 100%;\n}\n\n.content article:not(:first-child) {\n  padding: 0 20px;\n}\n\n.hero-image img {\n  width: 100%;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  -webkit-filter: brightness(0.7);\n          filter: brightness(0.7);\n  background-size: content;\n}\n\n.hero-desc {\n  text-align: center;\n  line-height: 3rem;\n  margin: 20px;\n}\n\n.hero-desc h1 {\n  margin-bottom: 10px;\n  font-weight: 300;\n}\n\n.hero-desc h2 {\n  line-height: 2rem;\n  font-size: 1.5rem;\n  margin-top: 20px;\n}\n\n.restaurant {\n  margin-top: 60px;\n}\n\n.no-favorite {\n  font-size: 2rem;\n  text-align: center;\n}\n\n.favorite-home-anchor {\n  display: inline;\n  font-size: 1rem;\n  color: #ca8a04;\n}\n\n.favorite-home-anchor:hover {\n  color: white;\n}\n\n.subtitle {\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 400;\n}\n\n.no-favorite {\n  font-size: 1rem;\n  font-weight: 200;\n  margin-top: 30px;\n}\n\n.category-list-container {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 10px auto;\n  overflow: auto;\n}\n\n.category-list {\n  height: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n\n.category {\n  position: relative;\n  height: 150px;\n  width: 150px;\n  margin: 10px;\n  background-color: #3b3a3a;\n  -webkit-box-shadow: 0 0 20px 5px rgba(157, 157, 157, 0.1);\n          box-shadow: 0 0 20px 5px rgba(157, 157, 157, 0.1);\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.category:hover {\n  color: #3b3a3a;\n  background-color: #e4e4e7;\n  cursor: pointer;\n}\n\n.category-value {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 1.5rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.restaurant-lists {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.restaurant-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 20px;\n  background-color: #e4e4e7;\n  -webkit-box-shadow: 0 0 20px 2px rgba(204, 200, 200, 0.1);\n          box-shadow: 0 0 20px 2px rgba(204, 200, 200, 0.1);\n}\n\n.item-left {\n  position: relative;\n  height: 100px;\n}\n\n.item-img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: brightness(0.7);\n          filter: brightness(0.7);\n}\n\n.item-desc {\n  display: none;\n}\n\n.rating {\n  display: none;\n}\n\n.item-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  padding: 10px 10px 10px 0;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.item-res-name {\n  font-size: 1.3rem;\n  margin-left: 20px;\n  margin-top: 10px;\n  line-height: 1.5rem;\n  color: #18181b;\n}\n\n.location-rating-category {\n  padding: 0 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 10px;\n}\n\n.location-rating-category > * {\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n\n.item-rating {\n  color: #18181b;\n  font-weight: 600;\n}\n\n.detail-anchor {\n  color: #18181b;\n}\n\n.detail-anchor:hover {\n  color: #ca8a04;\n}\n\nfooter {\n  margin-top: 100px;\n  height: 100px;\n  text-align: center;\n}\n\n.footer {\n  font-size: 1rem;\n}\n\n.top-detail-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.detail-image {\n  height: 300px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.bottom-image-detail-container {\n  width: 80%;\n  margin: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.detail-rating {\n  font-size: 2.5rem;\n  font-weight: bolder;\n  color: #ca8a04;\n}\n\n.detail-categories {\n  font-weight: 700;\n  color: #e4e4e7;\n}\n\n.bottom-detail-container {\n  width: 80%;\n  margin: auto;\n}\n\n.detail-address {\n  font-weight: 500;\n}\n\n.detail-description {\n  line-height: 1.6rem;\n  margin-bottom: 30px;\n}\n\n.menu-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.minuman-title,\n.makanan-title {\n  margin-bottom: 20px;\n}\n\n.list-makanan,\n.list-minuman {\n  line-height: 2rem;\n}\n\n.reviews-title {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.review-item {\n  margin-bottom: 20px;\n}\n\n.review-name {\n  color: #ca8a04;\n}\n\n.review-date {\n  font-weight: 400;\n  font-size: 0.75rem;\n}\n\n.review-review {\n  overflow: hidden;\n}\n\n.rating-star {\n  font-size: 1rem;\n  color: #ca8a04;\n}\n\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n@media screen and (min-width: 600px) {\n  .favorite-home-anchor {\n    font-size: 2rem;\n  }\n  .no-favorite {\n    font-size: 2rem;\n  }\n  .top-detail-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 70%;\n    margin: auto;\n  }\n  .detail-image {\n    height: 400px;\n  }\n  .detail-name {\n    font-size: 4rem;\n  }\n  .detail-rating {\n    font-size: 3.5rem;\n  }\n  .top-image-detail-container {\n    width: 100%;\n  }\n  .bottom-image-detail-container {\n    margin: auto;\n    text-align: center;\n    line-height: 4rem;\n    padding: 20px;\n  }\n  .top-detail-container {\n    margin-bottom: 40px;\n  }\n  .bottom-detail-container {\n    margin: auto;\n  }\n  .detail-description {\n    width: 70%;\n    margin: auto;\n    font-size: 1.25rem;\n    margin-bottom: 40px;\n  }\n  .rating-star {\n    font-size: 2rem;\n  }\n  .detail-categories {\n    font-size: 2rem;\n  }\n  .menu-container {\n    width: 80%;\n    margin: auto;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 40px;\n  }\n  .makanan-title,\n  .minuman-title {\n    font-size: 2rem;\n  }\n  .list-makanan,\n  .list-minuman {\n    font-size: 1.25rem;\n  }\n  .review-container {\n    width: 70%;\n    margin: auto;\n  }\n  .reviews-title {\n    font-size: 3rem;\n  }\n  .review-item {\n    line-height: 2rem;\n  }\n  .review-name {\n    font-size: 1.75rem;\n  }\n  .review-review {\n    font-size: 1.5rem;\n  }\n  .review-date {\n    font-size: 1rem;\n  }\n  .title {\n    height: 200px;\n    position: relative;\n  }\n  .title h1 {\n    font-size: 4rem;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  #drawer {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border: none;\n    width: 100%;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: fixed;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    top: 0;\n    z-index: 99;\n    height: 60px;\n    padding: 0;\n  }\n  .navbar-right,\n  .navbar-left {\n    margin: 0;\n  }\n  .navbar-left {\n    width: 40%;\n  }\n  .navbar-right {\n    width: 60%;\n    margin-right: 150px;\n  }\n  .navbar-list {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .navbar-item {\n    margin: 20px;\n  }\n  #hamburger-container {\n    display: none;\n  }\n  .hero-desc {\n    line-height: 4rem;\n    margin: 4rem;\n  }\n  .hero-desc h1 {\n    font-size: 4rem;\n  }\n  .hero-desc h2 {\n    margin-top: 2rem;\n    line-height: 3rem;\n    font-size: 2rem;\n  }\n  .hero-logo {\n    font-size: 4.5rem;\n  }\n  /* width */\n  .category-list-container::-webkit-scrollbar {\n    width: 5px;\n  }\n  /* Track */\n  .category-list-container::-webkit-scrollbar-track {\n    background: #3b3a3a;\n    width: 10px;\n  }\n  /* Handle */\n  .category-list-container::-webkit-scrollbar-thumb {\n    background: #1f1f22;\n    width: 10px;\n  }\n  /* Handle on hover */\n  .category-list-container::-webkit-scrollbar-thumb:hover {\n    background: #0b0b0c;\n  }\n  .subtitle {\n    font-size: 4rem;\n    margin-top: 100px;\n  }\n  .category-list-container {\n    margin: 80px auto;\n  }\n  .category-list {\n    height: 220px;\n  }\n  .category {\n    height: 180px;\n    width: 180px;\n  }\n  .restaurant-lists {\n    width: 100%;\n    -ms-flex-preferred-size: 20%;\n        flex-basis: 20%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n  .restaurant-item {\n    width: 30%;\n    margin: 20px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .item-left {\n    height: 150px;\n  }\n  .item-image {\n    margin: 10px;\n    height: 100%;\n  }\n  .item-image:hover {\n    -webkit-filter: brightness(0.3);\n            filter: brightness(0.3);\n  }\n  .item-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 20px;\n  }\n  .item-res-name {\n    margin: 0;\n    margin-bottom: 10px;\n    font-size: 2rem;\n    font-weight: 600;\n    line-height: 1.8rem;\n  }\n  .item-desc {\n    margin-top: 10px;\n    text-align: center;\n    font-size: 1rem;\n    padding: 10px;\n    color: #18181b;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    line-height: 1.5rem;\n    /* fallback */\n    max-height: 200px;\n    /* fallback */\n    -webkit-line-clamp: 5;\n    /* number of lines to show */\n    -webkit-box-orient: vertical;\n  }\n  .rating {\n    font-size: 1.8rem;\n    font-weight: 600;\n    display: block;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    border-radius: 3px;\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    border: 2px solid rgba(196, 196, 196, 0.2);\n    color: white;\n  }\n  .item-rating {\n    display: none;\n  }\n  .location-rating-category > * {\n    font-size: 1.2rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .hero-image img {\n    min-width: 1000px;\n  }\n  .restaurant-item {\n    width: 20%;\n  }\n}',""]),n.exports=e}});