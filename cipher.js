const cipher = {
  //...
};

//creando la funcion Encode
cipher.encode = function(num,str){

  if (typeof num !== 'number' || isNaN(num) || num ==='' || typeof str !== 'string'){
    throw new TypeError("Los datos ingresados son inválidos")
  }

  let newStr = "";
  //bucle for en el str
  for (let i = 0; i < str.length; i++){

  //variables para realizar la operacion
  let asciiNum = str[i].charCodeAt();
  let asciiNew = (asciiNum > 64 && asciiNum < 91)?(asciiNum - 65 + num)%26 + 65:alert('Pro favor ingresa solo mayúsculas');
  
  //resultado concatenado
  newStr += String.fromCharCode(asciiNew);
}
return newStr;
}

cipher.decode = function(num,str){

  if (typeof num !== 'number' || isNaN(num) || num ==='' || typeof str !== 'string'){
    throw new TypeError ("Los datos ingresados son inválidos")
  }

  let newStr1 = "";
  for (let i = 0; i < str.length; i++){
    
    //variables para realizar la operacion
    let asciiNum1 = str[i].charCodeAt();
    let letra = asciiNum1 - 65;
    let asciiNew1;
    if (asciiNum1 > 64 && asciiNum1 < 91){
        if (num > letra){
          asciiNew1 = (25 -((num-1) - letra)%26) + 65;
        }
        else{
          asciiNew1 = (asciiNum1 - 65 - num)%26 + 65;
        }
    }
    else{
      alert('Aceptamos solo mayúsculas');
    }
    
    
    newStr1 += String.fromCharCode(asciiNew1); 
  }
  return newStr1;
}

export default cipher;