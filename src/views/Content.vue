<template>
  <div class="d-flex min-vh-100 justify-content-center align-items-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <span class="blog-title-card">Contact</span> <br>
          <span class="blog-title">Get in Touch</span>
           <form action="">
                <div class="form-floating mb-5">
                  <input type="text" class="form-control content-input" id="floatingInput" placeholder="Name" >
                  <label for="floatingInput">Name *</label>
                </div>
                <div class="form-floating mb-5">
                  <input type="email" class="form-control content-input" id="floatingInput" placeholder="Email">
                  <label for="floatingInput">Email *</label>
                </div>
                <div class="form-floating mb-5">
                  <input type="text" class="form-control content-input" id="floatingInput" placeholder="Email">
                  <label for="floatingTextarea">Comments *</label>
                </div>
                <div class="text-end">
                  <button class="btn btn-outline-dark btn-lg">Submit</button>
                </div>
              </form>
        </div>
        <div class="col-12 col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4541.7623091517535!2d96.2851319961658!3d16.81883148218169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c18cd2e8e1f93d%3A0xa8feee28e69428d4!2z4YCA4YCv4YCc4YCs4YC44YCd4YCy!5e0!3m2!1sen!2smm!4v1652535047140!5m2!1sen!2smm"
                  width="100%"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>

:root {
  --primary-color: #4a90e2;
  --dark: #404040;
  --light: #ffff;
}

.content-input{
  border-top-color: var(--light);
  border-left-color: var(--light);
  border-right-color: var(--light);
  border-bottom-color: var(--dark);
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: var(--light);
  outline: 0;
  box-shadow: var(--light);
  border-bottom-color: var(--dark);
}


</style>