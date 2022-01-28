(function() {
  // method to get quotes data
  // method to create html component
  // showLoader
  // hideloader
  // check if more items present or not
  // method to load quotes data
    const quotesEl = document.querySelector(".quotes");
    const getQuotes = async(page, limit) => {
      const url = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
  
      const response = await fetch(url);
  
      if(!response.ok) {
        throw new Error("error in get quotes", response.status);
      }
      return await response.json();
    }
  
    const showQuotes = (quotes) => {
      quotes.forEach((quote) => {
        const quoteEl = document.createElement('quoteBlock');
        quoteEl.innerHTML = `
        <div>
          <span>${quote.id}</span>
          <div>${quote.quote}</div>
          <footer>${quote.author}</footer>
        </div>`
        quotesEl.appendChild(quoteEl);
      });
    }
    
    const showLoder = () => {
      document.querySelector('.loader').classList.add("show");
    }
     
    const hideLoder = () => {
      document.querySelector('.loader').classList.remove("show");
    }
    
    const hasMoreData = (currentPage, limit, total) => {
      const startIndex = (currentPage - 1) * limit + 1;
      return total === 0 || startIndex <= total;
    }
    
    
    const loadQuotes = async(page,limit) => {
      showLoder();
      try {
        if(hasMoreData) {
          const result = await getQuotes(page, limit);
          total = result.total;
          showQuotes(result.data);
       
        }
  
      } catch(e){
        console.log("Error loding quotes", e);
      }
      hideLoder();
    }
    
    const limit = 10;
    let page = 1;
    let total = 0;
    
    window.addEventListener('scroll', () => {
      const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
      if(scrollTop + clientHeight >= scrollHeight - 20 ) {
        page++;
        loadQuotes(page, limit);
        
      }
    });
    loadQuotes(1, 10);
    //queryselector for quote, page, limit
  })();