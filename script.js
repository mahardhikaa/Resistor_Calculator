//===============================GLOBAL SCOPE=================================
const color = ['black','brown','red','orange','yellow','green','blue','purple','grey','white','gold','silver', '#D9BC7A'];

//===============================GELANG PERTAMA======================================
const band1 = document.getElementById('gelang-satu');

let colorBand1 = [];
for(var i = 0; i < 10; i++){
    colorBand1[i] = document.querySelector('tr:nth-child(' + (i+2) + ') > td:nth-child(1)');
}

let valueBand1 = '1';
colorBand1.forEach(function(e,i){
    colorBand1[i].addEventListener('click', function(){
        band1.style.backgroundColor = color[i];
        if(i == 0){valueBand1 = ''}
        else{valueBand1 = '' + i + ''}
    })
})

//==========================================BAND 2========================================
const band2 = document.getElementById('gelang-dua');

let colorBand2 = [];
for(var i = 0; i < 10; i++){
    colorBand2[i] = document.querySelector('tr:nth-child(' + (i+2) + ') > td:nth-child(2)');
}

let valueBand2 = '1';
colorBand2.forEach(function(e,i){
    colorBand2[i].addEventListener('click', function(){
        band2.style.backgroundColor = color[i];
        if(i == 0){valueBand2 = ''}
        else{valueBand2 = '' + i + ''}
    })
})

//====================================BAND 3=====================================
const band3 = document.getElementById('gelang-tiga');

let colorBand3 = [];
for(var i = 0; i < 13; i++){
    if(i < 8 || i > 9){
        colorBand3[i] = document.querySelector('tr:nth-child(' + (i+2) + ') > td:nth-child(3)');
    }
}

let valueBand3 = 1;
colorBand3.forEach(function(e,i){
    colorBand3[i].addEventListener('click', function(){
        band3.style.backgroundColor = color[i];
        if(i < 8){
            if(i == 0){valueBand3 = 1}
            else{
                valueBand3 = 1;
                for(var j=1; j <= i; j++){
                    valueBand3 *= 10;
                }
            }
        }
        else if(i > 9){
            valueBand3 = 1;
            for(var j=10; j<=i; j++){
                valueBand3 *= 0.1;
            }
        }
    })
})

//===========================BAND 4===================================
const band4 = document.getElementById('gelang-empat');

let colorBand4 = [];
for(var i = 0; i < 13; i++){
    if(i > 0 && i < 3){
        colorBand4[i] = document.querySelector('tr:nth-child(' + (i+2) + ') > td:nth-child(4)');
    }
    else if(i > 4 && i < 9){
        colorBand4[i] = document.querySelector('tr:nth-child(' + (i+2) + ') > td:nth-child(4)');
    }
    else if(i > 9){
        colorBand4[i] = document.querySelector('tr:nth-child(' + (i+2) + ') > td:nth-child(4)');
    }
}

let valueBand4 = '(+/- 5%)';
colorBand4.forEach(function(e,i){
    colorBand4[i].addEventListener('click', function(){
        band4.style.backgroundColor = color[i];
        if(i == 1){
            valueBand4 = '(+/- 1%)';
        }
        else if(i == 2){
            valueBand4 = '(+/- 2%)';
        }
        else if(i == 5){
            valueBand4 = '(+/- 0.5%)';
        }
        else if(i == 6){
            valueBand4 = '(+/- 0.25%)';
        }
        else if(i == 7){
            valueBand4 = '(+/- 0.10%)';
        }
        else if(i == 8){
            valueBand4 = '(+/- 0.05)';
        }
        else if(i == 10){
            valueBand4 = '(+/- 5%)';
        }
        else if(i == 11){
            valueBand4 = '(+/- 10%)';
        }
        else if(i == 12){
            valueBand4 = '(+/- 20%)';
        }
    })
})

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