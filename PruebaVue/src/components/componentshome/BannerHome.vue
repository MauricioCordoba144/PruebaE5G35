<template>
  <div id="banner">
    <div id="lados">
        <h1></h1>
    </div>
    <div id="imagen1">
      <!-- <img src="mascota_donante01.jpg" class="center" width="627" height="310"  > -->
      <div class="slider">
        <ul>
          <li>
            <img
              src="../../../public/Carpeta Imagenes para GitHub (PetNet)\banner01_mascota_caja.jpg"
              height="320px"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/Carpeta Imagenes para GitHub (PetNet)\banner02_mascotas_perro_gatos.jpg"
              height="320px"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/Carpeta Imagenes para GitHub (PetNet)\banner03_mascota_beso.jpg"
              height="320px"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/Carpeta Imagenes para GitHub (PetNet)\banner04_mascota_alegria.jpg"
              height="320px"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
    <div id="lados">
        <h1></h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

#banner{
    height: 25%;
    background: url("../../../public/backgroundhuellas00.png") ;
    float: left;
}

.slider {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}

.slider ul {
  display: flex;
  padding: 0em;
  width: 400%;
  animation: cambio 12s infinite linear alternate;
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

#lados{
  width: 25%;
  height: 100%;
  float: left;
}

#imagen1{
    /* background-color: cornflowerblue; */
    text-align: center;
    float: left;
    width: 50%;
}
</style>
