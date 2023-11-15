let button = document.querySelector('.button1');
let input = document.querySelector('input');
let table = document.querySelector("table")
let div = document.querySelector('.divUl');

let i = document.querySelector('i');

let flag = true
button.addEventListener('click', myfunc);
function myfunc() {
  input.value= input.value.trim();
  if (input.value == ("") || input.value == (" ")) {
    // input.ariaPlaceholder("Write something");
    input.classList.toggle('displayInput');
  }
  else {
    let tr = document.createElement("tr")
    let td = document.createElement('td');
    let span = document.createElement('span');

    span.innerText = input.value;
    td.append(span);
    tr.append(td);
    tr.classList.add('scroll')
    table.append(tr)
    let image = document.createElement('img');
    image.src = './Group 56.svg';
    td.append(image);
    image.classList.add("image");
    div.classList.remove('displayInput');
    //   input.classList.toggle('displayInput');
    input.value = (' ');
    image.addEventListener('click', () => {
      td.remove();

    })
  }
}
i.addEventListener('click', () => {
  input.value = ("   ");
})

function getList() {
  let table = document.querySelector("table");
  let array = [...table.children];
  let rtr = [];
  array.forEach(element => {
    rtr.push(element.children[0].textContent);
  });
  return rtr;
}

function getSortedList() {
  return getList().sort();
}

function getSortedReversedList() {
  return getSortedList().reverse();
}

function sort(reverse) {
  let list;
  if (reverse) {
    list  = getSortedReversedList();
  }
  else {
    list = getSortedList();
  }
  
  let table = document.querySelector("table");
  let array = [...table.children];
  array.forEach((element,ind) => {
    element.children[0].textContent = list[ind];
    let image = document.createElement('img');
    image.src = './Group 56.svg';
    image.classList.add("image");

    element.children[0].append(image);
    image.addEventListener('click', () => {
      element.children[0].remove();

    })
    console.log(element.children[0])
  })
}
let flagReverse = false;
document.querySelector(".imagediv img").addEventListener("click", event => { 
  sort(flagReverse);
  if (flagReverse) {
    event.target.src = "./Group 38.svg";
  }
  else {

    event.target.src = "./Group 90.svg";
  }
    flagReverse = !flagReverse;
})
let button2 = document.querySelector('.button2');
button2.addEventListener('click', myfunc)
image.addEventListener('mouseover',()=>{
  console.log(image)
 image.src='./Group 70.svg'

})
