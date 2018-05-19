import Vue from 'vue'
/**
 * slot : 插槽
 * 具名插槽 ,根据name插入dom： <slot name="xxx"></slot>
 * 调用插槽 slot='xxxx'
 */

 /**
  * 跨级的上下文关系，建立数据交互使用 provide,和inject
  * 父级及以上使用 ： provide，子集及一以下使用inject引入
  */

const ChildComponent = {
    template : '<div>child component: {{data.value}}</div>',
    inject : ['yeye', 'data'],  //这样可以拿到父级以上的数据
    mounted () {
        console.log(this.$parent.$options.name); //comp : 父级组件
        console.log(this.yeye, this.value);
    }
}

const component = {
    name : 'comp',
    components : {
        ChildComponent
    },
    template : `
        <div :style="style">
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="body">
                <slot name="body"></slot>
            </div>
            <div>
                <slot name="footer" :value="compValue" aaa="'comp_AAA'"></slot>
            </div>
            <child-component></child-component>
        </div>
    `, 
    data () {
        return {
            style : {
                width : '200px',
                height : '200px',
                border : '1px solid #aaa'
            },
            compValue : "this is component Value"
        }    
    }
}

new Vue({
    components : {
        CompOne : component
    },
    provide (){  //给子集传数据或属性
        const data = {};

        Object.defineProperty(data, 'value',  {
            get : () => this.value,
            enumerable : true
        })


        return {
            yeye : this,
            data
        }
    } ,
    el : "#root",
    data (){
        return {
            value : "123"
        }
    },  
    mounted () {
        console.log(this.$refs.compOne.compValue);
        console.log(this.$refs.footer);
    },
    template : `
        <div>
             <comp-one ref="compOne">
                <span slot='header'> this is header </span>
                <span slot='body'> this is body {{value}} </span>
                <span ref="footer" slot="footer" slot-scope="a">{{a.value}} {{a.aaa}} {{value}}</span>
             </comp-one>
             <input v-model="value" >
        </div>
    
    `
})