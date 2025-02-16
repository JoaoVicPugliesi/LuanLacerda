let soon = document.querySelector('.soon');
let explain = document.querySelector('.explain');
let goback = document.querySelector('.goback');

function updateText() {
    if (localStorage.getItem('language') == 'en') {
        soon.textContent = "Very Soon";
        explain.textContent = "The idea of ​​creating a store with products based on Luan Lacerda's career is still under development. We are excited to have you on this adventure with us. Thank you for coming this far.";
        goback.textContent = "Go back to the home page";
    } else {
        soon.textContent = "Em Breve";
        explain.textContent = "A ideia de criar uma loja com produtos baseados na trajetória de Luan Lacerda é uma ideia em desenvolvimento. Estamos animados pôr tê-lo nessa aventura conosco. Obrigado por chegar até aqui.";
        goback.textContent = "Voltar para a página inicial";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateText();
});
