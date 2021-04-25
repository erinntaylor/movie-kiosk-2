const container = document.querySelectorAll('.container-1');
const limit = 10;

container.forEach(function(c){
  const bm = c.querySelector('.minus');
  const bp = c.querySelector('.plus');
  const d = c.querySelector('.display');
  let count = 0;
  bm.addEventListener('click',function(){
    if(count>0){
      count--;
      displayAndCheck();
    }
  })
  bp.addEventListener('click',function(){
    if(count<limit){
      count++;
      displayAndCheck();
    }
  })
  function displayAndCheck(){
    d.textContent = count;
    bm.disabled = count==0 ? true : false;
    bp.disabled = count<limit ? false : true;
  }
})




