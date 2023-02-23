var reverse = function(x) {
    const Max_INT = Math.pow(2,31)-1;
    const Min_INT = -Math.pow(2,31)
     if (x < 0) {
    sign = -1;
    x = Math.abs(x);
  } else {
    sign = 1;
  }
      let number = parseFloat(x.toString().split('').reverse().join('')) * sign;
      if(number > Max_INT || number < Min_INT){
          return 0;
      }else{
          return number;
      }
      
};
