/*var secItem=document.querySelector('.list-group-item:nth-child(2)');
secItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none'*/
var sec=document.querySelectorAll('li');
sec[1].style.backgroundColor='lightgreen';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}