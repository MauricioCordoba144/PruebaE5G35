<template>
<div id="body">
    <Cabecera></Cabecera>
    <MenuNavegacion></MenuNavegacion>
    <BannerAdministrador></BannerAdministrador>
    <BodyPageAdministrador></BodyPageAdministrador>
    <Barra></Barra>
    <PiePagina></PiePagina>
</div>
</template>

<script>
import Cabecera from '../components/Cabecera.vue'
import MenuNavegacion from '../components/MenuNavegacion.vue'
import BannerAdministrador from '../components/componentsadministrador/BannerAdministrador.vue'
import BodyPageAdministrador from '../components/componentsadministrador/BodyPageAdministrador.vue'
import Barra from '../components/Barra.vue'
import PiePagina from '../components/PiePagina.vue'

export default {
  components: { 
    Cabecera, 
    MenuNavegacion,
    BannerAdministrador,
    BodyPageAdministrador,
    Barra,
    PiePagina
    }
  
}
</script>

<style>
#body {
  height: 1440px;
  width: 100%;
  font-family: "Arial";
  border-color: blue;
  border-style: solid;
}
</style>