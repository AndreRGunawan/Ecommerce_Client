<template>
  <div>
    <form @submit.prevent="login">
    <input type="text" placeholder="Your email"><br><br>
    <input type="password" placeholder="Your password"><br><br>
    <button>Log in</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LandingPage',
  methods: {
    login () {
      console.log('user now logged In')
      axios.get('http://localhost:3000/login')
        .then(result => {
          console.log(result)
          //    localStorage.setItem ( 'access_token', result.access_token)
          this.$router.push('dashboard')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/dashboard')// Jika ada access_token, paksa masuk ke dashboard
    }
  }
}
</script>
<style>

</style>
