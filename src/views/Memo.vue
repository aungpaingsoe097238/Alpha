<template>
  <div>
    <div class="container-fluid mt-5 fr">
      <div class="row">
        <div class="col-12">
          <span class="blog-title-card">Memoary</span> <br>
          <span class="blog-title" style="text-indent: 50px;text-align: justify ">
            History is become the life of a part
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <main class="gallery gallery__content--flow">
            <figure v-for="(d,index) in data" :key="index" @click="view(d)">
              <img :src="d.image"
                   alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
                   title="Photo by Giacomo Lucarini for Unsplash">
              <figcaption class="header__caption" role="presentation">
                <h5 class="title title--primary">{{ d.date }}</h5>
                <h5 class="title title--secondary">{{ d.message }}</h5>
              </figcaption>
            </figure>
          </main>
        </div>
      </div>
    </div>
<!--    View-->
    <div class="">
      <div class="view view-ani" id="view"
           :style="{
        'background-image': `url(${detail.image})` }" v-if="is_view">
      </div>
      <div>
        <div class="view-btn view-ani" @click="is_view = false" v-if="is_view">
          <img src="../assets/img/icons/close.png" style="width: 25px;height: 25px" alt="">
        </div>
      </div>
    </div>
<!--    End View-->
  </div>
</template>

<script>
import {collection, doc, getDocs} from "firebase/firestore";
import db from "@/firebase";

export default {
  data: function () {
    return {
      data: [],
      detail: '',
      index: null,
      is_view: false,
    };
  },

  created() {
    this.getData();
  },

  methods: {

    view(d){
      this.is_view = true;
      this.detail = d;
    },

    async getData() {
      const ColRef = collection(db, "memoary");
      let SnapShot = await getDocs(ColRef);
      let data = [];
      SnapShot.forEach(el => {
        let Data = el.data();
        Data.id = el.id;
        data.push(Data);
      });
      this.data = data;
    }
  },
}
</script>

<style scoped>

.view {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 70%;
  background-color: black;
  filter: grayscale(100%);
}

.view-btn{
  position: fixed;
  z-index: 1000;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.gallery {
  --anim-time--hi: 266ms;
  --anim-time--med: 400ms;
  --anim-time--lo: 600ms;
  margin-top: 20px;
  display: flex;
  place-content: flex-start;
  max-width: clamp(30rem, 95%, 50rem);
  width: max(22.5rem, 100%);
  margin-inline: auto;
  padding: clamp(0px, (30rem  - 100vw) * 9999, 1rem);
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.gallery__content--flow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.gallery__content--flow > *  {
  flex-grow: 1;
  flex-basis: calc((30rem - 100%) * 999);
}

figure {
  display: flex;
  min-width: 14rem;
  max-height: 16rem;
  position: relative;
  border-radius: .35rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  overflow: hidden;
  transition: transform var(--anim-time--med) ease;
}

figure::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to top,
      hsla(0, 0%, 0%, 0.8) 0%,
      hsla(0, 0%, 0%, 0.7) 12%,
      hsla(0, 0%, 0%, 0.2) 41.6%,
      hsla(0, 0%, 0%, 0.125) 50%,
      hsla(0, 0%, 0%, 0.01) 59.9%,
      hsla(0, 0%, 0%, 0) 100%
  );
  opacity: 0;
  transition-property: opacity, transform;
  transition-duration: var(--anim-time--med), var(--anim-time--med);
  transition-timing-function: ease, ease;
  z-index: 4;
}

.header__caption {
  z-index: 10;
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  align-self: flex-end;
  width: 100%;
  gap: 0.5rem;
  padding: 1rem;
  justify-content: center;
  text-align: center;
  transform: translateY(100%);
  transition: transform var(--anim-time--hi) linear,
  opacity var(--anim-time--hi) linear;
}

figure:hover::before {
  opacity: 0.8;
}

figure:hover .header__caption {
  transform: translateY(0);
  opacity: 1;
}
figure:hover img{
  transform: scale(1);
}
.title {
  color: #fff;
}

.title--primary {
  font-size: 1.25rem;
  font-weight: bold;
}

.title--secondary {
  text-transform:uppercase;
  font-weight: bold;
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
  transform: scale(1.15);
  aspect-ratio: 16 / 13;
  transition: 400ms ease-in-out;
}


@media only screen and (max-width : 768px) {
  .view {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
    background-color: black;
  }
}

</style>