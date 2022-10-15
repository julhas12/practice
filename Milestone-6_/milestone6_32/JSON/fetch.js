/* 
.then(response => response.json())
.then(json => console.log(json)) 

*/
// fetch(url)
//   .then((Response) => Response.json())
//   .then((JSON) => console.log(JSON));

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
  .then((Response) => Response.json())
  .then((JSON) => console.log(JSON));
  fetch('https://jsonplaceholder.typicode.com/todos/1')
}
