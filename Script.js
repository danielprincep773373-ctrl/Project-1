document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("comment-list");

  // Load saved comments from localStorage
  const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
  savedComments.forEach(displayComment);

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const commentText = document.getElementById("comment").value.trim();

    if (name && commentText) {
      const comment = { name, text: commentText, date: new Date().toLocaleString() };
      displayComment(comment);

      // Save to localStorage
      savedComments.push(comment);
      localStorage.setItem("comments", JSON.stringify(savedComments));

      commentForm.reset();
    }
  });

  function displayComment(comment) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
      <strong>${comment.name}</strong>
      <small>${comment.date}</small>
      <p>${comment.text}</p>
    `;
    commentList.prepend(div);
  }
});
