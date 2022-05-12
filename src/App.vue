<template>
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="col-12 col-md-4 col-lg-3 d-md-block animate__animated animate__slideInLeft"  :class="{ 'd-none': sidebar }" >
          <Sidebar></Sidebar>
        </div>
        <div class="col-12 col-md-8 col-lg-9">
          <Content></Content>
        </div>
      </div>
      <!-- menu -->
      <div @click="sideBarAction"  class="up nav-link d-flex justify-content-center align-items-center d-md-none">
        <i class="fas fa-list-dots" v-if="sidebar"></i>
        <i class="fas fa-close" v-else></i>
      </div>
<!--      end menu-->
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
export default {
  components: {Content, Sidebar},
  data() {
    return {
      sidebar: true,
    }
  },
  methods: {
    sideBarAction(){
      //SideBar On Off
      this.sidebar = !this.sidebar;
      //SideBar Close Animate
      if(this.sidebar === false){
        this.closeAnimate = true;
      }
    },
  },
}
</script>

<style lang="less">

  :root {
    --primary-color: #4a90e2;
    --dark: #404040;
    --light: #ffff;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .user-img{
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .active{
    border-radius: 5px;
    background-color: var(--primary-color);
  }

  .up {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    position: fixed;
    bottom: 50px;
    right: 50px;
    border-radius: 50%;
    -webkit-box-shadow: 7px 13px 49px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 7px 13px 49px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 7px 13px 49px -6px rgba(0, 0, 0, 0.75);
    animation: upAnime 0.5s 1s infinite alternate;
  }

  .nav-link-style{
    font-size: 15px;
    color: var(--dark) !important;
  }

</style>
