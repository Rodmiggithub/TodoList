(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function l(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(o){if(o.ep)return;o.ep=!0;const d=l(o);fetch(o.href,d)}})();const L=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <!-- selected  -->\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let T;const C=new Uint8Array(16);function S(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(C)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function E(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:A};function P(e,t,l){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const i=e.random||(e.rng||S)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){l=l||0;for(let o=0;o<16;++o)t[l+o]=i[o];return t}return E(i)}class u{constructor(t){this.id=P(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"completed",Pending:"pending"},s={todos:[new u("Tarea 1"),new u("Tarea 2"),new u("Tarea 3"),new u("Tarea 4"),new u("Tarea 5"),new u("Tarea 6")],filter:c.All},k=()=>{v(),console.log("init store")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=t.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(s))},I=(e=c.All)=>{switch(e){case c.All:return[...s.todos];case c.Completed:return s.todos.filter(t=>t.done);case c.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},U=e=>{if(!e)throw new Error("description is required");s.todos.push(new u(e)),f()},x=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},O=e=>{s.todos=s.todos.filter(t=>t.id!==e),f()},q=()=>{s.todos=s.todos.filter(e=>!e.done),f()},F=(e=c.All)=>{s.filter=e,f()},M=()=>s.filter,a={addTodo:U,deleteCompleted:q,deleteTodo:O,getCurrentFilter:M,getTodos:I,initStore:k,loadStore:v,setFilter:F,toggleTodo:x};let w;const D=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=a.getTodos(c.Pending).length},H=e=>{if(!e)throw new Error("A TODO object is required");const t=`
           
                <div class="view">
                    <input class="toggle" type="checkbox" ${e.done?"checked":""}>
                    <label>${e.description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            
            `,l=document.createElement("li");return l.innerHTML=t,l.setAttribute("data-id",e.id),e.done&&l.classList.add("completed"),l};let g;const V=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(l=>{g.append(H(l))})},h={clearCompletedButton:".clear-completed",TodoList:".todo-list",newTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},N=e=>{const t=()=>{const r=a.getTodos(a.getCurrentFilter());V(h.TodoList,r),l()},l=()=>{D(h.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=L,document.querySelector(e).append(r),t()})();const i=document.querySelector(h.newTodoInput),o=document.querySelector(h.TodoList),d=document.querySelector(h.clearCompletedButton),p=document.querySelectorAll(h.TodoFilters);i.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(a.addTodo(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const m=r.target.closest("[data-id]");a.toggleTodo(m.getAttribute("data-id")),t()}),o.addEventListener("click",r=>{const m=r.target.className==="destroy",y=r.target.closest("[data-id]");!y||!m||(a.deleteTodo(y.getAttribute("data-id")),t())}),d.addEventListener("click",()=>{a.deleteCompleted(),t()}),p.forEach(r=>{r.addEventListener("click",m=>{switch(p.forEach(y=>y.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":a.setFilter(c.All);break;case"Pendientes":a.setFilter(c.Pending);break;case"Completados":a.setFilter(c.Completed);break}t()})})};a.initStore();N("#app");
