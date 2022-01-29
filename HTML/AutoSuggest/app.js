(function() {
  const getList = (input) => {
    const list = ["java", "javascript", "aws", "c", "c++", "python"];
    return new Promise((res, rej)=> {
      const result = list.filter((item) => {
        return item.toLowerCase().indexOf(input.toLowerCase()) > -1;
      });
      res(result);
    });
  }


  const autoSuggest = (containerDiv, getList) => {
    const debounce = (fn, time) => {
      let timer = null;
      return (...args) => {
        if(timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(()=>fn(...args), time);
      }
    }

    const passInputToGetList = debounce((input) => {
      const listWrap = document.querySelector(".autoSuggestListWrap");
      if(input === "") {
        listWrap.innerHTML = "";
        return;
      }
      getList(input).then((list)=>{ 
        listWrap.innerHTML = list.reduce((acc, current) => {
          return acc + `<li>${current}</li>`;
        }, "");
      });
    }, 1000);

    const container = document.querySelector(`.${containerDiv}`);
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.innerHTML = `<input type="text" class="autoSuggestInput"></input><ul class="autoSuggestListWrap"></ul>`;
   

    wrapper.querySelector(".autoSuggestInput").addEventListener("keyup", (e)=> {
      passInputToGetList(e.target.value);
    });

    container.appendChild(wrapper);
  }
  autoSuggest("main", getList);
})();