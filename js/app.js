const loadQuote = () => {
    const loadingQuote = document.getElementById('quote');
    loadingQuote.classList.remove('quotation');
    loadingQuote.innerText = 'Loading';

    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => dataShow(data));
}

const dataShow = (data) => {
    const showQuote = document.getElementById('quote');
    showQuote.classList.add('quotation');
    showQuote.innerText = data.quote;
}

document.getElementById('load-quote').addEventListener('click', () => loadQuote());