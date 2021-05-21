var objeto1 = {
    checked: true,
    nome: "Lucas",
    descricao: "teste descricao",
    preco: 10,
    img: "../../Assets/switch.jpg"
};

var objeto2 = {
    checked: true,
    nome: "Granato",
    descricao: "teste descricao 2",
    preco: 100,
    img: "../../Assets/cyberpunk.jpg"
};

var objeto3 = {
    checked: true,
    nome: "Danilo",
    descricao: "teste descricao 3",
    preco: 10000,
    img: "../../Assets/tlou2.jpg"
};

var objeto4 = {
    checked: true,
    nome: "Fred",
    descricao: "teste descricao 4",
    preco: 2,
    img: "../../Assets/tlou2banner.jpg"
};

var obj = new Map();
obj.set(1, objeto1);
obj.set(2, objeto2);
obj.set(3, objeto3);
obj.set(4, objeto4);


var soma = 0;

function teste() {
    var teste = document.querySelector(".cart-products");
    funcaoSoma();
    for (var i = 1; i <= obj.size; i++) {
        console.log();
        teste.innerHTML += `
        <input type="checkbox" checked id="${(i)}check" onclick="funcaoCheck(obj.get(${(i)}))" name = "Product">
                    <img src="${obj.get(i).img}" alt="Produto: Console Nintendo Switch">
                    <div>
                        <p class="cart-product-title">
                            <strong>${obj.get(i).nome}</strong>
                        </p>
                        <p class="cart-description">
                            <strong>${obj.get(i).descricao}</strong>
                        </p>
                    </div>
                    <p class="cart-product-price">
                        <strong>R$ ${obj.get(i).preco}</strong>
                    </p>
        `;

        // soma += obj.get(i).preco;
    }

    var total = document.getElementById("total-cart");
    total.innerHTML = `
        O valor total é: R$ ${soma}
     
    `
};


function funcaoCheck(p1) {

            if(p1.checked){
               p1.checked = false;
            }else{
                p1.checked = true;
            }
            funcaoSoma();
            var total = document.getElementById("total-cart");
            total.innerHTML = `
                O valor total é: R$ ${soma}
             
            `
  }

function funcaoSoma() {
    soma=0;
    for (var i = 1; i <= obj.size; i++) {
        if(obj.get(i).checked){
            soma = soma+obj.get(i).preco;
        }
    }
}
