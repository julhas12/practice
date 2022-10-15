function LoadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    console.log(post);
    postDiv.innerHTML = `
    <h4>user - ${post.userId}</h4>
    <h5>post: ${post.title} title</h5>
    <p>post Description: ${post.body}</p>

    `;
    postsContainer.appendChild(postDiv);
  }
}
LoadPosts();
