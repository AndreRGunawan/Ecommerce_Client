<template>
  <div>
      <div class="product card" v-for="product in products1" :key="product.id">
       <img :src="product.image_url">
       <h3>{{ product.name }}</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['products1']
}
</script>

<style>

</style>
