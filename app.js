let button = document.getElementById('button');
let p = document.getElementById('hide-me');
button.textContent='Show Me'

 button.addEventListener('click', function(){
    if(p.classList.contains('hidden')){
        button.textContent = 'Hide me'
        p.classList.remove('hidden')
    } else if(!p.classList.contains('hidden')){
        button.textContent = 'Show me'
        p.classList.add('hidden')
    }
})

