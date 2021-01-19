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

cipher.Decode = function(num,str){
  let newStr1 = "";
  for (let i = 0; i < str.length; i++){

    var asciiNum1 = str[i].charCodeAt();
    var asciiNew1 = (asciiNum1 - 65 - num)%26 + 65;

    newStr1 += String.fromCharCode(asciiNew1); 
  }
  return newStr1;
}

export default cipher;