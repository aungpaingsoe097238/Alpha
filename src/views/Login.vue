<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-header">
              <span>Login User</span>
            </div>
            <div class="card-body">
              <form @submit.prevent="signIn()">
                <div class="input-group">
                  <input type="email" placeholder="example@gmail.com" v-model="Form.email" class="form-control">
                </div>
                <div class="input-group mt-3">
                  <input type="password" placeholder="****" v-model="Form.password" class="form-control">
                </div>
                <div class="input-group mt-3 d-flex justify-content-between align-items-center">
                  <button class="btn btn-outline-dark ">
                    Sign in
                  </button>
                  <span class="">
                    <router-link class="nav-link" :to="{ name : 'register' }">
                      I don't have a account.
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
      }
    }
  },
  methods: {
    signIn() {
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
            this.password = '';
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
</style>