<template>
  <div>
    <h1>Add a New Product Here</h1>
    <addProductForm/>
  </div>
</template>

<script>
import addProductForm from '../components/addProductForm.vue'

export default {
  name: 'addProduct',
  components: {
    addProductForm
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/')// Jika ada access_token, paksa masuk ke dashboard
    }
  }
}
</script>

<style>

</style>
