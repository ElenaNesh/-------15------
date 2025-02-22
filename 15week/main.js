let cities=["Москва", "Сочи", "Мурманск", "Владивосток", "Якутск"];
let temperaturesArray=[];
let ul=document.getElementById('temperature_title');
for (let city of cities) {
    let temperature;

    while (true) {
        temperature = Number(prompt(`Введите, пожалуйста, температуру в городе ${city}:`));
        if (temperature<=60 && temperature>=-90) {
            break
        } else {alert('Вау! Либо в мире зафиксирован новый рекорд, либо вы ошиблись. Введите, пожалуйста, число от -60 до +60')}
    }

    
    temperaturesArray.push(temperature);
    let cityName=document.getElementById('city');
    let cityTemperature=document.getElementById('city-temperature');
    let li1=document.createElement('li');
    li1.textContent=city;
    let li2=document.createElement('li');
    li2.textContent=temperature;
    cityName.appendChild(li1);
    cityTemperature.appendChild(li2);

    if (temperature>=45) {
        li1.style.backgroundColor='#730a02';
        li2.style.backgroundColor='#730a02';
    } else if (temperature>=30 && temperature<45) {
        li1.style.backgroundColor='#c21508';
        li2.style.backgroundColor='#c21508';
    } else if (temperature>=20 && temperature<30) {
        li1.style.backgroundColor='#ebae07';
        li2.style.backgroundColor='#ebae07';
    } else if (temperature>=10 && temperature<20) {
        li1.style.backgroundColor='#6acf06';
        li2.style.backgroundColor='#6acf06';
    } else if (temperature>=0 && temperature<10) {
        li1.style.backgroundColor='#6beda1';
        li2.style.backgroundColor='#6beda1';
    } else if (temperature>-10 && temperature<0) {
        li1.style.backgroundColor='#2be0ce';
        li2.style.backgroundColor='#2be0ce';
    } else if (temperature>-20 && temperature<-10) {
        li1.style.backgroundColor='#07a8ba';
        li2.style.backgroundColor='#07a8ba';
    } else {
        li1.style.backgroundColor='#0917d9';
        li2.style.backgroundColor='#0917d9';
    }
}


let maxTemperature=Math.max(...temperaturesArray);
let textMaxTemperature=document.createElement('p');
let minTemperature=Math.min(...temperaturesArray);
let textMinTemperature=document.createElement('p');
textMaxTemperature.textContent=`Максимальная температура: ${maxTemperature}`;
document.body.append(textMaxTemperature);
textMinTemperature.textContent=`Минимальная температура: ${minTemperature}`;
document.body.append(textMinTemperature)

