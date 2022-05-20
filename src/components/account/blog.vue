<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-black-50">Blog Table</span>
          <b-button
            v-b-modal.modal-blog
            variant="outline-secondary"
            size="sm"
            @click="defaultData()"
          >
            <i class="fas fa-plus mb-0"></i>
          </b-button>
        </div>
      </div>
      <div class="card-body">
        <table class="table align-middle table-responsive z-index-1000">
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
                  class="memo-img shadow-sm rounded-2"
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
    <b-modal id="modal-blog" no-close-on-backdrop centered :title="is_edit === true ? 'Blog Edit' : 'Blog Create' " hide-footer scrollable>
      <form @submit.prevent="is_edit === true ? update() : create()">
        <div class="input-group">
          <input type="text" placeholder="title" v-model="Form.title" class="form-control" required>
        </div>
        <div class="input-group mt-3">
            <textarea name="" id="" cols="5" rows="5" class="form-control" v-model="Form.desc" placeholder="description" required></textarea>
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
          <button class="btn btn-outline-dark ">{{ is_edit === true ? 'Update' : 'Create' }}</button>
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

export default {
        data() {
            return {
                Form:{
                    'title' : '',
                    'image' : '',
                    'desc'  : '',
                    'date'  : '',
                },
                fileName : '',
                file : '',
                previewImage : '',
                is_edit : false,
                data : []
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
              // Upload To Firebase Storage
              let random = Math.random() * 100000000000000000;
              const storage = getStorage();
              const storageRef = ref(storage, "blog/" + random + this.fileName);
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
              const ColRef = collection(db, "blog");
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
              this.previewImage = d.image;
              this.$bvModal.show("modal-blog");
              this.is_edit = true;
            },
            update(){
              this.formatImage();
            },
            async updateToFb(){
              const ColRef = collection(db, "blog");
              let Ref = doc(ColRef, this.Form.id);
              const updateDoc = await setDoc(Ref, {
                "title": this.Form.title,
                "desc": this.Form.desc,
                "image": this.Form.image,
                "date": this.Form.date
              }).then(el => {
                this.$bvModal.hide("modal-blog");
                this.getData();
              });
            },
            async del(d) {
              const ColRef = collection(db, "blog");
              let Ref = doc(ColRef, d.id);
              await deleteDoc(Ref);
              this.data = this.data.filter((el) => {
                return el.id !== d.id;
              });
            },
            // Crud End
            // Upload To Firebase Store
            uploadToFb(){
              const ColRef = collection(db, "blog");
                const addedDoc = addDoc(ColRef, {
                  'title' : this.Form.title,
                  'image' : this.Form.image,
                  'desc'  : this.Form.desc,
                  'date'  : this.Form.date,
                });
                this.Form.title = "";
                this.Form.image = "";
                this.Form.desc = "";
                this.Form.date = "";
                this.$bvModal.hide("modal-blog");
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
              this.Form.id = "";
              this.previewImage = "";
              this.is_edit = false;
            },
            // Default End
            resultListLimited(d){
              return d.slice(0,30)+'...';
            }
          },
    }
</script>

<style lang="scss" scoped>

</style>