<template>
  <div class="container">
    <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-12">

        <div class="w-75 mx-auto">
          <span class="blog-title p-3">
            <img src="../assets/alpha.png" style="max-width: 50px;" alt="">lpha</span>
        </div>

        <div class="dropdown-divider mt-3"></div>

<!--        SideBar link-->
        <div class="mt-5">
          <nav class="nav flex-column w-75 mx-auto">
            <router-link :to="{ name : 'home' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/home.png"  alt="">
              Home
            </router-link>
            <router-link :to="{ name : 'about' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/programmer.png"  alt="">
              About
            </router-link>
            <router-link :to="{ name : 'account' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/login.png"  alt="">
              Account
            </router-link>
            <router-link :to="{ name : 'skill' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/chart.png"  alt="">
              Skills
            </router-link>
            <router-link :to="{ name : 'services' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/customer-support.png"  alt="">
              Services
            </router-link>
            <router-link :to="{ name : 'projects' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/portfolio.png"  alt="">
              Projects
            </router-link>
            <router-link :to="{ name : 'memo' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/gallery.png"  alt="">
              Memoary
            </router-link>
            <router-link :to="{ name : 'blog' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/blogging.png"  alt="">
              Blog
            </router-link>
            <router-link :to="{ name : 'content' }" class="nav-link nav-link-style">
              <img src="../assets/img/icons/contact-book.png"  alt="">
              Content
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link v-if="is_user" to="#" class="nav-link nav-link-style">
              <span class="w-100" @click="out()">
                <img src="../assets/img/icons/logout.png"  alt="">
                logout
              </span>
            </router-link>
          </nav>
        </div>
<!--        End SideBar link-->
      </div>
    </div>
    {{ is_user }}
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    is_user() {
      if(localStorage.getItem('token')) {
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    out() {
      localStorage.clear();
      window.location.href = '/';
    }
  },
}
</script>

<style scoped>

</style>