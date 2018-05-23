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
  mapGetters
} from 'vuex'

export default {
  components: {
    Header,
    Footer,
    // Todo,
  },
  mounted () {
    // console.log(this.$route);
    console.log(this.$store)
    let i = 1;
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000);
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


