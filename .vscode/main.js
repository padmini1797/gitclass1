var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',additem);
itemList.addEventListener('click', removeItem);


function additem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var lis=document.createElement('li');
    lis.className='list-group-item';
    lis.appendChild(document.createTextNode(newItem));
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
