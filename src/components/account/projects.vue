<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-black-50">Projects Table</span>
          <b-button
              v-b-modal.modal-projects
              variant="outline-secondary"
              size="sm"
              @click="defaultData()"
          >
            <i class="fas fa-plus mb-0"></i>
          </b-button>
        </div>
      </div>
      <div class="card-body overflow-auto">
        <table class="table align-middle table-borderless table-responsive z-index-1000">
          <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>Image</th>
            <th>desc</th>
            <th>date</th>
            <th>Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(d,index) in data" :key="index">
            <td>{{ index }}</td>
            <td>{{ d.title }}</td>
            <td>
              <img
                  :src="d.image"
                  class="memo-img shadow-sm rounded-2 gray-100"
                  alt=""
              />
            </td>
            <td>
              {{ resultListLimited(d.desc) }}
            </td>
            <td>
              {{ d.date }}
            </td>
            <td>
              <b-dropdown variant="link" no-caret>
                <template #button-content>
                  <i class="fas fa-list text-dark"></i>
                </template>

                <b-dropdown-item @click="edit(d)">
                  <i class="fas fa-edit text-black-50"></i>
                  <span
                      class="align-middle ml-50 text-black-50 p-2"
                      style="font-size: 15px"
                  >edit</span
                  >
                </b-dropdown-item>

                <b-dropdown-item @click="del(d)">
                  <i class="fas fa-trash text-black-50"></i>
                  <span
                      class="align-middle ml-50 text-black-50 p-2"
                      style="font-size: 15px"
                  >delete</span
                  >
                </b-dropdown-item>
              </b-dropdown>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--    Modal -->
    <b-modal id="modal-projects" no-close-on-backdrop centered :title="is_edit === true ? 'Projects Edit' : 'Projects Create' " hide-footer scrollable>
      <form @submit.prevent="is_edit === true ? update() : create()">
        <div class="input-group">
          <input type="text" placeholder="title" v-model="Form.title" class="form-control" required>
        </div>
        <div class="input-group mt-3">
          <input type="url" placeholder="http://example.com" v-model="Form.link" class="form-control" required>
        </div>
        <div class="input-group mt-3">
          <textarea name="" id="" cols="5" rows="5" class="form-control" v-model="Form.desc" placeholder="description" required></textarea>
        </div>
        <div class="input-group mt-3 d-flex justify-content-center align-items-center ">
          <div class="upload-img-ui" v-if="previewImage === ''" @click="imageUploadUi">
            <img src="../../assets/img/icons/image-default.png"  alt="">
          </div>
          <input type="file" id="imageUpload" @change="imageUpload" class="form-control d-none">
        </div>
        <div class="input-group mt-3 d-flex justify-content-center align-items-center" v-if="previewImage !== ''">
          <img :src="previewImage" class="gray-100 img-fluid border border-1 border-light rounded-2 shadow-sm" @click="imageUploadUi" alt="">
        </div>
        <div class="input-group mt-3">
          <button class="btn btn-outline-dark form-control btn-sm" :disabled="spinner">
            <span v-if="spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{ is_edit === true ? 'Update' : 'Create' }}</button>
        </div>
      </form>
    </b-modal>
    <!--    Modal -->

  </div>
</template>

<script>
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {addDoc, collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import db from "@/firebase";
import uniqid from 'uniqid';

export default {
  data() {
    return {
      Form:{
        'title' : '',
        'image' : '',
        'desc'  : '',
        'date'  : '',
        'link'  : '',
      },
      fileName : '',
      file : '',
      previewImage : '',
      is_edit : false,
      data : [],
      spinner : false,
    }
  },
  created() {
    this.getData();
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
  methods: {
    // image
    imageUploadUi() {
      document.getElementById("imageUpload").click();
    },
    imageUpload() {
      const files = event.target.files;
      this.fileName = files[0].name;
      this.file = event.target.files[0]; // upload to firebase
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.previewImage = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
    },
    formatImage() {
      this.spinner = true;
      // Upload To Firebase Storage
      let random = Math.random() * 100000000000000000;
      const storage = getStorage();
      const storageRef = ref(storage, "projects/" + uniqid() + this.fileName);
      const uploadTask = uploadBytesResumable(storageRef, this.file);
      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      }, (error) => {
        // Handle unsuccessful uploads
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              this.Form.image = downloadURL;
              if (this.is_edit === true) {
                this.updateToFb();
              }
              else {
                this.uploadToFb();
              }
            });
      });
      // End Upload To Firebase Storage
    },
    // end image
    // Crud
    create() {
      this.Form.date = this.today;
      this.formatImage();
    },
    async getData() {
      const ColRef = collection(db, "projects");
      let SnapShot = await getDocs(ColRef);
      let data = [];
      SnapShot.forEach(el => {
        let Data = el.data();
        Data.id = el.id;
        data.push(Data);
      });
      this.data = data;
    },
    edit(d){
      this.Form.date = this.today;
      this.Form.title = d.title;
      this.Form.image = d.image;
      this.Form.desc = d.desc;
      this.Form.id = d.id;
      this.Form.link = d.link;
      this.previewImage = d.image;
      this.$bvModal.show("modal-projects");
      this.is_edit = true;
    },
    update(){
      this.formatImage();
    },
    async updateToFb(){
      const ColRef = collection(db, "projects");
      let Ref = doc(ColRef, this.Form.id);
      const updateDoc = await setDoc(Ref, {
        "title": this.Form.title,
        "desc": this.Form.desc,
        "image": this.Form.image,
        "date": this.Form.date,
        "link": this.Form.link,
      }).then(el => {
        this.$bvModal.hide("modal-projects");
        this.getData();
        this.spinner = false;
      });
    },
    async del(d) {

      let text = "Are you sure , you want to delete.";
      if (window.confirm(text) == true) {

        const ColRef = collection(db, "projects");
        let Ref = doc(ColRef, d.id);
        await deleteDoc(Ref);
        this.data = this.data.filter((el) => {
          return el.id !== d.id;
        });

      } else {
        return;
      }

    },
    // Crud End
    // Upload To Firebase Store
    uploadToFb(){
      const ColRef = collection(db, "projects");
      const addedDoc = addDoc(ColRef, {
        'title' : this.Form.title,
        'image' : this.Form.image,
        'desc'  : this.Form.desc,
        'date'  : this.Form.date,
        "link": this.Form.link,
      }).then((el)=>{
        this.spinner = false;
      });
      this.Form.title = "";
      this.Form.image = "";
      this.Form.desc = "";
      this.Form.date = "";
      this.$bvModal.hide("modal-projects");
      this.data = [];
      this.getData();
    },
    // Upload To FireBase Store End
    // Default
    defaultData() {
      this.Form.title = "";
      this.Form.image = "";
      this.Form.desc = "";
      this.Form.date = "";
      this.Form.link = "";
      this.Form.id = "";
      this.previewImage = "";
      this.is_edit = false;
      this.spinner = false;
    },
    // Default End
    resultListLimited(d){
      return d.slice(0,30)+'...';
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
