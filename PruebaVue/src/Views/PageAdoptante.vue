<template>
<div id="body">
    <Cabecera></Cabecera>
    <MenuNavegacion></MenuNavegacion>
    <BannerPageAdoptante></BannerPageAdoptante>
    <BodyPageAdoptante></BodyPageAdoptante>
    <Barra></Barra>
    <PiePagina></PiePagina>
</div>
</template>

<script>
import Cabecera from '../components/Cabecera.vue'
import MenuNavegacion from '../components/MenuNavegacion.vue'
import BannerPageAdoptante from '../components/componentspageadoptante/BannerPageAdoptante.vue'
import BodyPageAdoptante from '../components/componentspageadoptante/BodyPageAdoptante.vue'
import Barra from '../components/Barra.vue'
import PiePagina from '../components/PiePagina.vue'

export default {
  components: { 
    Cabecera, 
    MenuNavegacion,
    BannerPageAdoptante,
    BodyPageAdoptante,
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