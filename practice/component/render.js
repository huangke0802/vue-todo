import Vue from 'vue'

/**
 * 这一部分是，vue的render方法
 */

const component = {
    name: 'comp',
    props : {
        props1 : String
    },
   /*  template: `
        <div :style="style">
            <div class="header">
                <slot name="header"></slot>
            </div>
        </div>
    `, */
    render (h) {
        return h('div', {
            style : this.style,
            on : {
                click : () => {
                    this.$emit('click');
                }
            }
        }, 
        [
            this.$slots.header,
            this.props1
        ]) //slot没名字时用this.$slot.default
    },
    data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            },
            compValue: "this is component Value"
        }
    }
}

new Vue({
    components: {
        CompOne: component
    },
    el: "#root",
    data() {
        return {
            value: "header"
        }
    },
    methods : {
        handleClick () {
            console.log("clicked")
        },
        hadleMouseover () {
            console.log('hadleMouseover');
        }
    },
    mounted() {
        console.log(this.$refs.compOne.compValue);
    },
    /*   template : `
          <div>
               <comp-one ref="compOne">
                  <span slot='header' ref='header'>this is  {{value}}</span>
               </comp-one>
          </div>
      `, */
    render(createElement) {
        return createElement(
                'comp-one', 
                {
                    ref: "compOne",
                    props : {
                        props1 : this.value
                    },
                    on: {
                        //on：绑定事件是需要用组件中的$meit方法
                        click : this.handleClick
                    },
                    nativeOn : { //nativeOn：如果绑定的时组件会将方法绑到组件的根节点的原生的DOM上，时标签会绑定到标签上，原生触发，不需要$meit触发
                        mouseover : this.hadleMouseover
                    }
                }, 
            [
                createElement('span', {
                    ref: 'header',
                    slot: 'header',
                    domProps : {
                        innerHTML : '<span>黄克</span>'
                    },
                    attrs : {
                        id : "test-id"
                    }
                }, this.value)
            ]);
        }
})