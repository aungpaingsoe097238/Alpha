<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-12">
<!--        User Image-->
        <div class="d-flex justify-content-center text-center">
          <div>
            <div>
              <img src="../assets/user-default.png" class="img-fluid rounded-circle user-img mx-auto" alt="">
            </div>
            <div>
              <span class="text-dark fw-bold">Aung Paing Soe</span>
            </div>
          </div>
        </div>
<!--        End User Image-->

<!--        SideBar link-->
        <div class="mt-5">
          <nav class="nav flex-column">
            <router-link :to="{ name : 'home' }" class="nav-link nav-link-style">
              <i class="fas fa-home"></i>
              Home
            </router-link>
            <router-link :to="{ name : 'about' }" class="nav-link nav-link-style">
              <i class="fas fa-user"></i>
              About
            </router-link>
            <router-link :to="{ name : 'skill' }" class="nav-link nav-link-style">
              <i class="fas fa-list"></i>
              Skills
            </router-link>
            <router-link :to="{ name : 'services' }" class="nav-link nav-link-style">
              <i class="fas fa-server"></i>
              Services
            </router-link>
            <router-link :to="{ name : 'projects' }" class="nav-link nav-link-style">
              <i class="fas fa-archive"></i>
              Projects
            </router-link>
            <router-link :to="{ name : 'memo' }" class="nav-link nav-link-style">
              <i class="fas fa-images"></i>
              Memoary
            </router-link>
            <router-link :to="{ name : 'blog' }" class="nav-link nav-link-style">
              <i class="fas fa-blog"></i>
              Blog
            </router-link>
            <router-link :to="{ name : 'content' }" class="nav-link nav-link-style">
              <i class="fas fa-comment"></i>
              Content
            </router-link>
          </nav>
        </div>
<!--        End SideBar link-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style scoped>

</style>