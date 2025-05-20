let produto = document.querySelector(".produto");
let BotaoPedidosFeitos = document.querySelector(".botao-pedir"); 
let pedidosFeitos = document.querySelector("#pedidos_feitos");
let footer = document.getElementById("footer");

num = 0; 

class Produto {
    constructor(nome, img, titulo, descri) {
        this.nome = nome;
        this.img = img;
        this.titulo = titulo;
        this.descri = descri;
    }

    cafe() {
        let separar = document.createElement("div");
        separar.className = "separar";

        let div = document.createElement("div");
        let h2 = document.createElement("h2"); 
        let p = document.createElement("p"); 
        let img = document.createElement("img")

        let botao = document.createElement("button");
        botao.className = "botao-pedir";
        botao.innerText = "Pegar";

        img.src = this.img
        h2.textContent = this.titulo;
        p.textContent = this.descri;

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(botao);

        botao.addEventListener("click", () => {
        num += 1;
        pedidosFeitos.innerHTML = num; 
        })
    

        separar.appendChild(img)
        separar.appendChild(div);
        produto.appendChild(separar);

    }
}

let cafe1 = new Produto("bebidas", "img/Affogato.webp", "Affogato", "bola de sorvete de baunilha, 1 dose de café espresso quente");
let cafe2 = new Produto("bebidas", "img/cafe_americano.webp", "Cafe Americano", "Café Espresso, Àgua quente");
let cafe3 =  new Produto("bebidas", "img/cafe_gelado.webp", "Cafe Gelado", "Espresso, Gelo, Açúcar, Leite");
let cafe4 = new Produto("bebidas", "img/cafe_irlandes.jpg", "Café Irlandes", "Café forte, Uísque Irlandês, Açucar Mascavo, Creme de Leite Fresco Levemente batido")
let cafe5 = new Produto("bebidas", "img/cafe_vienense.jpg", "Café Vienense", "Café forte, Chantilly, Chocolate em pó");
let cafe6 = new Produto("bebidas", "img/Cappuccino.jpeg", "Capputino", "Café espresso, Leite vaporizado, Espuma de leite, Cacau em pó")
let cafe7 = new Produto("bebidas", "img/Expresso.jpeg", "Expresso", "Café Moído, Água quente"); 
let cafe8 = new Produto("bebidas", "img/Flat_White.jpeg", "Flat White", "1 dose de espresso duplo, Leite Vaporizado com microespuma");
let cafe9 = new Produto("bebidas", "img/Frappuccio.jpeg", "Frappuccio", "Café, Leite, Gelo, Açúcar, Chantilly, Coberturas opcionais");
let cafe10 = new Produto("bebidas", "img/Latte.jpeg", "Latte", "1 dose de espresso, Leite Vaporizado, Uma fina camada de espuma de leite por cima"); 
let cafe11 = new Produto("bebidas", "img/Macchiato.jpeg", "Machiato", "1 dose de espresso, Uma pequena quantidade de espuma de leite"); 
let cafe12 = new Produto("bebidas", "img/Mocha.jpeg", "Mocha", "1 dose de espresso, Leite vaporizado, Chocolate, Chantilly, Cacau em pó");
let cafe13 = new Produto("bebidas", "img/Ristretto.jpeg", "Ristretto", "Café Moído, Água quente sob alta pressão");

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
