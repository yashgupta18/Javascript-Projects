var form = document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('filter');

//form submit
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
	e.preventDefault();

	var newItem= document.getElementById('item').value;
	
	//create new li
	var li = document.createElement('li');
	//Add class
	li.className='list-group-item';
	//add text node with input value
	li.appendChild(document.createTextNode(newItem));
	
	//crwate del button
	var deleteBtn=document.createElement('button');

	//Ad classes to dlt btn
	deleteBtn.className='btn btn-danger btn-sm float-right delete';
	//Append text node
	deleteBtn.appendChild(document.createTextNode('X'));

	//append btn to li
	li.appendChild(deleteBtn);

	itemList.appendChild(li);
}


//remove item
function removeItem(e){
	if(e.target.classList.contains('delete')){
		// if(confirm('Are you sure?')){
		// 	var li = e.target.parentElement;
		// 	itemList.removeChild(li);
		// }
		var li = e.target.parentElement;
		itemList.removeChild(li);
	}
}

function filterItems(e){
	//convert text to lowercase
	var text=e.target.value.toLowerCase();

	//get li's
	var items=itemList.getElementsByTagName('li');
	//convert to array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		} else{
			item.style.display='none';
		}
	})
}






