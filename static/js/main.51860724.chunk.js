(this.webpackJsonproboworld=this.webpackJsonproboworld||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(13),a(1)),l=a(2),s=a(4),h=a(3),u=(a(5),function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))});a(14);var m=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"card tc dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n),width:"200",height:"200",alt:"robot_image"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(m,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid #a9fbfb",height:"500px"}},e.children)},b=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," oh noo, that is not good"):this.props.children}}]),a}(r.a.Component),p=(a(15),function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearch=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(u,{searchChange:this.onSearch}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(d,{robots:n})))):r.a.createElement("h1",{className:"tc"},"Loading...\xa0 please \xa0\xa0 wait")}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.51860724.chunk.js.map