<template>
  <div class="d-flex  justify-content-center align-items-center min-vh-100 fr">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-11">
          <div>
            <span class="blog-title-card">Memoary</span> <br>
            <span class="blog-title">History is become the life of a part</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Alias amet commodi deserunt ex, facilis, impedit labore minima mollitia
              natus optio quasi quod recusandae rerum sit tenetur unde vitae. Iure, velit.
            </p>
          </div>
          <div class="mt-5">
            <vueper-slides
                class="no-shadow slide-img gray-img"
                :visible-slides="3"
                slide-multiple
                :gap="3"
                fixed-height="200px"
                :slide-ratio="1 / 4"
                :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1  } }">
              <vueper-slide
                  v-for="(slide, i) in slides"
                  :key="i"
                  class="slide-img"
                  :image="slide.image"
                  @click.native="modal(slide)"
              >
              </vueper-slide>
            </vueper-slides>
          </div>
        </div>
      </div>
    </div>
    <!--    Model-->
    <b-modal id="modal-scrollable"  centered  hide-footer ref="my-modal" scrollable :title="slideDetail.title">
      <div>
        <img :src="slideDetail.image" class="modal-img" alt="">
      </div>
    </b-modal>
    <!--    Model-->
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: "Blog",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slideDetail: {},
    slides: [
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        image: require('@/assets/img/Profile/1.jpg'),
        link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        image: require('@/assets/img/Profile/2.jpg'),
        link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },    {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        image: require('@/assets/img/Profile/3.jpg'),
        link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        image: require('@/assets/img/Profile/4.jpg'),
        link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        image: require('@/assets/img/Profile/5.jpg'),
        link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },
      {
        title: 'El Teide Volcano, Spain',
        content: 'Photo by Max Rive',
        image: require('@/assets/img/Profile/6.jpg'),
        link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
      },

    ]
  }),
  methods: {
    modal(slide) {
      // this.$refs['my-modal'].toggle('#toggle-btn');
      // this.slideDetail = slide ;
      console.log(slide)
    },
  },
}
</script>

<style>
.slide-img {

}
.slide-img .vueperslide {
  border-radius: 5px;
  transition: 0.5s;
  object-fit: cover;
}
.slide-img .vueperslide:hover {
  transform: scale(0.9);
}
.vueperslide__title{
  margin-top: 60%;
  opacity: 0.5;
  color: white;
}
.modal-dialog {
  max-width: 80%!important;
  margin: 1.75rem auto;
  border-radius: 20px;
}
.modal-img{
  height: 350px;
}
.vueperslides__arrows svg{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border:2px solid var(--dark);
}
.vueperslides__arrows svg:hover{
  background-color: var(--dark);
}
</style>