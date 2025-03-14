let valorTotal = 0;


function comprar(produtoElement) {
    const precoElement = produtoElement.querySelector(".preco");
    const valorElement = document.getElementById("valor");
    const precoTexto = precoElement.textContent;
    const precoNumerico = parseInt(precoTexto);

    if (!isNaN(precoNumerico)) {
        valorTotal += precoNumerico;
        valorElement.textContent = "Valor: R$"+ valorTotal+",00";
    } else {
        console.error("Preço inválido:", precoTexto);
    }
}