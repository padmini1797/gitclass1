/*var secItem=document.querySelector('.list-group-item:nth-child(2)');
secItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none'
var sec=document.querySelectorAll('li');
sec[1].style.backgroundColor='lightgreen';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
*/
var itemList=document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='lightpink';
//console.log(itemList.parentNode.parentNode);
//console.log(itemList.parentNode.parentNode.parentNode);
//_______________________________________________________
//parentElement

//itemList.parentElement.style.backgroundColor='lightpink';
//console.log(itemList.parentElement.parentElement);
//--------------------------------------------------------
//childNode


//console.log(itemList.childNodes);
//________________________________________________________
//childElement
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//_______________________________________________________
//firstchild
console.log(itemList.firstChild);
//________________________________________________________
//firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello'*/
//________________________________________________________
//lastchild
//console.log(itemList.lastChild);
//_________________________________________________________
//lastelementchild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hello';
//___________________________________________________________
//nextsibling

//console.log(itemList.nextSibling);
//_________________________________________________________
//nextElementSibling

//console.log(itemList.nextElementSibling);
//______________________________________________________________
//previoussibling

console.log(itemList.previousSibling);
//_________________________________________________________
//previousElementSibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';
//__________________________________________________________
//createElement
//create a div
var newdiv=document.createElement('div');
//add a class
newdiv.className='hi';
//addd an id
newdiv.id= 'hello1';
//add an attr
newdiv.setAttribute('title','Hello Div');
//____________________________________________________________
//create a textnode
var txtnd=document.createTextNode('Hello World');
//add text to div
newdiv.appendChild(txtnd);
var cont=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newdiv);
cont.insertBefore(newdiv,h1);
//______________________________________________
// add hello before items
var hel=document.createTextNode('Hello');
var nd=document.createElement('div');
nd.appendChild(hel);
var con=document.querySelector('.list-group');
var nn=document.querySelector('.list-group-item');
con.insertBefore(nd,nn);
