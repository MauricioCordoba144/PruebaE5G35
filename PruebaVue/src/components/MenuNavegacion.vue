<template>
    <div id="menu_navegacion">
            <ul>
                <li><router-link to="home">Home</router-link></li>
                <li>|</li>
                <li><router-link to="pageadoptante">Adoptante</router-link></li>
                <li>|</li>
                <li><router-link to="pagedonante">Donante</router-link></li>
                <li>|</li>
                <li><a href="javascript:abrir_ventana_nosotros()">Nosotros</a></li>
                <li>|</li>
                <li><a href="javascript:abrir_ventana_nosotros()">Contacto</a></li>
            </ul>
      
        </div>

</template>



<style>
#menu_navegacion{
    height: 5%;
    background-color: rgb(16, 221, 221);
    text-align: center;
}

ul{
    list-style: none;
    display: inline-block;
    padding:5px;
}

li{
    float:left;
    margin: 0em;
    padding: 5px;
}

a{
    text-decoration:dotted;
    padding: 35px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>
