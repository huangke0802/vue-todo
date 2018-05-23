<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <!-- <todo></todo> -->
    <router-link to="/app/huangke">app</router-link> <!-- :to='{name : "app"}'   to="/app/123" -->
    <router-link to='/login'>login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <!-- <router-view name = "a"></router-view> -->
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

export default {
  components: {
    Header,
    Footer,
    // Todo,
  },
  methods : {
    ...mapMutations(['updateCount']),
    ...mapActions(['updateCountAsync'])
  },
  mounted () {
    // console.log(this.$route);
    console.log(this.$store)
    // this.$store.state.count = 3;  //在strict 为 true 时会警告不能直接修改
     this.updateCount( {
       num : 10,
       num2 : 909
     })
    // let i = 1;
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000);
    this.updateCountAsync( {
      num : 5,
      time : 2000
    })
  },
  computed : {
    // ...mapState(['count']),
    ...mapState({
      // counter : 'count'
      counter : (state) => state.count
    }),
    // count () {
    //   return this.$store.state.count;
    // },
    ...mapGetters(['fullName'])
    // fullName () {
    //   return this.$store.getters.fullName;
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


