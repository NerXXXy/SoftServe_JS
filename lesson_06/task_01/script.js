function showItems(){
    let list = document.getElementById('list')
    let listItems = list.getElementsByTagName('li')
    let result = `${listItems[0].textContent},${listItems[listItems.length-1].textContent},${listItems[1].textContent},${listItems[3].textContent},${listItems[2].textContent},`;
    alert(result)
}
showItems();