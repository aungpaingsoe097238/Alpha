<template>
    <div class="container-fluid">
      <div class="row vh-100 justify-content-end ">
        <div class="col-8 col-md-5 col-lg-4 
        z-index-1000 bg d-md-block animate__animated
         animate__slideInLeft position-fixed top-0 start-0 rounded-0"  :class="{ 'd-none': sidebar }" >
            <Sidebar></Sidebar>
        </div>
        <div class="col-12 col-md-7 col-lg-8 bg">
          <Content></Content>
        </div>
      </div>
      <!-- menu -->
      <div @click="sideBarAction"  class="up nav-link d-flex justify-content-center align-items-center d-md-none z-index-2000">
        <i class="fas fa-list-dots" v-if="sidebar"></i>
        <i class="fas fa-close" v-else></i>
      </div>
      <!-- end menu-->
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
    --border: #cbd5e1;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .blog-title-card{
    display: inline-block;
    background-color: rgba(0,0,0,.04);
    text-transform: uppercase;
    padding: 4px 10px;
    font-weight: 600;
    font-size: 15px;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0;
    margin-bottom: 15px;
  }

  .blog-title{
    font-weight: 800;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
  }

  .montserrat-font{
    font-family: 'Montserrat', sans-serif;
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
    background-color: var(--bg);
    position: fixed;
    bottom: 50px;
    right: 50px;
    border-radius: 50%;
    z-index: 2000;
    -webkit-box-shadow: 7px 13px 49px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 7px 13px 49px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 7px 13px 49px -6px rgba(0, 0, 0, 0.75);
    animation: upAnime 0.5s 1s infinite alternate;
  }

  .memo-img{
    height: 50px;
    object-fit: cover;
    border: 1px solid var(--light);
  }

  .bg {
    background-color: var(--bg);
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

  .nav-link-style{
    font-size: 15px;
    color: yellow !important; ;
    transition: 0.25s !important;
  }

  .active{
    font-weight: bolder;
    text-shadow: 0 0 black;
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

  .z-index-1000{
    z-index: 1000;
    background-color: var(--light);
  }

  .fr {
    animation: fr 2s ease-in-out;
  }

  .view-ani {
    animation: view-ani 0.3s ease-in-out;
  }

  .modal {
      z-index: 3000;
  }

  .upload-img-ui img{
    width: 100%;
  }

  .upload-img{
    width: 50%;
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

  @keyframes view-ani {
    from {
      opacity: 0;
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


    .upload-img{
      width: 100%;
    }

    @keyframes view {
      from {
        opacity: 1;
      }
      to {
        opacity: 1;
      }
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
