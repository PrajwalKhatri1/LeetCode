var addStrings = function(num1, num2) {
    let res = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        const a = i >= 0 ? parseInt(num1.charAt(i--)) : 0;
        const b = j >= 0 ? parseInt(num2.charAt(j--)) : 0;
        const sum = a + b + carry;
        carry = Math.floor(sum / 10);
        res = (sum % 10) + res;
    }
    return res;
};
