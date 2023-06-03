var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit',additem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup',filterItems);

function additem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newDesc=document.getElementById('descrip').value;
    var lis=document.createElement('li');
    lis.className='list-group-item';
    lis.appendChild(document.createTextNode(newItem));
    lis.appendChild(document.createTextNode(newDesc));
    var delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-success btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('edit'));
    lis.appendChild(delBtn);
    lis.appendChild(editBtn);
    itemList.appendChild(lis);
    
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
function filterItems(e){
  var text=e.target.value.toLowerCase();
  var items=itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    var desName=item.childNodes[1].textContent;
    if((itemName.toLowerCase().indexOf(text)!=-1)||(desName.toLowerCase().indexOf(text)!=-1)){
      item.style.display='block';
    }else{
      item.style.display='none';
    }
  });
}