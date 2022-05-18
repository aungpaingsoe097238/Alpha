<template>
    <div class="container-fluid">
      <div class="row vh-100 justify-content-end ">
        <div class="col-9 col-md-4 col-lg-3 z-index-1000 d-md-block animate__animated animate__slideInLeft position-fixed top-0 start-0 rounded-0 card"  :class="{ 'd-none': sidebar }" >
            <Sidebar></Sidebar>
        </div>
        <div class="col-12 col-md-8 col-lg-9 bg">
          <Content></Content>
        </div>
      </div>
      <!-- menu -->
      <div @click="sideBarAction"  class="up nav-link d-flex justify-content-center align-items-center d-md-none z-index-2000">
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

<style>

  :root {
    --primary-color: #4a90e2;
    --dark: #404040;
    --light: #ffff;
    --secondary: #767676;
    --bg: #f9fafb;
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

  .bg {
    background-color: var(--bg);
  }

  .nav-link-style{
    font-size: 15px;
    color: var(--secondary) !important;
    transition: 0.5s !important;
  }

  .nav-link-style i{
    margin-right: 10px;
  }

  .nav-link-style img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .nav-link-style:hover{
    font-weight: bolder;
    color: var(--dark) !important;
    letter-spacing: 2px;
  }

  .active{
    font-size: 15px;
    font-weight: bolder;
    color: var(--dark) !important;
  }

  .gray-img{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  .service-card{
    width: 100%;
    padding: 20px;
    border: 1px solid var(--secondary);
    transition: 0.5s;
  }
  .service-card:hover{
    -webkit-box-shadow: 2px 6px 11px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 6px 11px -1px rgba(0,0,0,0.75);
    box-shadow: 2px 6px 11px -1px rgba(0,0,0,0.75);
  }

  .z-index-2000{
    z-index: 2000;
    background-color: var(--light);
  }

  .fr {
    animation: fr 2s ease-in-out;
  }



  @keyframes fr {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
    }
  }

  @keyframes water {
    0%{
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50%{
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100%{
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  .fr {
    animation: fr 2s ease-in-out;
  }


  @media only screen and (max-width : 768px) {
    .home-name{
      font-size: 30px;
      font-weight: 800;
      text-transform: uppercase;
    }


    .home-content{
      width: 100%;
    }

    .nav{
      width: 100% !important;
    }

    @keyframes fr {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 1;
      }
    }
  }


</style>
