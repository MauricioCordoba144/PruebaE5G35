<template>
    <div id="main_adoptante">
            
            <div id="articulo_adoptante">
                <p id="parrafomain1_adoptante">
                    Adoptar un perro o un gato implica una gran<br>
                    decisión y una responsabilidad.
                </p>
                <p id="parrafomain2_adoptante">  <br>  
                    Debes tener en cuenta que una mascota requiere tiempo y dedicación,
                    por lo tanto es importante que tengas claridad acerca de tu
                    disponibilidad para otorgarle el cuidado debido. Tu futura mascota,
                    no sólo necesita compañía, sino también actividad física, juegos, mimos,
                    alimentación y eventualmente atención médica veterinaria.
                </p>
                <p id="parrafomain3_adoptante">    
                    ...<br>
                    Ingresa para que hagas seguimiento al proceso de 
                    adopción de tu mascota, o regístrate si eres un 
                    nuevo donante.
                </p>
            </div>
            <div id="imagen_main_adoptante">
                <h4>CATÁLOGO</h4>
                <img src="../../../public/catalogo.png" class="center" width="610" height="600" alt="">
            </div>
            <div id="botones">
                <div id="boton1">
                    <div class="boton"><a class="btn" href="login.html">Ingreso</a></div>
                </div>
                <div id="boton2">
                    <div class="boton"><a class="btn" href="registro.html">Registro</a> </div>
                </div>
            </div>
        </div>
</template>

<style>
#main_adoptante{
        height: 49%;
        float: left;
        /* background-color: yellow; */
    }
        #articulo_adoptante{
            height: 80%;
            width: 50%;
            /* background-color:darkseagreen; */
            float: right;
            text-align: center;
        }
        #parrafomain1_adoptante{
            font-size:x-large;
            margin: 1em;
            color: rgb(12, 12, 163);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight:bold;
        }
        #parrafomain2_adoptante{
            font-size:x-large;
            margin: 1em;
            color: rgb(12, 12, 163);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #parrafomain3_adoptante{
            font-size:x-large;
            margin: 1em;
            color: rgb(12, 12, 163);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight:bold;
        }
        #botones{
            height: 20%;
            width: 50%;
            /* background-color: darkslategray; */
            float: right;
        }
        #boton1{
            height: 10%;
            width: 50%;
            float: right;
        }
        #boton2{
            height: 10%;
            width: 50%;
            float: right;
        }
        .boton{
            width: 150px;
            height: 50px;
            background-color: rgb(54, 35, 161);
            border-radius: 0.5em;
            cursor: pointer;
            transition: background-color 1s;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size:x-large;
            font-weight: bold;
            color: rgba(219, 206, 210, 0.966);
            line-height: 1.5em;
            margin: .5em auto;
        }
        .boton:hover{
            background-color: rgb(109, 196, 109);
        }
        .btn{
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: rgba(219, 206, 210, 0.966);
            line-height: 1.5em;
            margin: .5em auto;
        }
        #imagen_main_adoptante{
            height: 100%;
            width: 50%;
            /* background-color: darkolivegreen; */
            float: left;
        } 
        #imagen_main_adoptante h4{
            font-size:large;
            color: rgb(12, 12, 163);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
        }
</style>