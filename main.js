const botonEncriptar = document.querySelector("#btn-encriptar");
function encriptar(){
      let texto = document.querySelector("#input-texto").value;
      let textoEncriptado = texto.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");  
      document.querySelector("#texto__msj").value = textoEncriptado;
      document.getElementById('muñeco').style.display="none";
      document.getElementById('copy').style.visibility="visible"
}
botonEncriptar.onclick = encriptar;

const botonDesencriptar = document.querySelector("#btn-desencriptar");
function desencriptar(){

      let texto = document.querySelector("#input-texto").value;
      let textoDesencriptado = texto.replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ai/ig, "a").replace(/ober/ig, "o").replace(/ufat/ig, "u");
      document.querySelector("#texto__msj").value = textoDesencriptado;
}
botonDesencriptar.onclick = desencriptar;

const botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function(){
      let copiarTexto = document.querySelector("#texto__msj");
      copiarTexto.select();
      document.execCommand("copy");
      document.querySelector("#texto__msj").value = " ";
})

let letra=document.getElementById("input-texto")
  function corregirMayus(){
    letra.value=letra.value.replace(/[^a-zA-Z\s.]/g,"").toLowerCase();
  
  }
  letra.addEventListener("input", corregirMayus);


/*function minusculas (elemento) { 
      elemento.value = elemento.value.toLowerCase();
  }
  ///////onkeyup="minusculas(this)" esto iria en el input del html para q ande la function minuscula//////////
*/

//2da OPCION::::: oninput="this.value = this.value.replace(/[^a-z\s]/,'')" PONIENDO ESTO EN EL INPUT DEL HTML BLOQUEA TODAS LAS MAYUSCULAS, ACENTOS  Y  CARACTERES ESPECIALES ////////

  