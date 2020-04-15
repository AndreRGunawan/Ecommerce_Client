<template>
  <div>
      <div class="product-card-list" v-for="product in allProducts" :key="product.id">
        <div class="product-card">
          <img :src="product.image_url">
          <div class="product-card-details">
           <h4>{{ product.name }}</h4>
           <p>Current price: {{ product.price }}</p>
           <p>Current stock: {{ product.stock }}</p>
          </div>
          <div class="product-actions">
            <router-link :to="{ name:'editProduct', params: { id: product.id } }"><button>Edit Product</button></router-link>
            <button @click="deleteProduct( product.id )">Delete</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Product',
  methods: {
    deleteProduct (id) {
      console.log('Ready to delete id number', id)
      axios({
        method: 'delete',
        url: 'http://localhost:3000/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          this.$store.dispatch('fetchProducts')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.allProducts
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
.product-card-list{
  display: flex;
  justify-content: center;
}

.product-card{
  border:1px;
  border-style: solid;
  border-color: #2ecc71;
  background-color:#ecf0f1;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  width: 90vw;
  height: 25vh;
  margin: 10px;
  padding: 10px;
}
img {
  max-height: 100%;
}
.product-card-details {
  height: 100%;
  padding: 10px;
  text-align: left;
}

.product-actions{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
