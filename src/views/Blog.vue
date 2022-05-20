<template>
  <div class="mt-5 ">
    <div class="container-fluid fr">
      <div class="row">
        <div class="col-12">
          <span class="blog-title-card">Contact</span> <br>
          <span class="blog-title">Blog</span>
        </div>
      </div>
      <div class="row">
        <!--        Blog Image -->
        <div class="col-12 col-md-6" v-for="(b,index) in data" :key="index">
          <div class="grid d-flex flex-column">
            <figure class="effect-lily" >
              <img :src="b.image" alt="img12" />
              <figcaption>
                <div>
                  <h2>{{ b.title }}</h2>
                </div>
              </figcaption>
            </figure>
            <div class="text-start p-3">
              <span class="text-black-50 fw-bolder">
                <i class="fas fa-calendar"></i>
              {{ b.date }}
              </span>
              <div class="dropdown-divider montserrat-font" ></div>
              <p class="text-black-50">
                {{ resultListLimited(b.desc) }}
              </p>
              <b-button variant="outline-dark"  @click="showDetail(b)">
                <span class="fw-bold">
                   read more
                </span>
                <i class="fas fa-arrow-right"></i>
              </b-button>
            </div>
          </div>
        </div>
        <!--        Blog Image-->
      </div>
    </div>

    <b-modal id="modal-blog-detail" no-close-on-backdrop size="lg" scrollable hide-footer :title="detailData.title">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <i class="fas fa-calendar pe-2"></i>
            <span class="fw-bolder">{{ detailData.date }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12">
            <img :src="detailData.image" class="img-fluid w-100 mt-3" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="mt-3 "  style="text-indent: 50px;text-align: justify ">
              {{ detailData.desc }}
            </p>
          </div>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import db from "@/firebase";

export default {
  name: "Blog",
  data() {
    return {
      data : [],
      detailData : ''
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const ColRef = collection(db, "blog");
      let SnapShot = await getDocs(ColRef);
      let data = [];
      SnapShot.forEach(el => {
        let Data = el.data();
        Data.id = el.id;
        data.push(Data);
      });
      this.data = data;
    },

    showDetail(data){
      this.$bvModal.show('modal-blog-detail');
      this.detailData = data;
      console.log(this.detailData)
    },

    resultListLimited(d){
      return d.slice(0,200)+'...';
    }
  },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

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


/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  text-align: center;
  cursor: pointer;
  box-shadow:
      rgb(40, 40, 40, 0.1) 0px 2px 3px,
      rgb(20, 20, 20, 0.2) 0px 5px 8px,
      rgb(0, 0, 0, 0.25) 0px 10px 12px;
  border-radius: 5px;
}

.grid figure img {
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.grid figure figcaption {
  padding: 2em;
  font-size: 1.25em;
  color: var(--light);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Individual effects */

/*---------------*/
/***** Lily *****/
/*---------------*/

figure.effect-lily img {
  max-width: none;
  width: -webkit-calc(100% + 50px);
  width: calc(100% + 50px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-20px,0, 0);
  transform: translate3d(-20px,0,0);
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

figure.effect-lily figcaption {
  text-align: left;
}

figure.effect-lily figcaption > div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  height: 50%;
}

figure.effect-lily h2,
figure.effect-lily p {
  -webkit-transform: translate3d(0,40px,0);
  transform: translate3d(0,40px,0);
}

figure.effect-lily h2 {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

figure.effect-lily p {
  color: rgba(255,255,255,0.8);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}

figure.effect-lily:hover img,
figure.effect-lily:hover p {
  opacity: 1;
}

figure.effect-lily:hover img,
figure.effect-lily:hover h2,
figure.effect-lily:hover p {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
  filter: grayscale(0);
}

figure.effect-lily:hover p {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}
</style>