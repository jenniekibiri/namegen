//set the addeventlistener for the form
document.getElementById('generate-names').addEventListener('submit' ,loadNames)
//create the function
 function loadNames(e) {
     e.preventDefault();
//read values from the forms
const origin = document.getElementById('country').value;
const genre = document.getElementById('genre').value;
const amount = document.getElementById('quantity').value;
//the url 
let url ='http://uinames.com/api/?';
//read and append to the url
if(origin!==''){
    url+=`region=${origin}&`;
}
     // Read the genre and append to the url
     if (genre !== '') {
         url += `gender=${genre}&`;
     }
     // Read the amount and append to the url
     if (amount !== '') {
         url += `amount=${amount}&`;
     }
fetch (url)
.then(function (response) {
    return response.json()
})
.then(function (names) {
let html ='<h2> Generated names</h2>'
html+= '<ul class ="list">';
names.forEach(function (name) {
    html +=`
    <li>

    ${name.name}
    </li>
  `

})

document.querySelector('#result').innerHTML = html;

}).catch(function (error) {
    console.log(error)
})

 }
