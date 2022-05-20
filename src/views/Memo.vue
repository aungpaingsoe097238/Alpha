<template>
  <div>
    <div class="container-fluid mt-5 fr">
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
          <main class="gallery gallery__content--flow">
            <figure v-for="(d,index) in data" :key="index">
              <img :src="d.image"
                   alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
                   title="Photo by Giacomo Lucarini for Unsplash">
              <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">{{ d.date }}</h1>
                <h2 class="title title--secondary">{{ d.message }}</h2>
              </figcaption>
            </figure>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {collection, getDocs} from "firebase/firestore";
import db from "@/firebase";

export default {
  data: function () {
    return {
      data: [],
      index: null
    };
  },

  created() {
    this.getData();
  },

  methods: {
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

}

.gallery__content--flow {
  display: flex;
  flex-wrap: wrap;
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
  box-shadow:
      rgb(40, 40, 40, 0.1) 0px 2px 3px,
      rgb(20, 20, 20, 0.2) 0px 5px 8px,
      rgb(0, 0, 0, 0.25) 0px 10px 12px;
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

</style>