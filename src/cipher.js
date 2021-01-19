const cipher = {
  //...
};


//creando la funcion Encode
cipher.Encode = function(num,str){

  let newStr = "";
  //bucle for en el str
  for (let i = 0; i < str.length; i++){

  var asciiNum = str[i].charCodeAt();
  var asciiNew = (asciiNum - 65 + num)%26 + 65;
  
  newStr += String.fromCharCode(asciiNew);
}
return newStr;
}

export default cipher;