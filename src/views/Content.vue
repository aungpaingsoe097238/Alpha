<template>
  <div class="mt-5">
    <div class="container-fluid fr">
      <div class="row">
        <div class="col-12 col-md-12">
          <span class="blog-title-card">Contact</span> <br>
          <span class="blog-title">Get in Touch</span>
          <div class="mt-5" style="filter: grayscale(100%)">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4541.7623091517535!2d96.2851319961658!3d16.81883148218169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c18cd2e8e1f93d%3A0xa8feee28e69428d4!2z4YCA4YCv4YCc4YCs4YC44YCd4YCy!5e0!3m2!1sen!2smm!4v1652535047140!5m2!1sen!2smm"
                    width="100%"
                    height="450"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
            </iframe>
          </div>
        </div>
        <div class="col-12 col-md-12">
          <div class="my-5">
            <form @submit.prevent="messageUpload()">
              <div class="form-floating mb-5">
                <input type="text" class="form-control content-input" v-model="Form.name" id="floatingInput" placeholder="Name" required>
                <label for="floatingInput">Name *</label>
              </div>
              <div class="form-floating mb-5">
                <input type="email" class="form-control content-input" v-model="Form.email" id="floatingInput" placeholder="Email" required>
                <label for="floatingInput">Email *</label>
              </div>
              <div class="form-floating mb-5">
                <textarea class="form-control content-textarea" v-model="Form.desc" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                <label for="floatingTextarea">Comments *</label>
              </div>
              <div class="text-end">
                <button class="btn btn-outline-dark btn-lg" :disabled="spinner">
                  <span v-if="spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebase';
import {addDoc, getDocs, doc, deleteDoc, collection} from 'firebase/firestore';
export default {
  name: "Content",
  data() {
    return {
      Form : {
        'name' : '',
        'email' : '',
        'desc' : ''
      },
      spinner : false,
      messages : []
    }
  },
  computed: {
    today() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();
      return mm + "/" + dd + "/" + yyyy;
    },
  },
  created() {
    this.fetchMessage();
  },
  methods: {
    async fetchMessage(){
      const messageColRef = collection(db,'messages');
      let messageSnapShot = await getDocs(messageColRef);
      messageSnapShot.forEach(el=>{
        let cityData = el.data();
        cityData.id = el.id;
        this.messages.push(cityData);
      });
    },
    async messageUpload() {
      this.spinner = true;
      const messageColRef = collection(db,'messages');
      if(this.Form.name === '' || this.Form.desc === '' || this.Form.email === '' ){
        alert(  'record do not match' )
      }else{
        const addedDoc = await addDoc(messageColRef,{
          'date' : this.today,
          'name' : this.Form.name,
          'email' : this.Form.email,
          'desc' : this.Form.desc
        });
        this.spinner = false;
        this.Form.name = '';
        this.Form.email = '';
        this.Form.desc = '';
        this.$swal("successfully contact message.");
      }
    }
  },
}
</script>

<style scoped>

.content-input{
  background-color: var(--bg);
  border-top-color: var(--bg);
  border-left-color: var(--bg);
  border-right-color: var(--bg);
  border-bottom-color: var(--dark);
}

.content-textarea{
  border-color: var(--dark);
  border-radius: 5px !important;
  background-color: var(--bg);
  height: 150px !important;
}

.content-textarea:focus {
  color: var(--dark);
  background-color: var(--bg);
  outline: 0;
  box-shadow: var(--bg);
  border-color: var(--dark);
}

.content-input:focus {
  color: var(--dark);
  background-color: var(--bg);
  border-color: var(--bg);
  outline: 0;
  box-shadow: var(--bg);
  border-bottom-color: var(--dark);
}



</style>