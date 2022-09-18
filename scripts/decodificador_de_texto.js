


var input = document.querySelector('#captura');
var output = document.querySelector('#output');
var vogais;
var consoantes = 0;
var count = 0;
var caracterEspecial = 0;
var digito = 0;
var textCrip;
//var criptografia = ['ai','enter','imes','ober','ufat'];
//var caracter = 'aeiou';



var button = document.querySelector('.criptografar');
button.addEventListener('click', () => {    
    var textCrip = verifica();
    if (textCrip != '')
        output.value = textCrip;
});

var decrip = document.querySelector('.descriptografar');
decrip.addEventListener('click', () => {
    var textCrip = input.value;
    textDesCrip = decriptografa(textCrip);
    if(textCrip === ''){
        alert('Não há texto para descriptografar.');        
    }else{
        output.value = textDesCrip;
    }
})

var copiar = document.querySelector('.copiar');
copiar.addEventListener('click', () => {    
    
});


function verifica() {
    var text = '';
    var textCrip = '';
    if (input === document.querySelector('#captura')) {
        text = input.value;
        if (text === '') {
            alert('Não existe valor para criptografar');
            return;
        }
        for (i = 0; i < text.length; i++) {
            var caracter = text[i].toLowerCase();

            if (caracter >= "a" && caracter <= 'z') {
                if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u') {

                    switch (caracter) {
                        case 'a':
                            textCrip += 'ai';
                            break;
                        case 'e':
                            textCrip += 'enter';
                            break;
                        case 'i':
                            textCrip += 'imes';
                            break;
                        case 'o':
                            textCrip += 'ober';
                            break;
                        case 'u':
                            textCrip += 'ufat';
                            break;
                    }
                } else {
                    textCrip += text[i];
                }
            }
        }
        document.querySelector('.muda-imagem').style.display = 'none';
        
        return textCrip ;
         
    }
}


function decriptografa(textoCrip) {      
    return textoCrip.replace('ai', 'a').replace('enter', 'e').replace('imes', 'i').replace('ober', 'o').replace('ufat', 'u');
}

   

function copy(){
    let copiar;
    textCrip = copiar;
    copiar = document.querySelector('#output');
    copiar.select();
    document.execCommand("copy");
    console.log(copiar);
    
}
document.querySelector("#copy").addEventListener("click",copy);


