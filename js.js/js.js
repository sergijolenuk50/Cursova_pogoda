console.log("hello");
let APIKey = "aa18abc7ef5d97445435ee5e8dc6726d";
let city_name = document.getElementById('inp_search');
console.log(city_name.value);
let btn1 = document.getElementById('btn_todey');
let min = document.getElementById('min');
let max = document.getElementById('max');
let temp = document.getElementById('temp');
let img_pog = document.getElementById('img_pog');
let ul_li = document.getElementById('ul_li');
let btn2 = document.getElementById('btn2');


// let day_time = document.getElementsByClassName('day_time');
let t = new Date();
console.log(t);

console.log(t.getUTCDate());
console.log(`${t.getFullYear()},${t.getMonth()+1},${t.getUTCDate()}`);
day_time.append(document.createTextNode(`${t.getFullYear()}:${t.getMonth()+1}:${t.getUTCDate()}`));
//   elem2.innerHTML = `${t.getFullYear()}:${t.getMonth()}:${t.getDay()}`;
// day_time.innerHTML = `${t.getFullYear()}:${t.getMonth()}:${t.getDay()}`;
navigator.geolocation.getCurrentPosition((pos)=>{});
btn2.addEventListener('click', async function (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(async (pos)=>{

        let api =`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.latitude}&appid=${APIKey}&units=metric`;
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
       
                    
        add (data);
                });
   
});

btn1.addEventListener('click', async function (event) {
    event.preventDefault();
let api =`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value},ua&appid=${APIKey}&units=metric`;
    const response = await fetch(api);
    let data = await response.json();
    console.log(data);
    // for (let index = 0; index < data.weather.length; index++) {
    //     // const element = array[index];
    //     if(index==3){
    //      console.log(data.weather[3].icon);

    //     }
    // }
    // data.weather.forEach(element => {
    //     console.log(element);
        
    // });

    add (data);
    // data.weather.forEach(element => {
    //     console.log(element);
    // });
});

// if(!data){
// }
let img = document.createElement('img');
let span =document.createElement('span');
let span1 =document.createElement('span');
let span2 =document.createElement('span');
let li =document.createElement('li');
let li1 =document.createElement('li');
let li2 =document.createElement('li');
let li3 =document.createElement('li');
let li4 =document.createElement('li');
img_pog.appendChild(img);
temp.appendChild(span);
temp.appendChild(span1);
img_pog.appendChild(span2);
ul_li.appendChild(li);
ul_li.appendChild(li1);
ul_li.appendChild(li2);
ul_li.appendChild(li3);
ul_li.appendChild(li4);


function add (data){


    span.classList.add('min');
    span1.classList.add('max');
    span2.classList.add('text');
    img.classList.add('img');
    span.innerHTML =' ';
    span1.innerHTML =' ';

    img.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    span.innerHTML = `min ${data.main.temp_min}`;
    span1.innerHTML = `max ${data.main.temp_max}`;
    span2.innerHTML = ` CITY  : ${data.name}`;
    li.innerHTML = `feels_like   : ${data.main.feels_like}`
    li1.innerHTML = `grnd_level   : ${data.main.grnd_level}`
    li2.innerHTML = `humidity   : ${data.main.humidity}`
    li3.innerHTML = `pressure: ${data.main.pressure}`

    

}