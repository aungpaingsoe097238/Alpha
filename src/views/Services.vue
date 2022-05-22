<template>
  <div class="d-md-flex mt-5 my-5 my-md-0 min-vh-100 justify-content-center align-items-center fr">
    <div class="container-fluid my-5">
      <div class="row">
        <div class="col-12">
          <span class="blog-title-card">Services</span> <br>
          <span class="blog-title">Quality Services</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-4 " v-for="d in data" :key="d.id">
          <div class="service-card mt-3">
            <div class="" >
              <div class="service-img">
                <img :src="d.img" alt="">
              </div>
              <div class="pt-3" style="height: 150px;">
                <span class="h5 fw-bold service-title">
                  {{ d.title }}
                </span>
                <p class="text-black-50 service-content pt-3">
                  {{ d.desc }}
                </p>
              </div >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      data: [
        {
          'title' : 'Web Apps',
          'desc'  : 'Api service နှင့် server side ကိုကောင်းမွန်စွာကိုင်တွယ်နိုင်ခြင်း။',
          'img'   : require('../assets/img/svg/web.svg')
        },
        {
          'title' : 'Web Design',
          'desc'  : 'Web Design Patten ကိုကောင်းမွန်စွာရေးသားနိုင်ခြင်း။',
          'img'   : require('../assets/img/svg/webdasign.svg')
        },
        {
          'title' : 'Responsive Ui/Ux',
          'desc'  : 'Media Query ကိုကောင်းမွန်စွာရေးသားနိုင်ခြင်း။',
          'img'   : require('../assets/img/svg/mobile.svg')
        }
      ]
    }
  },
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