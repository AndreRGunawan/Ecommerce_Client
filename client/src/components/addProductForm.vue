<template>
  <div>
      <form @submit.prevent="addProduct">
          <input type="text" placeholder="Product name" v-model="newProduct.name"><br>
          <input type="text" placeholder="Image url" v-model="newProduct.image_url"><br>
          <input type="text" placeholder="Price" v-model="newProduct.price"><br>
          <input type="text" placeholder="Stock" v-model="newProduct.stock"><br><br>
          <input type="submit" value="Add New Product">
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'addProductForm',
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.newProduct.name,
        image_url: this.newProduct.image_url,
        price: this.newProduct.price,
        stock: this.newProduct.stock
      }
      console.log(payload)
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(result => {
          console.log(result)
          this.$router.push('dashboard')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: { // untuk tampung data, kita panggil store state dulu
  }
}
</script>

<style>

</style>
