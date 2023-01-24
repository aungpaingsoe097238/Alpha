<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 fr">
   <div class="container-fluid">
     <div class="row">
       <div class="col-12 col-md-6">
         <div>
            <span class="blog-title">
              Register new Account
            </span>
           <p class="fw-bolder mt-3">
            This is only for admin
           </p>
         </div>
       </div>
       <div class="col-12 col-md-6">
         <div class="card">
          <div class="card-header bg-white">
              <div class=" d-flex justify-content-center align-item-center gap-2 h4 py-2" >
                <span><i class="bi bi-person-circle mb-0"></i></span>
                <span class="mb-0">Account</span> 
              </div>
            </div>
           <div class="card-body">
             <form @submit.prevent="signUp()">
               <div class="input-group">
                 <input type="email" placeholder="example@gmail.com" v-model="Form.email" class="form-control">
               </div>
               <div class="input-group mt-3">
                 <input type="password" placeholder="****" v-model="Form.password" class="form-control">
               </div>
               <div class="input-group mt-3">
                 <input type="password" placeholder="****" v-model="Form.confirm_password" class="form-control">
               </div>
               <div class="input-group mt-3">
                 <button class="btn btn-outline-dark form-control btn-sm" :disabled="spinner">
                   <span v-if="spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   Sign up
                 </button>
               </div>
               <div class="input-group mt-3">
                  <span class="text-center w-100">
                    <router-link class="nav-link text-dark" :to="{ name : 'login' }">
                      go to login
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
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  name: "Register",
  data() {
    return {
      Form:{
        'email' : '',
        'password' : '',
        'confirm_password' : ''
      },
      spinner : false,
    }
  },
  methods: {
    signUp() {
      if(this.Form.password !== this.Form.confirm_password){
        console.log('not same')
      }else{
        this.spinner = true;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.Form.email, this.Form.password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              this.$router.push('/login');
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              this.spinner = false;
              console.log(errorMessage)
              alert(errorMessage)
            });

      }
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