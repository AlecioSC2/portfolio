const onClick = event => {
  event.preventDefault();
  const tab = event.target.dataset.tab; //the tab id

  // Select all the box elements and hide them.
  Array.from(document.querySelectorAll('.box[data-tab]')).forEach(element => {
    element.classList.add('hidden');
  });

  // Select all the tab elements and remove the selected class.
  Array.from(document.querySelectorAll('a[data-tab]')).forEach(element => {
    element.classList.remove('selected');
  });

  // Select the 'selected' box element and display it.
  document.querySelector(`.box[data-tab="${tab}"]`).classList.remove('hidden');
  
  // Select the clicked tab element and add a 'selected' class to it.
  document.querySelector(`a[data-tab="${tab}"]`).classList.add('selected');
}

// The tab link elements
const links = document.querySelectorAll('.tab a');

// Attach listener to tabs
Array
.from(links)
.forEach(link => 
  link.addEventListener("click", onClick))