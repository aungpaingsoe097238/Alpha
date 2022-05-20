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
                         <div class="card mt-3">
                           <div class="card-header">
                             <div class="d-flex justify-content-between align-items-center">
                               <span class="text-black-50">Memoary Table</span>
                               <b-button v-b-modal.modal-memo variant="outline-secondary" @click="defaultData()" size="sm">
                                 <i class="fas fa-plus mb-0"></i>
                               </b-button>
                             </div>
                           </div>
                           <div class="card-body">
                             <table class="table align-middle table-responsive z-index-1000" >
                               <thead>
                               <tr>
                                 <th>#</th>
                                 <th>Message</th>
                                 <th>Image</th>
                                 <th>Date</th>
                                 <th>Handle</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr v-for="(memo,index) in memoary" :key="index">
                                 <td>{{ index }}</td>
                                 <td>{{ memo.message }}</td>
                                 <td>
                                   <img :src="memo.image" class="memo-img shadow-sm rounded-2" alt="">
                                 </td>
                                 <td>
                                   {{ memo.date }}
                                 </td>
                                 <td>
                                   <b-dropdown
                                       variant="link"
                                       no-caret>

                                     <template #button-content>
                                       <i class="fas fa-list text-dark" ></i>
                                     </template>

                                     <b-dropdown-item @click="edit(memo)">
                                       <i class="fas fa-edit text-black-50"></i>
                                       <span class="align-middle ml-50 text-black-50 p-2" style="font-size: 15px;" >edit</span>
                                     </b-dropdown-item>

                                     <b-dropdown-item @click="del(memo)">
                                       <i class="fas fa-trash text-black-50"></i>
                                       <span class="align-middle ml-50 text-black-50 p-2" style="font-size: 15px;" >delete</span>
                                     </b-dropdown-item>

                                   </b-dropdown>

                                 </td>
                               </tr>
                               </tbody>
                             </table>
                           </div>
                         </div>
                       </div>
                     </div>
                </b-tab>
<!--                Memoary-->

                <b-tab title="Blog">
                  <b-card-text>Tab contents 2</b-card-text>
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

<!--    Modal -->
    <b-modal id="modal-memo" no-close-on-backdrop centered :title="is_edit === true ? 'Memoary Edit' : 'Memoary Create' " hide-footer >
      <form @submit.prevent=" is_edit === true ? updatingMemoary() : createMemo()">
        <div class="input-group">
          <input type="text" placeholder="message" v-model="memo.message" class="form-control" required>
        </div>
        <div class="input-group mt-3">
          <div class="border border-1 border-secondary p-5 rounded-3 " v-if="previewImage === ''" @click="imageUploadUi">
            <i class="fas fa-plus"></i>
          </div>
          <input type="file" id="imageUpload" @change="imageUpload" class="form-control d-none">
        </div>
        <div class="input-group mt-3" v-if="previewImage !== ''">
          <img :src="previewImage" class=" img-fluid border border-1 border-light rounded-2 shadow-sm" @click="imageUploadUi" height="50px" alt="">
        </div>
        <div class="input-group mt-3">
          <button class="btn btn-outline-dark " >{{ is_edit === true ? 'Update' : 'Create' }}</button>
        </div>
      </form>
    </b-modal>
<!--    Modal -->

  </div>
</template>

<script>
import db from '../firebase';
import { addDoc, getDocs, doc, deleteDoc, collection , setDoc} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default {
  name: "Upload",
  data() {
    return {
      memo : {
        'message' : '',
        'image' : '',
        'date' : ''
      },
      fileName : '',
      file : '',
      previewImage : '',
      memoary: [],
      is_edit: false
    }
  },
  computed: {
    today() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      return mm + '/' + dd + '/' + yyyy;
    }
  },
  created() {
    this.getMemoary();
  },
  methods: {

    imageUploadUi(){
      document.getElementById('imageUpload').click();
    },

    // Memoary
    imageUpload() {
      const files = event.target.files
      this.fileName = files[0].name
      this.file = event.target.files[0] // upload to firebase
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.previewImage = fileReader.result
      })
      fileReader.readAsDataURL(files[0]);
    },

    createMemo() {
      // Create Date
      this.memo.date = this.today;
      // Create Date
      this.formatImage();
    },

    uploadMemoary(){
      // Upload To Firestore
      const memoaryColRef = collection(db,'memoary');
      if(this.memo.message === '' || this.memo.image === '' ){
        alert(  'record do not match' )
      }else{
        const addedDoc = addDoc(memoaryColRef,{
          'message' : this.memo.message,
          'image' : this.memo.image,
          'date' : this.memo.date
        });
        this.memo.message = '' ;
        this.memo.image = '';
        this.$bvModal.hide('modal-memo')
        this.memoary = [];
        this.getMemoary();
      }
      // End Upload To Firestore
    },

    async getMemoary(){
      const memoaryColRef = collection(db,'memoary');
      let memoarySnapShot = await getDocs(memoaryColRef);
      let memoary = [];
      memoarySnapShot.forEach(el => {
        let memoaryData = el.data();
        memoaryData.id = el.id;
        memoary.push(memoaryData);
      });
      this.memoary = memoary;
    },

    async del(memo){
      const memoaryColRef = collection(db,'memoary');
      let mamoaryRef = doc(memoaryColRef,memo.id);
      await deleteDoc(mamoaryRef);
      let delMemoary = this.memoary.filter((el)=>{
        return el.id !== memo.id ;
      });
      this.memoary = delMemoary;
    },

    edit(memo){
      // Create Date
      this.memo.date = this.today;
      // Create Date

      //Format
      this.memo.message = memo.message;
      this.memo.image = memo.image;
      this.memo.id = memo.id;
      this.previewImage = memo.image;
      this.$bvModal.show('modal-memo')
      this.is_edit = true;
      // Format
    },

    updatingMemoary(){
      this.formatImage();
    },

    async updateMemoary(){
      const memoaryColRef = collection(db,'memoary');
      let memoaryRef = doc(memoaryColRef,this.memo.id);
      const updateDoc = await setDoc(memoaryRef,{
        'message' : this.memo.message,
        'image' : this.memo.image,
        'date'  : this.memo.date
      }).then(el=>{
        this.$bvModal.hide('modal-memo');
        this.getMemoary();
      })
    },

    formatImage(){
      // Upload To Firebase Storage
      let random = Math.random()*100000000000000000;
      const storage = getStorage();
      const storageRef = ref(storage, 'memoary/'+random+this.fileName);
      const uploadTask = uploadBytesResumable(storageRef, this.file);
      uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  this.memo.image = downloadURL;
                  if(this.is_edit === true){
                    this.updateMemoary();
                  }else{
                    this.uploadMemoary();
                  }
                });
          }
      );
      // End Upload To Firebase Storage
    },

    // End Memoary

    // Default Currnt Data
    defaultData(){
      this.memo.message = '';
      this.memo.image = '';
      this.memo.date = '';
      this.memo.id = '';
      this.previewImage = '';
      this.is_edit = false;
    }

  },
}
</script>

<style>
  .memo-img{
    height: 50px;
    object-fit: cover;
    border: 1px solid var(--light);
  }
  .close{
    width: 30px;
    height: 30px;
    background-color: white;
    border: 1px solid white;
    transition: 0.5s;
  }
  .close:hover{
    border-radius: 5px;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }
</style>