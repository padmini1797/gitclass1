console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title="97"
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[11]);
document.all[11].textContent='Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.getElementById("header-title"));
var headTitle=document.getElementById("header-title");
console.log(headTitle);
headTitle.textContent="hELO"
headTitle.innerHTML="goodbye"
headTitle.style.borderBottom='solid 3px black'
var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(document.getElementById("header-title"));