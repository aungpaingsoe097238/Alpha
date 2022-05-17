<template>
  <div>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-12">
          <span class="blog-title-card">Memoary</span> <br>
          <span class="blog-title">
            History is become the life of a part
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <gallery :images="images" :index="index" @close="index = null"></gallery>
          <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  data: function () {
    return {
      images: [
        require('../assets/img/tzuyu/1.jpg'),
        require('../assets/img/tzuyu/2.jpg'),
        require('../assets/img/tzuyu/3.jpg'),
        require('../assets/img/tzuyu/4.jpg'),
        require('../assets/img/tzuyu/5.jpg'),
        require('../assets/img/tzuyu/6.jpg'),
        require('../assets/img/tzuyu/7.jpg'),
        require('../assets/img/tzuyu/8.jpg'),
        require('../assets/img/tzuyu/9.jpg'),
      ],
      index: null
    };
  },

  components: {
    'gallery': VueGallery
  },
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>