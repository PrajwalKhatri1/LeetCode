var romanToInt = function(s) {
   const romanNum={
       'I' : 1,
       'V' : 5,
       'X' : 10,
       'L' : 50,
       'C' : 100,
       'D' : 500,
       'M' : 1000,
   };
   let result = 0;
   for(i=0;i<s.length;i++){
        const curr = romanNum[s[i]];
        const next = romanNum[s[i+1]];
       if(curr<next){
           result+=next-curr;
           i++;
       }else{
           result+=curr;
       }
   }
   return result;
};
