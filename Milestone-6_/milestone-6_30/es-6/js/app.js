document.getElementById("apply-bg").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    console.log(friend);
    friend.style.backgroundColor = "red";
  }
});
document.getElementById("center").addEventListener("click", function () {
  const third = document.getElementById("third-frd");
  third.style.textAlign = "center";
});

document.getElementById("add-frd").addEventListener("click", function () {
  const friendContainer = document.getElementById("friends");
  const friend = document.createElement("div");
  friend.classList.add('friend')
  friend.innerHTML = `
  <h3 class="friend-name">New Friend</h3>
  <p>something new added</p>
  `;
  friendContainer.appendChild(friend);
});
