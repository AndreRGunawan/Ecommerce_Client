<template>
  <div>
    <h1>DASHBOARD</h1>
    <button @click="logout">Logout</button>
    <Product :products1='products'></Product>
    <div>{{ testMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios'
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
  computed: { // computed object keys
    testMessage () { // methods in functions
      return this.$store.state.testVueX
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    if (!localStorage.access_token) { // jika tidak ada access_token, maka redirect ke landing page(yangrouting-nya '/')
      this.$router.push('/')
    } else {
      // Apabila token ada / loggedIn, maka mari ambil data products-nya
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          console.log(result)
          this.products = result.data.products
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
