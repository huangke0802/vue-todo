import Vue from "vue";

new Vue({
  el: "#root",
  template: `
        <div>
            <p>Name : {{name}}</p>
            <p>Name : {{getName()}}</p>
            <p>Number : {{number}}</p>
            <p><input type="text" v-model="number" /></p>
            <p>FirstName : <input type="text" v-model="firstName" /></p>
            <p>LastName : <input type="text" v-model="lastName" /></p>
            <p>name : <input type="text" v-model="name" /></p>
            <p>fullName : {{fullName}}</p>
            <p>obj.a : <input type="text" v-model="obj.a" /></p>
        </div>
    `,
  data: {
    firstName: "Kiven",
    lastName: "Huang",
    fullName: "",
    number: 0,
    obj: {
      a: 124
    }
  },
  computed: {
    //不会调用方法，性能提高,有缓存，性能提高
    // name() {
    //   console.log("new name");
    //   // return `${this.firstName} ${this.lastName}`
    //   return this.firstName + " " + this.lastName;
    // }
    //get和set方法:尽量不要这么用会屡不清楚会出问题的
    name: {
      get() {
        console.log("new name");
        return `${this.firstName} ${this.lastName}`;
      },
      set(name) {
        const names = name.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  watch: {
    //监听某个指令，再执行方法；
    fullName: {
      handler(newName, oldName) {
        //声明了handler会第一次执行，否则不会执行
        this.fullName = this.firstName + " " + this.lastName;
      },
      immediate: true,
    //   deep: true //默认是false 可以观察对象的属性的值的改变
    },
     'obj.a': {
      handler() {
          console.log("obj change")
      },
    //   deep: true //默认是false 可以观察对象的属性的值的改变,deep不为真，监听不到a的值的变化,使用字符串点属性就不需要deep
    } 
  },
  methods: {
    getName() {
      console.log("getName invoked");
      return this.firstName + " " + this.lastName;
    }
  }
});

/* 不要再watch 和 computed中改值，一旦改值就会触发监听和computed这样会形成无限循环 */