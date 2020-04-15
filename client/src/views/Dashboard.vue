<template>
  <div>
    <h1>Welcome to CMS Dashboard</h1>
    <Product></Product>
    <!-- <div>{{ testMessage }}</div> -->
    <!-- <button @click='changeSentence("Hello from Dashboard instead!")'>Change Test Sentence</button> -->
  </div>
</template>

<script>
import Product from '../components/Product'

export default {
  name: 'Dashboard',
  components: {
    Product
  },
  data () { // bentuk penampungan data selalu berupa function seperti ini -- now redundant due to VueX
    return {
      products: []
    }
  },
  methods: {
    changeSentence (payload) {
      // di sini kita akses mutation changeStatement
      this.$store.commit('changeStatement', { newStatement: payload })
    }
  },
  computed: { // computed object keys
    testMessage () { // methods in functions
      return this.$store.state.testVueX
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    allProducts () {
      return this.$store.state.allProducts
    }
  },
  created () {
    if (!localStorage.access_token) { // jika tidak ada access_token, maka redirect ke landing page(yangrouting-nya '/')
      this.$router.push('/')
    } else {
      // Apabila token ada / loggedIn, maka mari ambil data products-nya
      this.$store.dispatch('fetchProducts')
      this.$store.commit('set_isLoggedIn', true)
    }
  }
}
</script>

<style>

</style>
