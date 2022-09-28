let commentInput = document.getElementById("commentInput");
let saveValue = document.getElementById("saveValue");
let feedCommentBox = document.getElementById("feedCommentBox");

const setCommentsLocal = () => {
  let comments =
    localStorage.getItem("comments") == null
      ? []
      : JSON.parse(localStorage.getItem("comments"));

  let randomId = Math.random();

  let commentsValue = {
    id: randomId,
    comment: commentInput.value,
  };

  comments.push(commentsValue);

  localStorage.setItem("comments", JSON.stringify(comments));
  // asd
  asd(comments);
};

function asd(comments) {
  let value = JSON.parse(localStorage.getItem("comments"));
  console.log(value);
  const newComment = document.createElement("p");

  for (let i = 0; i < value.length; i++) {
    newComment.innerHTML = `
                            <div class="feedComment">
                                <p>zi_nukk <span>${value[i].comment}</span></p>
                            </div>
                        `;
    feedCommentBox.appendChild(newComment);
  }
  commentInput.value = "";
}
saveValue.addEventListener("click", setCommentsLocal);
