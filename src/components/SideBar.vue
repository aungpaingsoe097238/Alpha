<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <b-tabs pills nav-wrapper-class="w-25" vertical>
            <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
            <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
            <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped >

</style>