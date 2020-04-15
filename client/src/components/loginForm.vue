<template>
    <div>
    <form @submit.prevent="login">
    <input type="text" placeholder="Your email" v-model="user.email"><br><br>
    <input type="password" placeholder="Your password" v-model="user.password"><br><br>
    <button>Log in</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'loginForm',
  data () {
    return {
      user: {
        email: '',
        password: '',
        access_token: ''
      }
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.user.email,
        password: this.user.password
      }
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(result => {
          localStorage.setItem('access_token', result.data.access_token)
          this.$router.push('dashboard')// push ke NAMA component, bukan route-nya
          // di sini kamu juga ubah state isLoggedIn menjadi true menggunakan commit
          this.$store.commit('set_isLoggedIn', true)
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
