/**
 * 这里实现的是vue的扩展插件的功能
 * 使用vue.extend()方法
 */

import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: {
        type : String,
        required : true
    }
  },
  template: `
        <div>
            <input type="text" v-model.number= "text" />
            <p @click="handleChange">{{propOne}}</p>
            <p v-show="active">see me if active is true</p>
        </div>
    `,
  data() {
    return {
      text: 123
    };
  },
  mounted () {
    console.log("comp mounted")
  },
  methods: {
    handleChange() {
      this.$emit("change");
    }
  }
};

const componet2 = {
    extends : compoent,
    data(){
        return {
            text : 111111444
        }
    },
    mounted (){
        // console.log("componet2 first");
        console.log(this.$parent.$options.name)
    }
}

const CompVue = Vue.extend(compoent);

// new CompVue({
//     el : "#root",
//     propsData : {
//         propOne : "黄克"
//     }, 
//     data () {//上面的data被覆盖了
//         return {
//             text : 9999,
//         }
//     },
//     mounted () {//上面的mouned方法先执行
//         console.log("instance mounted")
//       },
// })

new Vue({
    name : "Rooot",
    el : "#root",
    components : {
        Comp : componet2
    },
    data(){
        return {
            name : "huangke"
        }
    },  
    template : `
            <div>
                <comp :propOne="name"></comp>
            </div>
    `,
    mounted () {
        console.log("componet2's mounted!");
    }
})