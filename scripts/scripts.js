const btn = document.getElementById('off');

OnRed = false;
OnYellow = false;
OnGreen = false;
OnLights = false;

btn.addEventListener('click', () =>{
    if(btn.textContent == 'OFF'){
        btn.textContent = 'ON'
        OnLights = true;
        red.style['background-color'] = 'red';
        OnRed = true;
    }
    else{
        checkLights();
        btn.textContent = 'OFF'
        OnLights = false;
    }
});

red.addEventListener(('click'), () =>{
    if(OnLights == true){
        if(OnRed == true){
            red.style['background-color'] = 'white';
            OnRed = false;
        }
        else{
            red.style['background-color'] = 'red';
            yellow.style['background-color'] = 'white';
            green.style['background-color'] = 'white';
            OnRed = true;
            OnYellow = false;
            OnGreen = false;
        }
    }
});

yellow.addEventListener(('click'), () =>{
    if(OnLights == true){
        if(OnYellow == true){
            yellow.style['background-color'] = 'white';
            OnYellow = false;
        }
        else{
            yellow.style['background-color'] = 'yellow';
            red.style['background-color'] = 'white';
            green.style['background-color'] = 'white';
            OnRed = false;
            OnYellow = true;
            OnGreen = false;
        }
    }
});

green.addEventListener(('click'), () =>{
    if(OnLights == true){
        if(OnGreen == true){
            green.style['background-color'] = 'white';
            OnGreen = false;
        }
        else{
            green.style['background-color'] = 'green';
            red.style['background-color'] = 'white';
            yellow.style['background-color'] = 'white';
            OnRed = false;
            OnYellow = false;
            OnGreen = true;
        }
    }
});

function checkLights(){
    if(OnRed == true){
        red.style['background-color'] = 'white';
        OnRed = false;
    }
    if(OnYellow == true){
        yellow.style['background-color'] = 'white';
        OnYellow = false;
    }
    if(OnGreen == true){
        green.style['background-color'] = 'white';
        OnGreen = false;
    }
}