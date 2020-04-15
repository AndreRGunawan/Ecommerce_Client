<template>
  <div>
    <h1>Landing Page</h1>
    <loginForm />
  </div>
</template>

<script>
import loginForm from '../components/loginForm'

export default {
  name: 'LandingPage',
  components: { // INGAT TULISAN COMPONENTS, PLURAL
    loginForm
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/dashboard')// Jika ada access_token, paksa masuk ke dashboard
    }
    console.log(this.$store.state.testVueX)
  }
}
</script>
<style>

</style>
