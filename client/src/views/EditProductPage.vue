<template>
  <div>
    <h1>Edit Product Detail</h1>
    <form @submit.prevent="updateProduct">
          <input type="text" v-model="selectedProduct.name"><br>
          <input type="text" v-model="selectedProduct.image_url"><br>
          <input type="number" v-model="selectedProduct.price"><br>
          <input type="number" v-model="selectedProduct.stock"><br><br>
          <input type="submit" value="Edit Product Detail">
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'editProduct',
  data () {
    return {
      selectedProduct: {}
    }
  },
  methods: {
    updateProduct () {
      const id = this.selectedProduct.id
      const payload = {
        name: this.selectedProduct.name,
        image_url: this.selectedProduct.image_url,
        price: this.selectedProduct.price,
        stock: this.selectedProduct.stock
      }
      axios({
        method: 'put',
        url: 'http://localhost:3000/products/' + id,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(result => {
          this.$router.push('/dashboard')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/')// Jika ada access_token, paksa masuk ke dashboard
    } else {
      this.$store.commit('set_isLoggedIn', true)
      const id = this.$route.params.id
      console.log('CURRENT ID PARAMS IS ', id)
      // axios here
      axios({
        method: 'get',
        url: 'http://localhost:3000/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          console.log(result)
          this.selectedProduct = result.data.Product
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
