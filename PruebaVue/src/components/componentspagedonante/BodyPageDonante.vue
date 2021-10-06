<template>
    <div id="main_donante">
            <div id="articulo_donante">
                <p id="parrafomain1_donante">
                    Sufres de alergia y no la puedes tener ?<br>
                    Sales mucho de viaje y no la puedes tener ?<br>
                    Tienes otras mascotas y no la puedes tener ?<br>
                    Se te acabó la paciencia y no la puedes tener ?<br>
                    O simplemente ya se te acabó el amor por ella ?<br>
                </p>
                <p id="parrafomain2_donante">    
                    Este es el sitio que necesitas. Nosotros te ayudamos 
                    a buscar una nueva familia para tu mascota.
                </p>
                <p id="parrafomain3_donante">    
                    ...<br>
                    Ingresa para que hagas seguimiento al proceso de 
                    adopción de tu mascota, o regístrate si eres un 
                    nuevo donante.
                </p>
            </div>
            <div id="imagen_main_donante">
                <!-- <img src="mascota_hombro.jpg" class="center" width="610" height="660"alt=""> -->
                <img src="../../../public/mascota_hombro.jpg" class="center" width="610" height="600" alt="">
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
#main_donante{
        height: 49%;
        /* background-color: yellow; */
    }
        #articulo_donante{
            height: 80%;
            width: 50%;
            /* background-color:darkseagreen; */
            float: left;
            text-align: center;
        }
        #parrafomain1_donante{
            font-size:x-large;
            margin: 1em;
            color: rgb(12, 12, 163);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #parrafomain2_donante{
            font-size:xx-large;
            margin: 1em;
            color: rgb(12, 12, 163);
            font-weight:bold;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #parrafomain3_donante{
            font-size:x-large;
            margin: 1em;
            color: rgb(12, 12, 163);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #botones{
            height: 20%;
            width: 50%;
            /* background-color: darkslategray; */
            float: left;
        }
        #boton1{
            height: 10%;
            width: 50%;
            float: left;
        }
        #boton2{
            height: 10%;
            width: 50%;
            float: left;
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
        #imagen_main_donante{
            height: 100%;
            width: 50%;
            /* background-color: darkolivegreen; */
            float: right;
        } 
</style>