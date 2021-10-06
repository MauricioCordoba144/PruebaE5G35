<template>
  <div id="banner_donante">
    <div id="imagen_banner_donante">
      <!-- <img src="mascota_donante01.jpg" class="center" width="627" height="310"  > -->
      <div class="slider">
        <ul>
          <li>
            <img
              src="../../../public/banner_donante_perro01.jpg"
              height="320px"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/banner_donante_gato01.jpg"
              height="320px"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/banner_donante_perro02.jpg"
              height="320px"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/banner_donante_gato02.jpg"
              height="320px"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>

    <div id="mensaje_donante">
      <p id="parrafo_donante">
        Nosotros te ayudamos a entregar a tu peludo en adopción.
      </p>
    </div>
  </div>
</template>

<style>
#banner_donante {
  height: 25%;
  background: url("../../../public/backgroundhuellas00.png");
  /* background-color: gray; */
}
#imagen_banner_donante {
  height: 100%;
  width: 50%;
  /* background-color: cornflowerblue; */
  float: left;
}
#mensaje_donante {
  height: 100%;
  width: 50%;
  /* background-color: beige; */
  float: right;
  text-align: center;
}

.slider {
  width: 100%;
  margin: auto;
  overflow: hidden;
}
.slider ul {
  display: flex;
  padding: 0em;
  width: 400%;
  animation: cambio 10s infinite linear alternate;
}
.slider li {
  width: 100%;
  list-style: none;
  margin-left: 10px;
}
.slider img {
  width: 100%;
}
@keyframes cambio {
  0% {
    margin-left: 0;
  }
  20% {
    margin-left: 0;
  }
  25% {
    margin-left: -100%;
  }
  45% {
    margin-left: -100%;
  }
  50% {
    margin-left: -200%;
  }
  70% {
    margin-left: -200%;
  }
  75% {
    margin-left: -300%;
  }
  100% {
    margin-left: -300%;
  }
}
#mensaje_donante {
  height: 100%;
  width: 50%;
  /* background-color: beige; */
  float: right;
  text-align: center;
}
#parrafo_donante {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3em;
  color: rgb(12, 12, 163);
}
</style>