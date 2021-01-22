const cipher = {
  //...
};

//creando la funcion Encode
cipher.encode = function(num,str){

  if (typeof num !== 'number' || isNaN(num) || num ==='' || typeof str !== 'string'){
    throw new TypeError("Invalido")
  }

  let newStr = "";
  //bucle for en el str
  for (let i = 0; i < str.length; i++){

  //variables para realizar la operacion
  var asciiNum = str[i].charCodeAt();
  var asciiNew = (asciiNum - 65 + num)%26 + 65;
  
  //resultado concatenado
  newStr += String.fromCharCode(asciiNew);
}
return newStr;
}

cipher.decode = function(num,str){

  if (typeof num !== 'number' || isNaN(num) || num ==='' || typeof str !== 'string'){
    throw new TypeError ("invalido")
  }

  let newStr1 = "";
  for (let i = 0; i < str.length; i++){
    
    //variables para realizar la operacion
    var asciiNum1 = str[i].charCodeAt();
    var letra = asciiNum1 - 65;
    var asciiNew1;
    if (num > letra){
      asciiNew1 = (25 -((num-1) - letra)%26) + 65;
    }
    else{
      asciiNew1 = (asciiNum1 - 65 - num)%26 + 65;
    }
    
    newStr1 += String.fromCharCode(asciiNew1); 
  }
  return newStr1;
}

export default cipher;