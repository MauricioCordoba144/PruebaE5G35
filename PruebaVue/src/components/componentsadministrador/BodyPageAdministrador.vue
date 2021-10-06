<template>
    <div id="main">
            <div id="submain1">
                <article class="articulo11">
                    <div>
                        <input type="checkbox" id="activar">
                        <label for="activar">Mascotas Adoptadas</label>
                    </div>
                    <div>
                        <input type="checkbox" id="activar1">
                        <label for="activar1">Gestión Fotos</label>
                    </div>
                </article>
    
                <article class="articulo22">

                    <div id="botones4">
                        <div id="boton14">
                            <div class="boton4"><a class="btn4" href="login.html">Ingreso</a></div>
                        </div>
                        <div id="boton24">
                            <div class="boton4"><a class="btn4" href="registro.html">Registro</a> </div>
                        </div>
                    </div>

                </article>

            </div>

            <div id="submain2">
                
                <h1> </h1>

            </div>

        </div>
</template>

<style>

#main{
    height: 49%;
    width:100%;
    float: left;
} 

#submain1{
    height: 95%;
    width: 46%;
    background: rgb(255, 255, 255);
    float: left;
    margin-left: 1%;
    border-radius: 10em;
    margin: 1em;
    line-height: 150px;
}

#submain2{
    height: 95%;
    width: 46%;
    background:#fff;
    float: right;
    border-radius: 10em;
    margin: 1em;
    border:2px solid #0648A1;
}

.articulo11{
    height: 40%;
    width:80%;
    /* background: white; */
    float: left;
    font-size: 45px;
    color: #0648A1;
    font-family: "Arial";
    margin-left: 1%;
    margin-right: 2%;
    padding: 1em;
}

.articulo22{
    height: 40%;
    width:80%;
    
    float: left;
    font-size: 45px;
    color: #0648A1;
    font-family: "Arial";
    margin-left: 1%;
    margin-right: 2%;
    padding: 1em;
}

#botones4{
    height: 50%;
    width: 80%;
    /* background-color: darkslategray; */
    float: right;
    margin-left: 15%;
    margin-right: 16%;
}
#boton14{
    height: 10%;
    width: 50%;
    float: right;
}
#boton24{
    height: 10%;
    width: 50%;
    float: left;
}
.boton4{
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
.boton4:hover{
    background-color: rgb(109, 196, 109);
}
.btn4{
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(219, 206, 210, 0.966);
    line-height: 1.5em;
    margin: .5em auto;
}

</style>