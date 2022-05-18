<template>
  <div>
    <div class="container-fluid mt-5">
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
              <b-tabs pills fill>

<!--                Memoary -->
                <b-tab title="Memo" active>
                     <div class="row justify-content-center">
                       <div class="col-12 col-md-12 ">
                         <div class="card mt-3">
                           <div class="card-header">
                             <div class="d-flex justify-content-between align-items-center">
                               <span class="text-black-50">Memoary Table</span>
                               <b-button v-b-modal.modal-memo variant="outline-dark">
                                 <i class="fas fa-plus"></i>
                                 Add
                               </b-button>
                             </div>
                           </div>
                           <div class="card-body">
                             <table class="table align-middle " >
                               <thead>
                               <tr>
                                 <th>#</th>
                                 <th>Name</th>
                                 <th>Image</th>
                                 <th>Date</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                                 <td>1</td>
                                 <td>img one</td>
                                 <td>
                                   <img src="../assets/img/tzuyu/1.jpg" class="memo-img shadow-sm rounded-2" alt="">
                                 </td>
                                 <td>5-3-2000</td>
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
    <b-modal id="modal-memo" centered title="Memo Create" hide-footer >
      <form @submit.prevent="createMemo()">
        <div class="input-group">
          <input type="text" placeholder="first photo" class="form-control">
        </div>
        <div class="input-group mt-3">
          <input type="file" class="form-control">
        </div>
        <div class="input-group mt-3">
          <button class="btn btn-outline-dark ">Create</button>
        </div>
      </form>
    </b-modal>
<!--    Modal -->

  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      memo : {
        'message' : '',
        'image' : ''
      }
    }
  },
  methods: {
    createMemo() {
      console.log(this.memo)
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