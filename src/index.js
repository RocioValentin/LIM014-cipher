import cipher from './cipher.js';

//declarar variables
//const num = document.getElementById("offset").nodeValue;
//const str = document.getElementById("inputclave").nodeValue;

console.log(cipher);

//funcionalidad a los botones

document.getElementById('Cifrar').onclick = function (){
    //cipher.Encode(2,"H");
    console.log(cipher.Encode(2,"H"));
}

document.getElementById('Descifrar').onclick = function (){
    console.log(cipher.Decode(2,"H"));
}
