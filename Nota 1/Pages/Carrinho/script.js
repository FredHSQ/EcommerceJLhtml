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



var soma = 0;

function teste() {
    var teste = document.querySelector(".cart-products");
    funcaoSoma();
    for (var i = 1; i <= localStorage.length; i++) {
        teste.innerHTML += `
        <input type="checkbox" checked id="${(i)}check" onclick="funcaoCheck(JSON.parse(localStorage.getItem(${(i)})), ${(i)})" name = "Product">
                    <img src="${JSON.parse(localStorage.getItem(i)).img}" alt="Produto: Console Nintendo Switch">
                    <div>
                        <p class="cart-product-title">
                            <strong>${JSON.parse(localStorage.getItem(i)).nome}</strong>
                        </p>
                        <p class="cart-description">
                            <strong>${JSON.parse(localStorage.getItem(i)).descricao}</strong>
                        </p>
                    </div>
                    <p class="cart-product-price">
                        <strong>R$ ${JSON.parse(localStorage.getItem(i)).preco}</strong>
                    </p>
        `;

        // soma += obj.get(i).preco;
    }

    var total = document.getElementById("total-cart");
    total.innerHTML = `
        O valor total é: R$ ${soma}
     
    `
};


function funcaoCheck(p1, i) {

    if (p1.checked) {
        var key = (JSON.stringify(i));
        p1.checked = false;
        localStorage.setItem(key, JSON.stringify(p1));
    } else {
        var key = (JSON.stringify(i));
        p1.checked = true;
        localStorage.setItem(key, JSON.stringify(p1));
    }
    funcaoSoma();
    var total = document.getElementById("total-cart");
    total.innerHTML = `
                O valor total é: R$ ${soma}
             
            `
}

function funcaoSoma() {
    soma = 0;
    for (var i = 1; i <= localStorage.length; i++) {
        if (JSON.parse(localStorage.getItem(i)).checked) {
            soma = soma + JSON.parse(localStorage.getItem(i)).preco;
        }
    }
}
