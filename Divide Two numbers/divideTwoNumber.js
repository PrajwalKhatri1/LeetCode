var divide = function(dividend, divisor) {
    const div = dividend/divisor;
    if(div>2**31-1){
        return 2**31-1;
    }
    if(div<-(2 ** 31)){
        return -(2**31)
    }
    return Math.trunc(div);
};
