const loadUser = () => {
  fetch("https://randomuser.me/api/?results=500")
  .then(res => res.json())
  .then(data => displayUsers(data.results));
};

const displayUsers = users =>{
   const usersContainer = document.getElementById('user-container');
   for(const user of users){
    console.log(user);
     const userDiv = document.createElement('div');
     userDiv.classList.add('user')
     userDiv.innerHTML = `
        <h3>user name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>
        <p>user location: ${ user.location.city}  ${ user.location.country}</p>
        
     
     `;
     usersContainer.appendChild(userDiv)
   }
}
loadUser()