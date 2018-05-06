/* vue 实例 */

import Vue from "vue";

const app = new Vue({
//   el: "#root", //将节点挂载到root节点上
  template: "<div ref='div'>{{text}}-- {{obj.a}}</div>",
  data : {
      text : 0,
      obj : {}
  },
//   watch : {  //这里的watch等同于app.$watch()方法
//       text(newVal, oldVal){
//         console.log(newVal, oldVal)
//       }
//   }
});

//除了使用 el: "#root", 的方式来挂载节点也可以使用以下方式
app.$mount('#root');

// let i = 0;
setInterval(() => {
    // i++;
    // app.text += 1;
    // app.obj.a = i;
    // app.$set(app.obj, 'a', i); //设置属性
    // app.$delete(app.obj, "a"); //删除属性
    // app.$forceUpdate(); //强制渲染
}, 1000);

// console.log(app.$data);
// console.log(app.$options)
// console.log(app.$el);
// console.log(app.$props)

// app.$options.render = (h) => {
//     return h('div', {}, 'new render function')
// }

// console.log(app.$root === app);

// console.log(app.$children)

// console.log(app.$slots); //vue的插槽
// console.log(app.$scopedSlots);

// console.log(app.$refs)

// console.log(app.$isServer)  //是否是服务器端渲染

// app.$watch('text',  (newText, oldText) => {
//     console.log(newText, oldText)
// })


//注销watch方法防止内存溢出
// const unWatch = app.$watch('text',  (newText, oldText) => {
//     console.log(newText, oldText)
// });

// setTimeout( () => {
//     unWatch();
// }, 2000);

//监听事件
// app.$on('test', (a, b) => {
//     console.log(a, b);
// });
//once只执行一次
// app.$once("test", (a, b) => {
//   console.log(a, b);
// });

//触发事件
// app.$emit('test', 1, 2);
// setInterval( () => {
//     app.$emit('test', 1, 2);
// }, 1000);

//强制渲染
// app.$forceUpdate();

//下一次dom节点更新时调用的方法
// app.$nextTick(() => {

// });