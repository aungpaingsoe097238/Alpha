<template>
  <div class="d-md-flex my-5 my-md-0 min-vh-100 justify-content-center align-items-center fr">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <span class="blog-title-card">Services</span> <br>
          <span class="blog-title">Quality Services</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eius, voluptatum. Aspernatur commodi ducimus explicabo facilis in minus nisi, nobis nulla numquam omnis quis quos recusandae reiciendis repellendus unde voluptatum.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="service-card mt-3">
            <div class="">
              <div class="service-img">
                <img src="../assets/img/svg/webdasign.svg" alt="">
              </div>
              <div class="pt-3">
                <span class="h5 fw-bold service-title">
                  Web Desgin
                </span>
                <p class="text-black-50 service-content pt-3">
                  Website တစ်ခု၏ အသွင်အပြင်ကို လှပစွာ ပုံဖော်နိုင်ခြင်း။
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="service-card mt-3">
            <div class="">
              <div class="service-img">
                <img src="../assets/img/svg/web.svg" alt="">
              </div>
              <div class="pt-3">
                <span class="h5 fw-bold service-title">
                  Web Apps
                </span>
                <p class="text-black-50 service-content pt-3">
                  Api service နှင့် server side ကိုကောင်းမွန်စွာကိုင်တွယ်နိုင်ခြင်း။
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="service-card mt-3">
            <div class="">
              <div class="service-img">
                <img src="../assets/img/svg/mobile.svg" alt="">
              </div>
              <div class="pt-3">
                <span class="h5 fw-bold service-title">
                  Responsive Ui/Ux
                </span>
                <p class="text-black-50 service-content pt-3">
                  Media Query ကို ကောင်မွန်စွာရေးသားနိုင်ခြင်း။
                </p>
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
  name: "Services"
}
</script>

<style>
.close{
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid white;
  transition: 0.5s;
}
.close:hover{
  border-radius: 5px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
}
</style>