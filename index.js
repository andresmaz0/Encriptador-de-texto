var boton_encriptar = document.querySelector(".encriptar");
var boton_desencriptar = document.querySelector(".desencriptar");
var boton_copiar = document.querySelector(".copiar");
var entrada_texto = document.querySelector(".entrada_texto");
var salida_texto = document.querySelector(".salida_texto");

boton_encriptar.onclick = b_encriptar;
boton_desencriptar.onclick = b_desencriptar;

function b_encriptar(){
    ocultarimagen();
    visualizar_boton();
    encriptar_texto();
}

function b_desencriptar(){
    desencriptar_texto();
}

function ocultarimagen(){
    salida_texto.classList.add("ocultarimg");
}

function visualizar_boton(){
    boton_copiar.classList.add("visualizar_boton");
}

function encriptar_texto(){
    let texto = entrada_texto.value;
    let texto_encriptado = "";

    for(let i=0; i<texto.length; i++){
        if(texto[i]=="a"){
            texto_encriptado = texto_encriptado + "ai";
        }
        else if(texto[i]=="e"){
            texto_encriptado =  texto_encriptado + "enter";
        }
        else if(texto[i]=="i"){
            texto_encriptado =  texto_encriptado + "imes";
        }
        else if(texto[i]=="o"){
            texto_encriptado =  texto_encriptado + "ober";
        }
        else if(texto[i]=="u"){
            texto_encriptado =  texto_encriptado + "ufat";
        }
        else{
            texto_encriptado = texto_encriptado + texto[i];
        }
    }
    salida_texto.textContent = texto_encriptado;
}

function desencriptar_texto(){
    let texto = entrada_texto.value;
    let texto_desencriptado = "";

    for(let i=0; i<texto.length; i++){
        if(texto[i]=="ai"){
            texto_encriptado = texto_encriptado + "a";
        }
        else if(texto[i]=="enter"){
            texto_encriptado =  texto_encriptado + "e";
        }
        else if(texto[i]=="imes"){
            texto_encriptado =  texto_encriptado + "i";
        }
        else if(texto[i]=="ober"){
            texto_encriptado =  texto_encriptado + "o";
        }
        else if(texto[i]=="ufat"){
            texto_encriptado =  texto_encriptado + "u";
        }
        else{
            texto_encriptado = texto_encriptado + texto[i];
        }
    }
    salida_texto.textContent = texto_encriptado;
}