let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let counter   = document.getElementById("counter");
let count = 0;
decrement.addEventListener('click',()=>{
     count--;
     counter.innerHTML = count;
     counterStyle();
})

increment.addEventListener('click',()=>{
    count++;
    counter.innerHTML = count;
    counterStyle();
})

function counterStyle(){
    if(count< 0){
        counter.classList.add("negative");
    }
    else if(count > 0){
        counter.classList.add("positive");
    }
    else{
        counter.classList.remove("negative");
        counter.classList.remove("positive");
    }
}

