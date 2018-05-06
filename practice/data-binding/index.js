import Vue from "vue"
new Vue({
  el: "#root",
  template: `
        <div v-bind:id='aaa'>
            {{isActive ? 'active' : 'not active'}}
            <p>{{Date.now()}}</p>
            <p>{{html}}</p>
            <p v-html='html'></p>
        </div>
        
    `,
  data: {
    isActive: false,
    html: "<span>span</span>",
    aaa : "main"
  }
});