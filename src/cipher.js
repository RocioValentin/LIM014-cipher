const cipher = {
  num,
  str,
};

cipher.Encode = function(str) {
  let newStr = '';  
  for (var i = 0; i < str.length; i++){
      newStr = str[i];
  }
  return newStr;
}

export default cipher;

