//1
const con = document.getElementById('container');
//2
const co = document.querySelector('#container');
//3
const ele = document.getElementsByClassName('second');
//4
const thrd = document.querySelector('ol .third');
//5
co.innerText = 'Hello!';
//6
const ft = document.querySelector('.footer');
ft.className += ' main';
//7
let foot = document.querySelector('.footer')
foot.classList.remove('main')
//8
let newli = document.createElement('li');
//9
newli.innerText = 'four'
//10
let ule = document.querySelector('ul');
ule.appendChild(newli);

//11
let olli = document.querySelector('ol li')

for (let i = 0; i < olli.length; i++){
    olli[i].style.backgroundColor = 'green'
}
//12
let clfoot = document.querySelector('div.footer')
ft.classList.remove()





