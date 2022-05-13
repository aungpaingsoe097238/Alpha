<template>
  <div class="d-flex min-vh-100 justify-content-center align-items-center">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2>My Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque, commodi consequuntur debitis dolorem dolores
            doloribus dolorum eligendi eum exercitationem inventore natus non officiis optio quo recusandae sunt suscipit ullam.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12" >
            <div class="card-container" id="demo"  >
              <div class="cardww " tabindex="0" v-for="(d,index) in data" :key="index">
                <h2>{{ d.title }}</h2>
                <img :src="d.img" width="100%">
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      data : [
        {
          'title' : 'Project One',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Two',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Three',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Four',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Five',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Six',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project One',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Two',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Three',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Four',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Five',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Six',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project One',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Two',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Three',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Four',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Five',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        },
        {
          'title' : 'Project Six',
          'img'   : 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/business_shop_qw5t.svg'
        }

      ]
    }
  },
}
</script>

<style scoped>
.wwww {
  background: rgba(87, 172, 115, 1);
  background: -moz-linear-gradient(
      -45deg,
      rgba(87, 172, 115, 1) 0%,
      rgba(21, 151, 207, 1) 100%
  );
  background: -webkit-gradient(
      left top,
      right bottom,
      color-stop(0%, rgba(87, 172, 115, 1)),
      color-stop(100%, rgba(21, 151, 207, 1))
  );
  background: -webkit-linear-gradient(
      -45deg,
      rgba(87, 172, 115, 1) 0%,
      rgba(21, 151, 207, 1) 100%
  );
  background: -o-linear-gradient(
      -45deg,
      rgba(87, 172, 115, 1) 0%,
      rgba(21, 151, 207, 1) 100%
  );
  background: -ms-linear-gradient(
      -45deg,
      rgba(87, 172, 115, 1) 0%,
      rgba(21, 151, 207, 1) 100%
  );
  background: linear-gradient(
      135deg,
      rgba(87, 172, 115, 1) 0%,
      rgba(21, 151, 207, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#57ac73",
      endColorstr="#1597cf",
      GradientType=1
  );
  overflow-x: hidden;
  font-family: sans-serif;
  padding: 70px;
}
.card-container {
  display: flex;
  padding: 2rem 1rem;
}
.card-container .cardww {
  flex: 1;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2);
}
.cardww h2 {
  font-size: 22px;
}
.card-container .cardww:not(:first-child) {
  margin-left: -10rem;
}
.cardww img {
  padding: 35px;
  width: 70%;
  display: block;
  margin: 0 auto;
}
.card-container .cardww:hover,
.card-container .cardww:focus {
  transform: translateY(-1rem);
  outline: none;
}
.card-container .cardww:hover ~ .cardww,
.card-container .cardww:focus ~ .cardww {
  transform: translateX(11rem);
}

@media (max-width: 767px) {
  #demo {
    margin-top: 0px;
  }

  .card-container {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem 2rem;
  }
  .card-container .cardww {
    flex: 1 1 100%;
  }
  .card-container .cardww:not(:first-child) {
    margin-left: 0rem;
    margin-top: 2rem;
  }
  .card-container .cardww:hover,
  .card-container .cardww:focus {
    transform: translateX(0rem);
  }
  .card-container .cardww:hover ~ .cardww,
  .card-container .cardww:focus ~ .cardww {
    transform: translateY(0rem);
  }
  .cardww img {
    padding: 5px;
  }
}

</style>