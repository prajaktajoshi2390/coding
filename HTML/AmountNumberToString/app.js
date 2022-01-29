(function() {
  // convertToWords - billion, million, thousand, rest
  // map 0-20,30..90
  // getTens
  // getHundreds
  // convertNumToString
  
  const getHundreds = (num) => {
    let results = '';
    const hundred = Math.floor(num/100);
    const rest = Math.floor(num - hundred*100);

    if(hundred) {
      results = results + map[hundred] + ' Hundred ';
    }

    if(rest) {
      if(map[rest]) {
        results = results + map[rest];
      } else {
        const tens = Math.floor(rest/10);
        const remaining = Math.floor(rest - tens*10);
        results = results + map[tens*10] + map[remaining];
      }
    }

    return results;
  }

  const convertToWords = (num) => {
    if(num < 20 ) {
      return map[num];
    }
    let results = '';
    const billion = Math.floor(num/1000000000);
    const million = Math.floor((num - billion*1000000000) / 1000000);
    const thousand = Math.floor((num - billion*1000000000 - million*1000000) / 1000);
    const rest =  Math.floor(num - billion*1000000000 - million*1000000 - thousand*1000);
 
    if(billion) {
      results = results + map[billion] + ' Billion ';
    }

    if(million) {
      results = results + getHundreds(million) + ' Million ';
    }

    if(thousand) {
      results = results + getHundreds(thousand) + ' Thousand ';
    }

    if(rest) {
      results = results + getHundreds(rest);
    }

    return results;
  }

  const map = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Tewnty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety"
  }
  document.querySelector("button").addEventListener("click", () => {
    const num = document.querySelector('input[type="text"]').value;
    const result = convertToWords(num);
    document.querySelector(".output").innerHTML = `
    Your amount is ${result}`;
  });
  
})();