import Vue from "vue"

new Vue({
    el : "#root",
    template : `
        <div>
            <div>Text : {{text}}</div>
            <div v-html="html"></div>
            <div v-show="active">Text:{{text}}</div>
            <div v-if = "active">v-if</div>
            <div v-else-if= "text > 1">v-else-if</div>
            <div v-else>v-else</div>

            <ul>
                <li v-for="(item, index) in arr" :key="item" >{{item}} : {{index}}</li>
            </ul>

            <ul>
                <li v-for="(val, key, index) in obj " :key="key" >{{val}} : {{key}} : {{index}}</li>
            </ul>
            <div>   
                /* v-model 修饰符有lazy（失去焦点再改变值） number trim（去掉首尾空格） */
                <input type="text" v-model.number="text" />
            </div>
            /* v-pre : 对里面的表达式都不做解析 */
            <div v-pre>Text : {{text}}</div>

            <div>
                <input type="checkbox" :value="10" v-model="arr" />
                 <input type="checkbox" :value="9" v-model="arr" />
                  <input type="checkbox" :value="7" v-model="arr" />
                   <input type="checkbox" :value="8" v-model="arr" />
            </div>
            <div>
                <p>v-once : 模板的值只改变一次，适用于静态</p>
                <p v-once>Number : {{text}}</p>
            </div>

        </div>
        
    `,
    data : {
        arr  : [ 10, 9, 8, 7],
        obj : {
            "f" : "fabc",
            "g" : "gfbc",
            "d" : "sdfhhh",
            "k" : "kjsxi"
        },
        text : 0,
        active : false,
        html : '<span>this is html</span>'
    }
})