(this["webpackJsonpproject-promo-l-module-3-team-3"]=this["webpackJsonpproject-promo-l-module-3-team-3"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":"metapod","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"},{"id":11,"name":"metapod","types":["bug"],"evolution":"butterfree","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png"},{"id":12,"name":"butterfree","types":["bug","flying"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"}]')},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),a=n(4),r=n.n(a),c=n(2),i=(n(10),n(0)),l=function(){return Object(i.jsxs)("header",{className:"containerHeader",children:[Object(i.jsx)("div",{className:"containerHeader__image"}),Object(i.jsxs)("p",{className:"containerHeader__text",children:["If the world were ruled by ",Object(i.jsx)("span",{className:"containerHeader__text--pokemon",children:"pokemons"}),", which one would you choose?"]})]})},m=(n(12),n.p+"static/media/pokemonBall.726a3405.png"),u=function(e){return Object(i.jsx)("div",{className:"containerFav",children:Object(i.jsxs)("div",{className:"fav",children:[Object(i.jsx)("div",{className:"fav__star",children:Object(i.jsx)("img",{className:"fav__star--image",src:e.pokemon.url||m,alt:"my favorite pokemon"})}),Object(i.jsxs)("div",{className:"fav__text",children:[Object(i.jsx)("span",{children:e.name||"Full Name"}),Object(i.jsx)("span",{className:"fav__text--favPoke",children:e.pokemon.name||"Favorite Pokemon"})]})]})})},p=(n(13),function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("button",{className:"reset",onClick:function(t){e.handleReset()},children:Object(i.jsx)("i",{className:"far fa-trash-alt reset__icon"})})})}),d=(n(14),function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("input",{className:"form__input",type:"text",name:"name",id:"name",placeholder:"Enter your name...",value:e.name,onChange:function(t){e.handleName({key:"name",value:t.target.value})}})})}),j=(n(15),function(e){return Object(i.jsxs)("div",{className:"containerForm",children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"form",children:[Object(i.jsx)(d,{handleName:e.handleName,name:e.name}),Object(i.jsx)(p,{handleReset:e.handleReset})]}),Object(i.jsx)("h3",{className:"form__subtitle",children:" and choose your favorite one!"})]})}),h=(n(16),function(e){var t=e.pokemon.types.map((function(e,t){return Object(i.jsx)("li",{className:"poke__type poke__type--".concat(e),children:e},t)}));return Object(i.jsxs)("article",{className:"pokeCard",id:e.pokemon.id,onClick:function(t){e.handlePokemon(e.pokemon.id)},children:[Object(i.jsx)("img",{src:e.pokemon.url,alt:e.pokemon.name}),Object(i.jsxs)("div",{className:"pokeDescription",children:[Object(i.jsxs)("h2",{className:"pokeTitle",children:[" ",e.pokemon.name," "]}),Object(i.jsx)("ul",{className:"pokeTypes",children:t})]})]})}),b=(n(17),function(e){var t=e.pokemons.map((function(t){return Object(i.jsx)("li",{children:Object(i.jsx)(h,{pokemon:t,handlePokemon:e.handlePokemon})},t.id.toString())}));return Object(i.jsx)("div",{className:"pokeContainer",children:Object(i.jsx)("ul",{className:"pokeList",children:t})})}),k=(n(18),function(){return Object(i.jsxs)("footer",{className:"containerFooter",children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/laura-portillo-rodr\xedguez",target:"_blank",className:"containerFooter__name",children:Object(i.jsx)("small",{children:"By Laura Portillo Rodr\xedguez"})}),Object(i.jsx)("small",{children:"\xa92021"})]})}),f=(n(19),n(20),n(5)),O=function(){var e=Object(s.useState)(f),t=Object(c.a)(e,1)[0],n=Object(s.useState)({}),o=Object(c.a)(n,2),a=o[0],r=o[1],m=Object(s.useState)(""),p=Object(c.a)(m,2),d=p[0],h=p[1];return t.sort((function(e,t){return e.name.localeCompare(t.name)})),Object(i.jsxs)("div",{className:"containerBody",children:[Object(i.jsx)(l,{}),Object(i.jsxs)("main",{className:"containerMain",children:[Object(i.jsx)(u,{name:d,pokemon:a}),Object(i.jsx)(j,{name:d,handleName:function(e){"name"===e.key&&h(e.value)},handleReset:function(){h(""),r({})}}),Object(i.jsx)(b,{pokemons:t,handlePokemon:function(e){var n=t.find((function(t){return t.id===e}));r(n)}})]}),Object(i.jsx)(k,{})]})};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.ab0b0a90.chunk.js.map