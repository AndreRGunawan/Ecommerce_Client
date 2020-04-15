<template>
  <div id="app">
    <div id="nav" v-if="isLoggedIn">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to='/addProduct'>Add Product</router-link> |
      <router-link to='/editProduct/:id'></router-link>
      <a href="#" @click="logout">Log out</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('set_isLoggedIn', false)
      this.$router.push('/')
      // Di sini kita panggil proses untuk set state status .isLoggedIn jadi false
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
