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
              <b-tabs pills >

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
                  <b-card-text>Tab contents 2</b-card-text>
                </b-tab>
                <b-tab title="Projects">
                  <b-card-text>Tab contents 2</b-card-text>
                </b-tab>
                <b-tab title="Skills">
                  <b-card-text>Tab contents 2</b-card-text>
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
  export default{
    components: { Memoary, Blog }
  }
</script>


