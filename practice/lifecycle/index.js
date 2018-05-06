/* vue的生命周期 */

import Vue from "vue";

const app = new Vue({
  // el : '#root',
  // template : '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate() {
    //创建组件前执行，拿不到dom节点，只执行一次，没有dom操作，可以在服务端渲染调用
    console.log(this.$el, "beforeCreate");
  },
  created() {
    //创建组件执行，拿不到dom节点，只执行一次，没有dom操作，可以在服务端渲染调用
    console.log(this.$el, "created");
  },
  beforeMount() {
    //将模板挂载前执行，这个时候及之后才能拿到dom节点进行dom操作；只执行一次，
    console.log(this.$el, "beforeMount");
  },
  mounted() {
    //将模板挂载到HTML后执行，只执行一次
    console.log(this.$el, "mounted");
  },
  beforeUpdate() {
    //数据更新前时执行
    console.log(this, "beforeUpdate");
  },
  updated() {
    //数据更新时执行
    console.log(this, "updated");
  },
  activated() {
    console.log(this, "activated");
  },
  deactivated() {
    console.log(this, "deactivated");
  },
  beforeDestroy() {
    //组件销毁前执行
    console.log(this, "beforeDestroy");
  },
  destroyed() {
    //组件销毁时执行
    console.log(this, "destroyed");
  },
  render(h) {
    //render方式就是template的执行
    throw new TypeError("render error");
    // console.log('render function invoked')
    // return h('div', {}, this.text)
  },
  renderError(h, err) {
    //调试render方法调用,只有本组件错误才会调用，只关心自己有没有成功，正式环境不能使用
    return h("div", {}, err.stack);
  },
  errorCaptured () { 
      //会向上冒泡，正式环境可以使用；破获所有子组件的错误

  }
});

app.$mount("#root");

// setInterval(() => {
//     app.text = app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy(); //组件销毁
}, 1000);
