import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testVueX: 'hello from vuex test var!',
    isLoggedIn: false,
    newProduct: {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    },
    allProducts: []
  },
  mutations: { // fungsi utama dari mutation adalah ubah isi data dalam state, Parameternya SELALU ADA STATE. Kamu bisa tambahkan payload dalam bentuk object
    changeStatement (state, payload) { // DIPANGGIL menggunakan COMMIT.
      state.testVueX = payload.newStatement
    },
    set_isLoggedIn (state, payload) {
      state.isLoggedIn = payload
    },
    set_products (state, payload) {
      state.allProducts = payload
    }
  },
  actions: { // fungsi utama = ubah isi data secara asynchronous. Parameternya SELALU ADA CONTEXT
    fetchProducts (context) { // DIPANGGIL menggunakan DISPATCH.
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          console.log(result)
          const allProducts = result.data.products
          context.commit('set_products', allProducts)
        })
    }

  },
  modules: {
  }
})
