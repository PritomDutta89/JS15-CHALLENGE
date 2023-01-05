window.addEventListener("keydown", (e)=>{
    // console.log(e.key);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div[data-key="${e.key}"]`);

    if(!audio) return;

    key.classList.add("play");

    audio.currentTime=0;
    audio.play();
})


const keys = document.querySelectorAll(".btn");

keys.forEach((key)=>{
    // console.log(key);
    key.addEventListener("transitionend", (e)=>{
        console.log(e);
        if(e.propertyName !== "transform") 
          return;
        e.target.classList.remove("play");
    })
})