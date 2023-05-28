var items=document.getElementsByClassName("list-group-item");
items[2].textContent='hello';
items[1].style.backgroundColor='pink';
for(i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}
