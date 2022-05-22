<template>
  <div>
    <div class="mt-5">
      <div class="row">
        <div class="col-12">
          <span class="blog-title-card">Account</span> <br>
          <span class="blog-title">
              what on your mind?
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="mt-3">
              <b-tabs >

<!--                Memoary -->
                <b-tab title="Memo" active>
                     <div class="row justify-content-center">
                       <div class="col-12 col-md-12 ">
                          <Memoary></Memoary>
                       </div>
                     </div>
                </b-tab>
<!--                Memoary-->

                <b-tab title="Blog">
                      <div class="row justify-content-center">
                       <div class="col-12 col-md-12 ">
                          <Blog></Blog>
                       </div>
                     </div>
                </b-tab>

                <b-tab title="Contact">
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-12 ">
                      <Content></Content>
                    </div>
                  </div>
                </b-tab>

                <b-tab title="Projects">
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-12 ">
                      <Projects></Projects>
                    </div>
                  </div>
                </b-tab>

              </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Memoary from '../components/account/memoary.vue'
import Blog from '../components/account/blog.vue'
import Content from "../components/account/contact.vue";
import Projects from "../components/account/projects.vue";
  export default{
    components: {Content, Memoary, Blog , Projects}
  }
</script>

<style>

.nav-link {
  color: var(--dark) !important;
  transition: 0.5s;
}
.card{
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}
.gray-100{
  filter: grayscale(100%) !important;
}
</style>


