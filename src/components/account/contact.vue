<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-black-50">Contact Table</span>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-responsive align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d,index) in data" :key="index">
              <td>{{ index }}</td>
              <td>{{ d.date }}</td>
              <td>{{ d.name }}</td>
              <td>{{ d.email }}</td>
              <td>{{ d.desc }}</td>
              <td>
                <button class="btn btn-danger btn-sm rounded-circle" @click="del(d)">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {addDoc, collection, deleteDoc, doc, getDocs, setDoc} from "firebase/firestore";
import db from "@/firebase";
export default {
  name: "contact",
  data() {
    return {
      data: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const ColRef = collection(db, "messages");
      let SnapShot = await getDocs(ColRef);
      let data = [];
      SnapShot.forEach(el => {
        let Data = el.data();
        Data.id = el.id;
        data.push(Data);
      });
      this.data = data;
      console.log(this.data)
    },
    async del(d) {
      let text = "Are you sure , you want to delete.";
      if (window.confirm(text) == true) {

        const ColRef = collection(db, "messages");
        let Ref = doc(ColRef, d.id);
        await deleteDoc(Ref);
        this.data = this.data.filter((el) => {
          return el.id !== d.id;
        });

      } else {
        return;
      }

    },
  },
}
</script>

<style scoped>

</style>