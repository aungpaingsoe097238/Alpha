<template>
  <div class="d-flex min-vh-100 justify-content-center align-items-center">
    <div class="container-fluid">
      <div class="row ">
        <div class="col-12">
          <div class="d-flex flex-column flex-md-row justify-content-around align-items-center">
            <div>
              <div class="home-img"></div>
            </div>
            <div class="m-lg-5">
              <span class="home-name montserrat-font" >
                Aung Paing Soe
              </span>
              <p class="home-content text-black-50 montserrat-font mt-3">
                I'm a Full-stack Web Developer with over 2 years of professional experience in this field.
              </p>
              <div>
                <ul class="social mt-3">
                  <li>
                    <a href="">
                      <img src="../assets/img/icons/facebook.png"  alt="">
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="../assets/img/icons/github.png"  alt="">
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="../assets/img/icons/instagram.png"  alt="">
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="../assets/img/icons/twitter.png"  alt="">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style>
  .home-img{
    background-image: url("../assets/img/Profile/about.jpg");
    width: 300px;
    height: 300px;
    border-radius: 40% 60% 51% 49% / 48% 46% 54% 52% ;
    box-shadow: 23px 10px 15px -3px rgba(0,0,0,0.1);
    border: 3px solid var(--dark);
    background-repeat: no-repeat;
    object-fit: cover;
    background-position: top;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    animation: water infinite 4s;
  }

  .home-name{
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .home-content{
    width: 80%;
  }

  .social {
    width: 100%;
    float: left;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .social li{
    display: inline-block;
    padding-right: 20px;
  }

  .social img {
    width: 20px;
    height: 20px;
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

  @media (max-width: 700px) {
    .home-name{
      font-size: 30px;
      font-weight: 800;
      text-transform: uppercase;
    }
    .home-content{
      width: 100%;
    }
  }

</style>