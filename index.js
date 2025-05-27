let produto = document.querySelector(".produto");
let BotaoPedidosFeitos = document.querySelector(".botao-pedir"); 
let pedidosFeitos = document.querySelector("#pedidos_feitos");
let footer = document.getElementById("footer");



valorPedido = []
console.log(valorPedido)

class Produto {
    constructor(nome, img, titulo, descri, id) {
        this.nome = nome;
        this.img = img;
        this.titulo = titulo;
        this.descri = descri;
        this.id = id;
    }

    cafe() {
        let separar = document.createElement("div");
        separar.className = "separar";

        let div = document.createElement("div");
        let h2 = document.createElement("h2"); 
        let p = document.createElement("p"); 
        let img = document.createElement("img")

        let botaoDiminuirPedido = document.createElement("button");
        botaoDiminuirPedido.className = "botao-pedir"; 
        botaoDiminuirPedido.id = "tirar";
        botaoDiminuirPedido.innerText = "-";
        
        let botaoAlmentarPedido = document.createElement("button"); 
        botaoAlmentarPedido.className = "botao-pedir";
        botaoAlmentarPedido.id = "colocar";
        botaoAlmentarPedido.innerText = "+"; 

        let QuatidadePedida = document.createElement("p");
        QuatidadePedida.className = "botao-pedir";
        QuatidadePedida.id = "quatidade-pedida";
        QuatidadePedida.style.display = "none"

        let botoes = document.createElement("div"); 
        botoes.id ="botoes"; 
        botoes.appendChild(botaoAlmentarPedido);
        botoes.appendChild(botaoDiminuirPedido);

        img.src = this.img
        h2.textContent = this.titulo;
        p.textContent = this.descri;

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(botoes);
        div.appendChild(QuatidadePedida)

        separar.appendChild(img)
        separar.appendChild(div);
        produto.appendChild(separar);

        this.QuatidadePedidaCliques(botaoAlmentarPedido, QuatidadePedida, botaoDiminuirPedido);
    }

    QuatidadePedidaCliques(a , q , d, IDpedido){
        switch(this.id){
            case "affogato": 
               let valorPedioAffogato = 0;
                a.addEventListener('click', () => {
                    valorPedioAffogato += 1; 
                    q.innerText = valorPedioAffogato;
                     q.style.display = "block"
                })
                break;
            case "cafeAmaricano":
                let valorPedidoAmericano = 0;
                a.addEventListener('click', () => {
                    valorPedidoAmericano += 1; 
                    q.innerText = valorPedidoAmericano;
                     q.style.display = "block";
                })
                break;
            case "cafeGelado":
                let valorPedidGelado = 0;
                a.addEventListener('click', () => {
                     valorPedidGelado += 1; 
                    q.innerText = valorPedidGelado;
                     q.style.display = "block"
                })
                break;
            case "cafeIrlandes":
                let valorPedidoIrlandes = 0; 
                a.addEventListener('click', () => {
                     valorPedidoIrlandes += 1; 
                    q.innerText = valorPedidoIrlandes;
                     q.style.display = "block"
                })
                break;
            case "cafeVienense":
                let ValorPedidoVienense = 0;  
                a.addEventListener('click', () => {
                     ValorPedidoVienense += 1; 
                    q.innerText = ValorPedidoVienense;
                     q.style.display = "block"
                })
                break;
              case "cappuccino":
                let valorPedidoCappuccino = 0; 
                a.addEventListener('click', () => {
                     valorPedidoCappuccino += 1; 
                    q.innerText = valorPedidoCappuccino;
                     q.style.display = "block"
                })
                break;
            case "expresso":
                let valorPedidExpresso = 0; 
                a.addEventListener('click', () => {
                     valorPedidExpresso += 1; 
                    q.innerText = valorPedidExpresso;
                     q.style.display = "block"
                })
                break;
            case "flatWhite":
                let valorPedidoFlatWhite = 0; 
                a.addEventListener('click', () => {
                    valorPedidoFlatWhite += 1; 
                    q.innerText = valorPedidoFlatWhite;
                     q.style.display = "block"
                })
                break;
            case "fracappuccino":
                let valorPedidoFracappuccio =0; 
                a.addEventListener('click', () => {
                     valorPedidoFracappuccio += 1; 
                    q.innerText = valorPedidoFracappuccio;
                     q.style.display = "block"
                })
                break;
            case "latte":
                let valorPedidoLatte = 0; 
                a.addEventListener('click', () => {
                     valorPedidoLatte += 1; 
                    q.innerText = valorPedidoLatte;
                     q.style.display = "block"
                })
                break;
            case "macchiato":
                let valorPedidomacchiato = 0; 
                a.addEventListener('click', () => {
                     valorPedidomacchiato += 1; 
                    q.innerText = valorPedidomacchiato;
                     q.style.display = "block"
                })
                break;
            case "mocha":
                let valorPedidoMocha = 0;
                a.addEventListener('click', () => {
                     valorPedidoMocha += 1; 
                    q.innerText = valorPedidoMocha;
                     q.style.display = "block"
                })
                break;
            case "ristretto": 
                let valorPedidoRistretto = 0; 
                a.addEventListener('click', () => {
                   valorPedidoRistretto += 1; 
                    q.innerText = valorPedidoRistretto;
                     q.style.display = "block"
                })
            }
            
    }
}

let cafe1 = new Produto("bebidas", "img/Affogato.webp", "Affogato", "bola de sorvete de baunilha, 1 dose de café espresso quente", "affogato");
let cafe2 = new Produto("bebidas", "img/cafe_americano.webp", "Cafe Americano", "Café Espresso, Àgua quente", "cafeAmaricano");
let cafe3 =  new Produto("bebidas", "img/cafe_gelado.webp", "Cafe Gelado", "Espresso, Gelo, Açúcar, Leite", "cafeGelado");
let cafe4 = new Produto("bebidas", "img/cafe_irlandes.jpg", "Café Irlandes", "Café forte, Uísque Irlandês, Açucar Mascavo, Creme de Leite Fresco Levemente batido", "cafeIrlandes")
let cafe5 = new Produto("bebidas", "img/cafe_vienense.jpg", "Café Vienense", "Café forte, Chantilly, Chocolate em pó", "cafeVienense");
let cafe6 = new Produto("bebidas", "img/Cappuccino.jpeg", "Capputino", "Café espresso, Leite vaporizado, Espuma de leite, Cacau em pó", "cappuccino")
let cafe7 = new Produto("bebidas", "img/Expresso.jpeg", "Expresso", "Café Moído, Água quente", "expresso"); 
let cafe8 = new Produto("bebidas", "img/Flat_White.jpeg", "Flat White", "1 dose de espresso duplo, Leite Vaporizado com microespuma", "flatWhite");
let cafe9 = new Produto("bebidas", "img/Frappuccio.jpeg", "Frappuccio", "Café, Leite, Gelo, Açúcar, Chantilly, Coberturas opcionais", "fracappuccino");
let cafe10 = new Produto("bebidas", "img/Latte.jpeg", "Latte", "1 dose de espresso, Leite Vaporizado, Uma fina camada de espuma de leite por cima", "latte"); 
let cafe11 = new Produto("bebidas", "img/Macchiato.jpeg", "Machiato", "1 dose de espresso, Uma pequena quantidade de espuma de leite", "macchiato"); 
let cafe12 = new Produto("bebidas", "img/Mocha.jpeg", "Mocha", "1 dose de espresso, Leite vaporizado, Chocolate, Chantilly, Cacau em pó", "mocha");
let cafe13 = new Produto("bebidas", "img/Ristretto.jpeg", "Ristretto", "Café Moído, Água quente sob alta pressão", "ristretto");

cafe1.cafe();
cafe2.cafe();
cafe3.cafe();
cafe4.cafe();
cafe5.cafe();
cafe6.cafe();
cafe7.cafe();
cafe8.cafe(); 
cafe9.cafe();
cafe10.cafe();
cafe11.cafe();
cafe12.cafe(); 
cafe13.cafe();

///////////// virar membro ///////////////////////////////////

setInterval( () => {
   if(footer.style.display == "block"){
     footer.style.display = "none";
   }else{
    footer.style.display = "block";
   }
}, 10000 ); 
