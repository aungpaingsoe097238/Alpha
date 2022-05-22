<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 my-5 my-md-0 fr">
    <div class="container-fluid my-5">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-8">
          <div class="">
            <span class="blog-title-card">About</span> <br>
            <span class="blog-title">Who am I?</span>
            <p class="text-black-50" style="text-indent: 50px;text-align: justify ">
              Hi everyone.My name is Aung Paing Soe.I'm a Web Developer. I'm using the PHP &
              Laravel Framework for Back-End Developement. HTML,CSS,JavaScript,JQuery
              & Vue-js are using my Font-End Developement.
            </p>
          </div>
          <div>
            <table class="table table-responsive table-borderless">
              <tbody>
              <tr>
                <td class=" fw-bolder">Name:</td>
                <td class="text-black-50 ">Aung Paing Soe</td>
              </tr>
              <tr>
                <td class=" fw-bolder">Birthday:</td>
                <td class="text-black-50 ">5 / 3 / 2000</td>
              </tr>
              <tr>
                <td class=" fw-bolder">Age:</td>
                <td class="text-black-50 ">22</td>
              </tr>
              <tr>
                <td class=" fw-bolder">Address:</td>
                <td class="text-black-50 ">Insein,Yangon,Myanmar</td>
              </tr>
              <tr>
                <td class=" fw-bolder">Email:</td>
                <td class="text-black-50 ">aungpaingsoe097238@gmail.com</td>
              </tr>
              <tr>
                <td class=" fw-bolder">Phone:</td>
                <td class="text-black-50 ">+95 960 187 283</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div>
            <a class="btn btn-outline-dark rounded-3" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/fir-vue-2b593.appspot.com/o/other%2Fcv.pdf?alt=media&token=634a7b31-0c50-40fa-af37-8e2eb7d34774" download="alpha_cv.pdf">
              Download CV
              <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-4">
          <img src="../assets/img/Profile/about.jpg" class="img-fluid border-1  border-light rounded-3 mt-3 mt-md-3 mt-lg-3 gray-img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
}
</script>

<style scoped>

</style>