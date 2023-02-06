var isValid = function(s) {
    let stck = [];
  for(let i = 0;i<s.length;i++){
    let char = stck[stck.length-1]
    if(s[i]==='('||s[i]==='{'||s[i]==='['){
      stck.push(s[i])
    }
    else if((char==='{'&& s[i]==='}')||(char==='(' && s[i]===')')||(char==='[' && s[i]===']')){
      stck.pop();
    }
    else{
      return false;
    }
  }
   return stck.length ? false : true;  
};
