let FazendoCompra = document.getElementById("tela_comprar");
let valorTotal = 0;
const valorElement = document.getElementById("valor");

// Pega a referência da div "fazer_pedido"
const fazerPedidoDiv = document.getElementById("fazer_pedido");

class Pedido {
    constructor(nome, imgSrc) {
        this.nome = nome;
        this.imgSrc = imgSrc;
    }

    criarElemento() {
        const divPedido = document.createElement("div");
        divPedido.classList.add("pedidos_feitos");

        const img = document.createElement("img");
        img.width = 40;
        img.height = 40;
        img.src = this.imgSrc;

        const p = document.createElement("p");
        p.textContent = this.nome;

        divPedido.appendChild(img);
        divPedido.appendChild(p);

        return divPedido;
    }
}

function pedidos() {
    FazendoCompra.style.display = "block";
}

function comprar(produtoElement) {
    const nomeProduto = produtoElement.querySelector(".nome").textContent;
    const imagemProduto = produtoElement.querySelector("img").src;
    const precoTexto = produtoElement.querySelector(".preco").textContent;
    const precoNumerico = parseInt(precoTexto);

    // Atualiza o valor total
    if (!isNaN(precoNumerico)) {
        valorTotal += precoNumerico;
        valorElement.textContent = "Valor: R$ " + valorTotal + ",00";
    } else {
        console.error("Preço inválido:", precoTexto);
    }

    // Cria o pedido e adiciona antes da div 'fazer_pedido'
    const pedido = new Pedido(nomeProduto, imagemProduto);
    const novoPedido = pedido.criarElemento();
    FazendoCompra.insertBefore(novoPedido, fazerPedidoDiv);
}
