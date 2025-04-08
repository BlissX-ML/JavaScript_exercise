// document.getElementById('count_number').innerText = 5

let count = 0;

let display_num = document.getElementById('count_number');
let plus_btn = document.getElementById('plus-btn');

function increment() {
    count += 1;
    display_num.innerText = count;
}

