// TODO : Needs to work. Solution incomplete.
(function(){
  // click of C
  // click of +
  // click of =
  // click of num
  
  let results = "";
  let prevOperation, operation = "";
  let calculatedRes = 0;

  const calculatePreviousRes = (prevOperation, calculatedRes, results) => {
    let result = 0;
    if(prevOperation === 'plus') {
      result = calculatedRes + parseInt(results);
    } else if(prevOperation === 'minus') {
      result = calculatedRes - parseInt(results);
    }
    return result;
  }

  document.querySelector(".cancel").addEventListener("click", () => {
    document.querySelector(".output").innerHTML = "0";
  });

  document.querySelectorAll(".num").forEach((element) => {
    element.addEventListener("click", () => {
      if(operation !== "") {
        results = "";
      }
      results = results + element.innerHTML;
      document.querySelector(".output").innerHTML = results;
      operation="";
    });
  })

  document.querySelector(".add").addEventListener("click", () => {
    const prev = calculatedRes === 0 ? calculatedRes : calculatePreviousRes(prevOperation, calculatedRes, results);
    calculatedRes = prev + parseInt(results);
    prevOperation = operation = "plus";
  });

  document.querySelector(".minus").addEventListener("click", () => {
    const prev = calculatedRes === 0 ? calculatedRes : calculatePreviousRes(prevOperation, calculatedRes, results);
    calculatedRes = prev - parseInt(results);
    prevOperation = operation = "minus";
  });

  document.querySelector(".solve").addEventListener("click", (element) => {
    const result = calculatePreviousRes(prevOperation, calculatedRes, results);
    document.querySelector(".output").innerHTML = result;
    sum = 0;
    operation = "";
    results = "";
  });

})();