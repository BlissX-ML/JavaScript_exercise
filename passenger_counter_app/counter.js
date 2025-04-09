let countnumber = document.getElementById('count_number')
let plusbtn = document.getElementById('plus-btn');

let savebtn = document.getElementById('save-btn');
let saveEL = document.getElementById('save-el');

let count = 0;

function increment() {
    count += 1;
    if (count > 20) {
        count -= 1;
        alert('Please, less than 20.');
    }
    countnumber.textContent = count;
}

function save() {
    let saveString = ' ' + count + ' -';
    saveEL.textContent += saveString;
    countnumber.textContent = 0;
    count = 0;
}