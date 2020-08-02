//===============================GELANG PERTAMA======================================
const band1 = document.getElementById('gelang-satu');
const blackBand1 = document.querySelector('tr:nth-child(2) > td:nth-child(1)');
const brownBand1 = document.querySelector('tr:nth-child(3) > td:nth-child(1)');
const redBand1 = document.querySelector('tr:nth-child(4) > td:nth-child(1)');
const orangeBand1 = document.querySelector('tr:nth-child(5) > td:nth-child(1)');
const yellowBand1 = document.querySelector('tr:nth-child(6) > td:nth-child(1)');
const greenBand1 = document.querySelector('tr:nth-child(7) > td:nth-child(1)');
const blueBand1 = document.querySelector('tr:nth-child(8) > td:nth-child(1)');
const purpleBand1 = document.querySelector('tr:nth-child(9) > td:nth-child(1)');
const greyBand1 = document.querySelector('tr:nth-child(10) > td:nth-child(1)');
const whiteBand1 = document.querySelector('tr:nth-child(11) > td:nth-child(1)');

let valueBand1 = '1';

blackBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'black';
    valueBand1 = '';
});

brownBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'brown';
    valueBand1 = '1';
});

redBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'red';
    valueBand1 = '2';
});

orangeBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'orange';
    valueBand1 = '3';
});

yellowBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'yellow';
    valueBand1 = '4';
});

greenBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'green';
    valueBand1 = '5';
});

blueBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'blue';
    valueBand1 = '6';
});

purpleBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'purple';
    valueBand1 = '7';
});

greyBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'grey';
    valueBand1 = '8';
});

whiteBand1.addEventListener('click', function(){
    band1.style.backgroundColor = 'white';
    valueBand1 = '9';
});


//==========================================BAND 2========================================
const band2 = document.getElementById('gelang-dua');
const blackBand2 = document.querySelector('tr:nth-child(2) > td:nth-child(2)');
const brownBand2 = document.querySelector('tr:nth-child(3) > td:nth-child(2)');
const redBand2 = document.querySelector('tr:nth-child(4) > td:nth-child(2)');
const orangeBand2 = document.querySelector('tr:nth-child(5) > td:nth-child(2)');
const yellowBand2 = document.querySelector('tr:nth-child(6) > td:nth-child(2)');
const greenBand2 = document.querySelector('tr:nth-child(7) > td:nth-child(2)');
const blueBand2 = document.querySelector('tr:nth-child(8) > td:nth-child(2)');
const purpleBand2 = document.querySelector('tr:nth-child(9) > td:nth-child(2)');
const greyBand2 = document.querySelector('tr:nth-child(10) > td:nth-child(2)');
const whiteBand2 = document.querySelector('tr:nth-child(11) > td:nth-child(2)');

let valueBand2 = '1';

blackBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'black';
    valueBand2 = '0';
});

brownBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'brown';
    valueBand2 = '1';
});

redBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'red';
    valueBand2 = '2';
});

orangeBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'orange';
    valueBand2 = '3';
});

yellowBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'yellow';
    valueBand2 = '4';
});

greenBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'green';
    valueBand2 = '5';
});

blueBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'blue';
    valueBand2 = '6';
});

purpleBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'purple';
    valueBand2 = '7';
});

greyBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'grey';
    valueBand2 = '8';
});

whiteBand2.addEventListener('click', function(){
    band2.style.backgroundColor = 'white';
    valueBand2 = '9';
});


//====================================BAND 3=====================================
const band3 = document.getElementById('gelang-tiga');
const blackBand3 = document.querySelector('tr:nth-child(2) > td:nth-child(3)');
const brownBand3 = document.querySelector('tr:nth-child(3) > td:nth-child(3)');
const redBand3 = document.querySelector('tr:nth-child(4) > td:nth-child(3)');
const orangeBand3 = document.querySelector('tr:nth-child(5) > td:nth-child(3)');
const yellowBand3 = document.querySelector('tr:nth-child(6) > td:nth-child(3)');
const greenBand3 = document.querySelector('tr:nth-child(7) > td:nth-child(3)');
const blueBand3 = document.querySelector('tr:nth-child(8) > td:nth-child(3)');
const prupleBand3 = document.querySelector('tr:nth-child(9) > td:nth-child(3)');
const goldBand3 = document.querySelector('tr:nth-child(12) > td:nth-child(3)');
const silverBand3 = document.querySelector('tr:nth-child(13) > td:nth-child(3)');

let valueBand3 = 1;

blackBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'black';
    valueBand3 = 1;
});

brownBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'brown';
    valueBand3 = 10;
});

redBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'red';
    valueBand3 = 100;
});

orangeBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'orange';
    valueBand3 = 1000;
});

yellowBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'yellow';
    valueBand3 = 10000;
});

greenBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'green';
    valueBand3 = 100000;
});

blueBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'blue';
    valueBand3 = 1000000;
});

prupleBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'purple';
    valueBand3 = 10000000;
});

goldBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'gold';
    valueBand3 = 0.1;
});

silverBand3.addEventListener('click', function(){
    band3.style.backgroundColor = 'silver';
    valueBand3 = 0.01;
});


//===========================BAND 4===================================
const band4 = document.getElementById('gelang-empat');
const brownBand4 = document.querySelector('tr:nth-child(3) > td:nth-child(4)');
const redBand4 = document.querySelector('tr:nth-child(4) > td:nth-child(4)');
const greenBand4 = document.querySelector('tr:nth-child(7) > td:nth-child(4)');
const blueBand4 = document.querySelector('tr:nth-child(8) > td:nth-child(4)');
const purpleBand4 = document.querySelector('tr:nth-child(9) > td:nth-child(4)');
const greyBand4 = document.querySelector('tr:nth-child(10) > td:nth-child(4)');
const goldBand4 = document.querySelector('tr:nth-child(12) > td:nth-child(4)');
const silverBand4 = document.querySelector('tr:nth-child(13) > td:nth-child(4)');
const nothingBand4 = document.querySelector('tr:nth-child(14) > td:nth-child(4)');

let valueBand4 = '(+/- 5%)';

brownBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'brown';
    valueBand4 = '(+/- 1%)';
});

redBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'red';
    valueBand4 = '(+/- 2%)';
});

greenBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'green';
    valueBand4 = '(+/- 0.5%)';
});

blueBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'blue';
    valueBand4 = '(+/- 025%)';
});

purpleBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'purple';
    valueBand4 = '(+/- 0.10%)';
});

greyBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'grey';
    valueBand4 = '(+/- 0.05%)';
});

goldBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'gold';
    valueBand4 = '(+/- 5%)';
});

silverBand4.addEventListener('click', function(){
    band4.style.backgroundColor = 'silver';
    valueBand4 = '(+/- 10%)';
});

nothingBand4.addEventListener('click', function(){
    band4.style.backgroundColor = '#D9BC7A';
    valueBand4 = '(+/- 20%)';
});

//===================================HASIL============================
const hasil = document.getElementById('hasil');
const button = document.querySelector('button');
let value;

button.addEventListener('click', function(){
    value = (valueBand1+valueBand2) * valueBand3;
    if(value < 1000){
        hasil.innerHTML = value + ' Ohm ' + valueBand4;
    }
    else if(value >= 1000 && value <1000000){
        value = value / 1000;
        hasil.innerHTML = value + ' kOhm ' + valueBand4;
    }
    else if(value >= 1000000){
        value = value / 1000000;
        hasil.innerHTML = value + ' MOhm ' + valueBand4;
    }
});