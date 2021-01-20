import cipher from './cipher.js';

//declarar variables
let num;
let str;



console.log(cipher);

//funcionalidad a los botones

document.getElementById("Cifrar").onclick = function () {
    //cipher.Encode(2,"H");
    //console.log(cipher.Encode(num,str));
    num = parseInt(document.getElementById("offset").value);
    str = document.getElementById("inputclave").value;
    document.getElementById("outputclave").innerHTML = (cipher.Encode(num, str));
    console.log(num);
    console.log(str);
}

document.getElementById("Descifrar").onclick = function () {
    //console.log(cipher.Decode(num,str));
    num = parseInt(document.getElementById("offset").value);
    str = document.getElementById("inputclave").value;
    document.getElementById("outputclave").innerHTML = (cipher.Decode(num, str));
}
