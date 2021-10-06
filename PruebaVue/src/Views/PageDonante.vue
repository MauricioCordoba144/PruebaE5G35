<template>
<div id="body">
    <Cabecera></Cabecera>
    <MenuNavegacion></MenuNavegacion>
    <BannerPageDonante></BannerPageDonante>
    <BodyPageDonante></BodyPageDonante>
    <Barra></Barra>
    <PiePagina></PiePagina>
</div>
</template>

<script>
import Cabecera from '../components/Cabecera.vue'
import MenuNavegacion from '../components/MenuNavegacion.vue'
import BannerPageDonante from '../components/componentspagedonante/BannerPageDonante.vue'
import BodyPageDonante from '../components/componentspagedonante/BodyPageDonante.vue'
import Barra from '../components/Barra.vue'
import PiePagina from '../components/PiePagina.vue'

export default {
  components: { 
    Cabecera, 
    MenuNavegacion,
    BannerPageDonante,
    BodyPageDonante,
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