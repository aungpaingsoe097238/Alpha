<template>
  <div class="d-flex  justify-content-center align-items-center min-vh-100">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-11">
          <div>
            <h2>Blog</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Alias amet commodi deserunt ex, facilis, impedit labore minima mollitia
              natus optio quasi quod recusandae rerum sit tenetur unde vitae. Iure, velit.
            </p>
          </div>
          <div>
            <vueper-slides
                class="no-shadow slide-img"
                :visible-slides="3"
                slide-multiple
                :gap="3"
                :slide-ratio="1 / 4"
                :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
              <vueper-slide
                  v-for="(slide, i) in slides"
                  :key="i"
                  class="slide-img"
                  :image="slide.image"
                  @click.native="c(slide)"
              >
                <template #content>
                  <div class="vueperslide__content-wrapper" >
                    <div class="vueperslide__title">{{ slide.title }}</div>
                  </div>
                </template>
              </vueper-slide>
            </vueper-slides>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: "Blog",
  components: { VueperSlides, VueperSlide },
  data: () => ({
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
    c(slide) {
      console.log(slide)
    }
  },
}
</script>

<style scoped>
.slide-img {

}
.slide-img .vueperslide {
  border-radius: 10px;
  transition: 0.5s;
  object-fit: contain;
}
.slide-img .vueperslide:hover {
  transform: scale(0.9);
}
.vueperslide__title{
  margin-top: 60%;
  opacity: 0.5;
  color: white;
}
</style>