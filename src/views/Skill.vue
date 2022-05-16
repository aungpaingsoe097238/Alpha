<template>
  <div class="d-md-flex my-5 my-md-0  min-vh-100 justify-content-center align-items-center fr">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="header">
            <span class="blog-title-card">Skills</span> <br>
            <span class="blog-title">What is my knowledge?</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Enim iure omnis optio veritatis
              voluptatum! A ad beatae consequuntur
              deserunt enim exercitationem facilis ipsa,
              labore nemo nostrum omnis sint soluta, voluptatibus?
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <!--      Skills-->
          <h5 class="text-black-50 mt-2">Font End</h5>
          <div class="skills-bar">
            <div class="bar">
              <div class="info">
                <span>HTML</span>
              </div>
              <div class="progress-line">
                <span class="html" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>CSS</span>
              </div>
              <div class="progress-line">
                <span class="css" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>JavaScript</span>
              </div>
              <div class="progress-line">
                <span class="js" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>BootStrap 5</span>
              </div>
              <div class="progress-line">
                <span class="bs" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Vue Js</span>
              </div>
              <div class="progress-line">
                <span class="vue" ></span>
              </div>
            </div>
          </div>
          <!--      Skills-->
        </div>
        <div class="col-12 col-md-6">
          <!--      Skills-->
          <h5 class="text-black-50 mt-2 ">Back End</h5>
          <div class="skills-bar">
            <div class="bar">
              <div class="info">
                <span>PHP</span>
              </div>
              <div class="progress-line">
                <span class="php" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Laravel</span>
              </div>
              <div class="progress-line">
                <span class="laravel" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>MySQL</span>
              </div>
              <div class="progress-line">
                <span class="sql" ></span>
              </div>
            </div>
          </div>
          <!--      Skills-->
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <!--      Skills-->
          <h5 class="text-black-50 mt-2 ">Other</h5>
          <div class="skills-bar">
            <div class="bar">
              <div class="info">
                <span>Git</span>
              </div>
              <div class="progress-line">
                <span class="git" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Linux</span>
              </div>
              <div class="progress-line">
                <span class="linux" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>A+</span>
              </div>
              <div class="progress-line">
                <span class="a" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>NetWorking</span>
              </div>
              <div class="progress-line">
                <span class="network" ></span>
              </div>
            </div>
          </div>
          <!--      Skills-->
        </div>
        <div class="col-12 col-md-6">
          <!--      Skills-->
          <h5 class="text-black-50 mt-2 ">Languages</h5>
          <div class="skills-bar">
            <div class="bar">
              <div class="info">
                <span>English</span>
              </div>
              <div class="progress-line">
                <span class="en" ></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Japanese</span>
              </div>
              <div class="progress-line">
                <span class="jp" ></span>
              </div>
            </div>
          </div>
          <!--      Skills-->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Skill",
  data() {
    return {
    }
  },
}
</script>

<style scoped>

.skills-bar .bar .info span {
  font-size: 15px;
  font-weight: 500;
}

.skills-bar .bar .info {
  margin-bottom: 8px;
  color: var(--dark);
}

.skills-bar .bar .progress-line {
  position: relative;
  height: 10px;
  width: 100%;
  background: #f0f0f0;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.bar .progress-line span {
  position: absolute;
  background: var(--dark);
  height: 100%;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  text-transfrom : uppercase;
  animation: animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

.progress-line .html {
  width: 80%;
}

.progress-line .css {
  width: 70%;
}

.progress-line .js {
  width: 85%;
}

.progress-line .bs {
  width: 90%;
}

.progress-line .vue {
  width: 96%;
}

.progress-line .php {
  width: 60%;
}

.progress-line .laravel {
  width: 80%;
}

.progress-line .sql {
  width: 50%;
}

.progress-line .git {
  width: 75%;
}

.progress-line .linux{
  width: 50%;
}

.progress-line .a{
  width: 60%;
}

.progress-line .network{
  width: 30%;
}

.progress-line .en{
  width: 40%;
}

.progress-line .jp{
  width: 10%;
}

.progress-line .html::after {
  content: "80%";
}
.progress-line .css::after {
  content: "70%";
}
.progress-line .js::after {
  content: "85%";
}
.progress-line .bs::after {
  content: "90%";
}
.progress-line .vue::after {
  content: "96%";
}
.progress-line .php::after{
  content: "60%";
}
.progress-line .laravel::after{
  content: "80%";
}
.progress-line .sql::after{
  content: "50%";
}
.progress-line .git::after{
  content: "75%";
}
.progress-line .linux::after{
  content: "50%";
}
.progress-line .a::after{
  content: "60%";
}
.progress-line .network::after{
  content: "30%";
}
.progress-line .en::after{
  content: "40%";
}
.progress-line .jp::after{
  content: "10%";
}

.bar .progress-line span::before {
  position: absolute;
  content: "";
  height: 0;
  right: 0;
  top: -14px;
  width: 0;
  border: 7px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-style: #f0f0f0;
  border-top-color: #07374a;
}

.bar .progress-line span::after {
  position: absolute;
  right: 0;
  top: -28px;
  color: #f0f0f0;
  font-size: 12px;
  font-weight: 700;
  background: var(--dark);
  padding: 1px 8px;
  border-radius: 3px;
}



/* ////........Media Query........//// */

@media (max-width: 700px) {
  .skills{
    width: 80%;
  }

  .skills-bar .bar .progress-line{
    width: 100%;
  }

}
</style>