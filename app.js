let numMax = 80;
document.querySelector("input").max = numMax;

let numeroSecreto = gerarNumero();
let tentativas = 1


function textos(tag, texto)
{
    let textos = document.querySelector(tag);
    textos.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.8; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function mensagemInicial()
{
    textos("h1", "Jogo do número secreto");
    textos("p", ("Escolha um número de 1 a "+numMax));
}

mensagemInicial()


function verificarChute() 
{
    let chute = document.querySelector("input").value;
    console.log(tentativas)
    
    if(chute == numeroSecreto)
    {
        if (tentativas == 1)
            {
                tentativaTexto = tentativas+" tentativa";
            }
            else
            {
                tentativaTexto = tentativas+" tentativas";
            }
        textos("h1", "Acertou");
        textos("p", ("Você descobriu o número secreto em "+tentativaTexto));
        document.getElementById("reiniciar").removeAttribute("disabled")

    }
    else
    {
        if(chute > numeroSecreto)
        {
            textos("h1", "Errou");
            textos("p", ("O número é menor que "+chute));
        }
        else
        {
            textos("h1", "Errou");
            textos("p", ("O número é maior que "+chute));
        }
        tentativas++;
    }

    document.querySelector("input").value = "";

}


function gerarNumero()
{
   return parseInt(Math.random() * numMax + 1);
}


function novoJogo()
{
    numeroSecreto = gerarNumero()
    tentativas = 1
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled",true)
}