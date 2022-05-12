<template>
  <div>
    <router-view></router-view>
    <!-- up -->
    <router-link to="#" class="up nav-link d-flex justify-content-center align-items-center">
      <i class="fas fa-list-dots"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>

</style>