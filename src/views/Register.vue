<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
   <div class="container-fluid">
     <div class="row justify-content-center">
       <div class="col-12 col-md-6">
         <div class="card">
           <div class="card-header">
              <span>Register User</span>
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
                 <button class="btn btn-outline-dark ">
                   Sign up
                 </button>
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
      }
    }
  },
  methods: {
    signUp() {
      if(this.Form.password !== this.Form.confirm_password){
        console.log('not same')
      }else{

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
              console.log(errorMessage)
              alert(errorMessage)
            });

      }
    }
  },
}
</script>

<style>
  .form-control:focus{
    color: var(--dark);
    background-color: var(--bg);
    outline: 0;
    box-shadow: var(--bg);
    border-color: var(--dark);
  }
</style>