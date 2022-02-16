'use strict';
/*Microsoft question*/
/* global $, jQuery */

function solution() {
    const getCommentsData = async(count) => {
      // fetch call to get all comments
      /*const url = `https://www.example.com/comments?count=${count}`;
      // wait for response
      const response = await fetch(url);

      if(!response.ok) {
        throw new Error("error in get quotes", response.status);
      }
      return await response.json();*/
      return [{
        "id": 123,
        "username": "User 1",
        "message": "Cool product!"
    }, {
        "id": 456,
        "username": "User 2",
        "message": "Didn't like it that much"
    }]};
    const displayComments = (comments) => {
        // create comment-list
        const commentList = document.createElement("div");
        commentList.classList.add("comment-list");
        
        // set data-count to total length
        commentList.setAttribute("data-count", comments.length);

        // Iterate through each comment and create comment item with comments details
        comments.forEach((comment) => {
            const commentItem = document.createElement("div");
            commentItem.classList.add("comment-item");
commentItem.innerHTML = `<div class="comment-item__username">${comment.username}</div>
  <div class="comment-item__message">${comment.message}</div>
</div>`;
commentList.appendChild(commentItem);
        });
        wrapper.appendChild(commentList);
    };
    
    const loadComments = async(count) => {
      // display loader
      loaderWrap.style.display = "block";
      try {
          // get comments from API asynchronously
          const result = await getCommentsData(count);

          // show the comments on UI
          displayComments(result);
  
      } catch(e){
        console.log("Error loding comments", e);
      }
      loaderWrap.style.display = "none";
    }

    // Create wrapper element which will display all the comment lists
    const wrapper = document.createElement("div");
    // Create a loader wrapeer that will be hidden on launch
    const loaderWrap = document.createElement('div');
    loaderWrap.classList.add("loader");
    loaderWrap.textContent = "loading...";
    loaderWrap.style.display = "none";

    wrapper.appendChild(loaderWrap);

    // load 10 comments within comment-list wrapper
    loadComments(10);

    

}
solution();