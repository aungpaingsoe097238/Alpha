<template>
  <div class="d-flex min-vh-100 justify-content-center align-items-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2>What is my Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eius ut.
            Aliquam magni maiores mollitia saepe sed? Adipisci corporis, dolor ex
            laborum nam nisi placeat totam veniam! Officia quo, voluptate.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="card ">
            <div class="face face1">
              <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true">
                <h3>Design</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                <a href="#" class="btn btn-outline-dark btn-sm mt-2 form-control">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card ">
            <div class="face face1">
              <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true">
                <h3>Design</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                <a href="#" class="btn btn-outline-dark btn-sm mt-2 form-control">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card ">
            <div class="face face1">
              <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true">
                <h3>Design</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                <a href="#" class="btn btn-outline-dark btn-sm mt-2 form-control">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>
 .card{
  position: relative;
  cursor: pointer;
  border: 0;
}

.card .face{
  width: 300px;
  height: 200px;
  transition: 0.5s;
  border-radius: 15px;
}

.card .face.face1{
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.card:hover .face.face1{
  background: #ff0057;
  transform: translateY(0);
}

.card .face.face1 .content{
  opacity: 0.2;
  transition: 0.5s;
}

.card:hover .face.face1 .content{
  opacity: 1;
}

.card .face.face1 .content img{
  max-width: 100px;
}

.card .face.face1 .content h3{
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.card .face.face2{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100px);
}

.card:hover .face.face2{
  transform: translateY(0);
}

.card .face.face2 .content p{
  margin: 0;
  padding: 0;
}

</style>