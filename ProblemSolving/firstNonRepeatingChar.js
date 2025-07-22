function FirstNonRepeatChar(str1){
  let map=new Map();
  
  let char;
  for(let i=0;i<str1.length;i++){
    char=str1[i];
    if(map.has(char)){
      map.set(char,map.get(char)+1);
    }else{
      map.set(char,1);
    }
  }

  for(let j=0;j<str1.length;j++){
    char=str1[j];
    
    if(map.get(char)==1){
        return char;
    }
  }
  
  return null;
}

console.log('first non repeating character...',FirstNonRepeatChar('LemoneLm'))