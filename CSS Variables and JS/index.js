const input = document.querySelectorAll('.controls input'); 
// console.log(input);

function Update() {
    const suffix = this.dataset.sizing || '';
    // console.log(this.dataset.sizing);
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix );
}


input.forEach((item)=>{
    item.addEventListener('change',Update);
})

input.forEach((item)=>{
    item.addEventListener('mousemove',Update);
})