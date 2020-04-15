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
      console.log('user now logged In')
      const payload = {
        email: this.user.email,
        password: this.user.password
      }
      console.log(payload, 'this is payload')
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(result => {
          localStorage.setItem('access_token', result.data.access_token)
          this.$router.push('dashboard')// push ke NAMA component, bukan route-nya
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
