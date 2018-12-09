const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0
let itmCreated = 0

function newTodo() {
  	let nActivity = prompt('Type the activity:', '')
	if(nActivity){
		list.innerHTML = '<div id="div-'+itmCreated+'"><input type="checkbox" class="'+classNames.TODO_CHECKBOX+'" id="act-'+itmCreated+'" onclick="checkToDo(event)"/><label class="'+classNames.TODO_TEXT+'" id="text-'+itmCreated+'" for="act-'+itmCreated+'">'+nActivity+'</label><button class="button red-button" onclick="delToDo('+itmCreated+')">Eliminar</button></div></br>'+list.innerHTML
		itemCount++
		itmCreated++
		uncheckedCount++
		updateCounters()
	}else{
		if(confirm('You must type an activity description! Try Again?')) newTodo()
	}
}

function updateCounters(){
	if(itemCount < 0) itemCount = 0
	if(uncheckedCount < 0) uncheckedCount = 0
	itemCountSpan.innerHTML = itemCount
	uncheckedCountSpan.innerHTML = uncheckedCount
}


function checkToDo(e){
	e = e || window.event
	let target = e.target
	if(target.checked){
		uncheckedCount--
		target.parentNode.children[1].style = "text-decoration: line-through;";
		updateCounters()
		console.log('checked!')
	}else{
		uncheckedCount++
		updateCounters()
		target.parentNode.children[1].style = "text-decoration: none;";
	}
}

function delToDo(itm){
	let divE = document.getElementById('div-'+itm)
	divE.parentNode.removeChild(divE)
	itemCount--
	uncheckedCount--
	updateCounters()
}	

