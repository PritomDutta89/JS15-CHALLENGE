let string = "";
let buttons = document.querySelectorAll('.button');

//Array.from(buttons) convert it  in arr format
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        try {
            if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string
            }
            else if(e.target.innerHTML == 'C')
            {
                string = "";
                document.querySelector('input').value = string
            }
            else
            {
                console.log(e.target.innerHTML);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string
            }
        } catch (error) {
            console.log(error);
            alert('Put valid digit');
        }
    })
})