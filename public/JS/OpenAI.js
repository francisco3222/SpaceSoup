import OpenAI from 'https://cdn.skypack.dev/openai';
require('dotenv').config();
// Importação da chave da API
let OPEN_AI_KEY = "";
OPEN_AI_KEY = process.env.OPEN_AI_KEY;

const openai = new OpenAI({
    // Chave da API usada, tentar usar a ativando pela linha de comandos no tutorial não funcionou quando testado
    apiKey: OPEN_AI_KEY, dangerouslyAllowBrowser: true
});
// Função usada para a geração de texto pela API
async function seeMore(topic, facts, addHere) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." },
            { role: "user", content: `Dá-me factos sobre ${topic} para além destes: ${facts}` }],
        model: "gpt-3.5-turbo",
    });
    //Criação de um elemento HTML <p> e aplicacão de CSS a este, já que o CSS usado no resto da página não lhe é aplicado
    let factos = document.createElement('p');
    factos.textContent = completion.choices[0].message.content;
    factos.style.color = "white";
    factos.style.fontSize = "24px";
    factos.style.textAlign = "justify";
    addHere.appendChild(factos);
}

// Junção de todos os botões na página
var moreButtons = document.getElementsByClassName('moreButton');

// Procurar em todos os elementos de botão se algum foi clicado
for (var i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener('click', function(event) {
        // Buscar todos os elementos necessarios que fazem parte da secção do botão precionado
        let topic = event.target.closest('section').querySelector('h2').textContent;
        let facts = event.target.closest('section').querySelector('p').textContent;
        let addHere = event.target.closest('section').querySelector('p');
        let button = event.target.closest('section').querySelector('button');
        seeMore(topic,facts,addHere);
        button.remove();
        let timerInterval;
        Swal.fire({
            title: "Gerando Informação...",
            html: "Esta janela vai-se fechar em <b></b> milisegundos.",
            timer: 6300,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    })}