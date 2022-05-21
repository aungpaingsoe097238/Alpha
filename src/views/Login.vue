<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <div>
            <span class="blog-title">
              Login to Admin Account
            </span>
            <p class="fw-bolder mt-3">
              admin သာလျှင် login ၀င်ခွင့်ရှိသည်။
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card ">
            <div class="card-body">
              <form @submit.prevent="signIn()">
                <div class="input-group">
                  <input type="email" placeholder="example@gmail.com" v-model="Form.email" class="form-control">
                </div>
                <div class="input-group mt-3">
                  <input type="password" placeholder="****" v-model="Form.password" class="form-control">
                </div>
                <div class="input-group mt-3">
                  <button class="btn btn-outline-dark form-control btn-sm" :disabled="spinner">
                    <span v-if="spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Sign in
                    <i class="fas fa-sign-in"></i>
                  </button>
                </div>
                <div class="input-group mt-3" v-if="is_user">
                  <span class="text-center w-100">
                    <router-link class="nav-link text-dark" :to="{ name : 'register' }">
                      register new account
                    </router-link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      Form: {
        'name' : '',
        'password' : '',
      },
      spinner : false,
    }
  },
  computed: {
    is_user() {
      if(localStorage.getItem('token')){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    signIn() {
      this.spinner = true;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.Form.email, this.Form.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            this.getUid();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            this.spinner = false;
            this.Form.password = '';
          });
    },
    getUid(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          localStorage.setItem('token',uid);
          // this.$router.push('/account');
          window.location.href = '/';
        } else {
          // User is signed out
          // ...
        }
      });
    }
  },
}
</script>

<style scoped>
  .form-control:focus{
    color: var(--dark);
    background-color: var(--bg);
    outline: 0;
    box-shadow: var(--bg);
    border-color: var(--dark);
  }
  .card{
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  }
</style>