/*
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
*/

class ButtonHide extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
    <style>
    .hidden{
        display: none;
    }
</style>
    <button id="button">Show Me</button>
    <p id="hide-me" class="hidden">I am a paragraph</p>
    `
    this._button = this.shadowRoot.querySelector('button');
    this._p = this.shadowRoot.querySelector('p');
    this._p.classList.add('hidden')
    this._button.addEventListener('click', this._toggleButton.bind(this))
        /*
        if(this._p.classList.contains('hidden')){
            this._button.textContent = 'Hide me'
            this._p.classList.remove('hidden')
        } else if(!this._p.classList.contains('hidden')){
            this._button.textContent = 'Show me'
            this._p.classList.add('hidden')
        }
        */
    }
    _toggleButton() {
        if(this._p.classList.contains('hidden')){
            this._p.classList.remove('hidden');
        } else if(!this._p.classList.contains('hidden')){
            this._p.classList.add('hidden')
        }
    }
    
    _
}


/*
connectedCallback(){
    const button = document.createElement('button');
    const p = document.createElement('p');
    button.textContent='Show Me';
    p.textContent='I am a paragraph'
    this.appendChild(button);
    this.appendChild(p)
    button.addEventListener('click', function(){
        if(p.classList.contains('hidden')){
            button.textContent = 'Hide me'
            p.classList.remove('hidden')
        } else if(!p.classList.contains('hidden')){
            button.textContent = 'Show me'
            p.classList.add('hidden')
        }
    })
        
    }
  */  




customElements.define("button-hide", ButtonHide);
