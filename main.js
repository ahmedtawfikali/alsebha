
let btn = document.querySelector("button")
let num = document.querySelector(".num")
let sba = document.querySelector(".sba")
let tsoher = document.querySelector(".tsoher")
let imga=document.querySelector('.imga')

let finished=document.querySelector(
  '.finished')


btn.onclick=function(){
    num.textContent++
    setTimeout(() => {
        sba.style.display = `none`
    }, 100);
    sba.style.display = `block`
    
    if (num.textContent === '33' ){
  console.log('aaaaaa')
  sba.textContent ='الحمد لله'
} else if (num.textContent === '66'){
  sba.textContent =' الله اكبر '
  }else if (num.textContent === '101'){
        imga.style.display = `block`;
            finished.style.display= 'flex'
  }else if (num.textContent === '100'){
    sba.textContent ='لا اله الا الله'
  }
}

tsoher.onclick=function(){
    if (num.textContent = '0')
    { sba.textContent ='سبحان لله'
    
      imga.style.display = `none`
            finished.style.display = `none`
          finished.textContent ='1'

    }
};

finished.onclick=function(){
setTimeout(()=>{
    finished.textContent ='♤';
},100)
}
let =document.querySelector
