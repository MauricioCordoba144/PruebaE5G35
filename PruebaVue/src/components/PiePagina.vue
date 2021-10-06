<template>
    <div id="pie_pagina">
            <div id="marca_huella">
                <img src="../../public/huellas_van.png" class="center" width="122" height="100" alt="">
            </div>
            <div id="menu_pie">
                <ul id="lista_pie">
                    <li><a href="politica_privacidad.pdf">Política de privacidad</a></li>
                    <li>|</li>
                    <li><router-link to="administrador">Administrador</router-link></li>
                </ul>
            </div>
            <div id="trade_mark">
                <br>
                <p id="copy_right">© 2021 PetNet</p>

            </div>
        </div>
</template>

<script>
export default {};
</script>

<style>
#pie_pagina {
  height: 10%;
  width: 100%;
 
  float: left;
}
#marca_huella {
  height: 100%;
  width: 15%;
  /* background-color:bisque; */
  text-align: center;
  float: left;
  /* margin: 0em auto; */
}
.center {
  margin: 1.5em auto;
  display: block;
  border-radius: 0.5em;

}
#menu_pie {
  height: 100%;
  width: 60%;
  /* background-color:burlywood; */
  float: left;
  text-align: center;
}
#lista_pie {
  margin: 3em auto;
}
#lista_pie a:hover {
  color: rgb(255, 0, 64);
  text-decoration: underline;
}
#trade_mark {
  height: 100%;
  width: 25%;
  /* background-color: brown; */
  float: left;
  text-align: center;
}
#copy_right {
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
  margin: 3em;
}
</style>
