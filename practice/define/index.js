import Vue from 'vue'

const compoent = {
  props: {
    active: {
    //   type: Boolean,
    validator (value) {
        return typeof value === "boolean"
    },
    //   required : true,
      default : false
      /* 如果default 是一个对象一定要用方法返回，和data一样  */
    //   default () {
    //       return : {

    //       }
    //   }
    },
    propOne: String
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
  methods: {
    handleChange() {
      this.$emit("change");
    }
  }
};

// Vue.component('CompOne', compoent);  // 全局注册组件Compone

new Vue({
  components: {
    //当前组件单个注册组件
    CompOne: compoent
  },
  el: "#root",
  mounted (){
    console.log(this.$refs.comp1)
  },
  template: `
    <div>
        <comp-one ref="comp1" :active="isActive" :prop-one='text1' @change="addChange"></comp-one>
        <div>{{text1}}</div>
        <comp-one :active="true" propOne="text2"></comp-one>
    </div>
  `,
  data() {
    return {
      isActive: true,
      text1: "123"
    };
  },
  methods: {
    addChange() {
      this.text1 += 1;
    }
  }
});