let range = document.getElementById('range');
let emjio = document.getElementById('emjio');
let nowTemperature = document.getElementById('now-temperature');
let cut = document.getElementById('cut');
let add = document.getElementById('add');

range.value = 20

function nowRange() {
  nowTemperature.textContent = `${range.value} 度`
  if(16 >= range.value){
    emjio.textContent = '🆒';
  }else if(16 > range.value && 26 <=range.value){
    emjio.textContent = '😬';
  }else if(26 < range.value && 30 >=range.value){
    emjio.textContent = '😁';
  }else if(32 < range.value && 40 >=range.value){
    emjio.textContent = '😥';
  }else if(40 < range.value && 50 >=range.value){
    emjio.textContent = '😰';
  }else if(50 < range.value && 60 >=range.value){
    emjio.textContent = '😵';
  }else if(60 < range.value && 99 >=range.value){
    emjio.textContent = '👹';
  }else if(100 <= range.value){
    emjio.textContent = '☠️';
  }
}

range.addEventListener('input', nowRange)
cut.addEventListener('click',function(){
  console.log('1234')
  range.value - 10
})
add.addEventListener('click',function(){
  range.value + 1 
})