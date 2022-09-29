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

  if (commentsValue.comment !== "") {
    comments.push(commentsValue);
  }

  localStorage.setItem("comments", JSON.stringify(comments));

  parsingData();
};

function parsingData() {
  let value = JSON.parse(localStorage.getItem("comments"));
  console.log(value);
  const newComment = document.createElement("p");

  for (let i = 0; i < value.length; i++) {
    newComment.innerHTML = `
                            <div class="feedComment">
                                <b>zi_nukk</b> <span>${value[i].comment}</span>
                            </div>
                        `;
    feedCommentBox.appendChild(newComment);
  }
  commentInput.value = null;
}

const onKeyDownHandler = () => {
  if (window.event.keyCode == 13) {
    setCommentsLocal();
  }
};

saveValue.addEventListener("click", setCommentsLocal);
