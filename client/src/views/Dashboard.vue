<template>
  <div>
    <h1>DASHBOARD</h1>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  created () {
    if (!localStorage.access_token) { // jika tidak ada access_token, maka redirect ke landing page(yangrouting-nya '/')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
