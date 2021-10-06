<template>
    <div id="banner_adoptante">
            <div id="imagen_banner_adoptante">
                <!-- <img src="mascota_adoptame.jpg" class="center" width="627" height="310"  > -->
                <div class="slider">
                    <ul>
                        <li><img src="../../../public/banner_adoptante_perro01.jpg" height= 320px alt=""></li>
                        <li><img src="../../../public/banner_adoptante_gato01.jpg" height= 320px alt=""></li>
                        <li><img src="../../../public/banner_adoptante_perro02.jpg" height= 320px alt=""></li>
                        <li><img src="../../../public/banner_adoptante_gato02.jpg" height= 320px alt=""></li>
                    </ul>
                </div>
            
            
            </div>
            <div id="mensaje_adoptante">
                <p id="parrafo_adoptante">Nosotros te ayudamos a encontrar el peludo de tus sueños.</p>
            </div>
        </div>
</template>

<style>
#banner_adoptante{
        height: 25%;
        background: url("../../../public/backgroundhuellas00.png") ;
        /* background-color: gray; */
    }
    .slider{
        width: 100%;
        margin: auto;
        overflow: hidden;
    }
    .slider ul{
        display: flex;
        padding: 0em;
        width: 400%;
        animation: cambio 10s infinite linear alternate;
    }
    .slider li{
        width: 100%;
        list-style: none;
        margin-right: 10px;
    }
    .slider img{
        width: 100%;
    }
    @keyframes cambio {
        0% {margin-left: 0;}
        20% {margin-left: 0;}
        25% {margin-left: -100%;}
        45% {margin-left: -100%;}
        50% {margin-left: -200%;}
        70% {margin-left: -200%;}
        75% {margin-left: -300%;}
        100% {margin-left: -300%;}
    }
        #imagen_banner_adoptante{
            height: 100%;
            width: 50%;
            /* background-color: cornflowerblue; */
            float: right;
        }
        #mensaje_adoptante{
            height: 100%;
            width: 50%;
            /* background-color: beige; */
            float: left;    
            text-align: center;
        }
        #parrafo_adoptante{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 3em;
            color: rgb(12, 12, 163);
        }
</style>