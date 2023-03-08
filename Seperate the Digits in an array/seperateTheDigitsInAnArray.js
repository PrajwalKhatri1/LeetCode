function separateDigits(nums) {

  let answer = [];

  for (let num of nums) {

    let numStr = num.toString();

    for (let digit of numStr) {

      answer.push(parseInt(digit));

    }

  }

  return answer;

}
