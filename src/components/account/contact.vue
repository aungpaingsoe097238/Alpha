<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-black-50">Contact Table</span>
        </div>
      </div>
      <div class="card-body overflow-auto">
        <table class="table   table-borderless align-middle">
          <thead>
            <tr>
              <th class="w-25">Info</th>
              <th class="w-50">Message</th>
              <th class="w-25">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d,index) in data" :key="index">
              <td>
                <div>
                  <span>
                    <i class="fas fa-calendar-alt"></i>
                    {{ d.date }}</span>
                  <br>
                  <span>
                    <i class="fas fa-user-circle"></i>
                    {{ d.name }}</span>
                  <br>
                  <span>
                    <i class="fas fa-mail-bulk"></i>
                    {{ d.email }}</span>
                </div>
              </td>
              <td >
                <div class="card d-inline-block rounded-pill text-warning">
                  <div class="card-body">
                    {{ d.desc }}
                  </div>
                </div>
              </td>
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