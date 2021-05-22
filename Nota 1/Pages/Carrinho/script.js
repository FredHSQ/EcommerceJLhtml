var soma = 0;

function teste() {
    var teste = document.querySelector(".cart-products");

    for (var i = 0; i < localStorage.length; i++) {
        teste.innerHTML += `
            <input type="checkbox" checked id="${(i)}check" onclick="funcaoSoma(${(i)})" name="Product">
                <img src="${JSON.parse(localStorage.getItem(localStorage.key(i))).img}" alt="Produto: Console Nintendo Switch">
                    <div>
                        <p class="cart-product-title">
                            <strong>${JSON.parse(localStorage.getItem(localStorage.key(i))).nome}</strong>
                        </p>
                        <p class="cart-description">
                            <strong>${JSON.parse(localStorage.getItem(localStorage.key(i))).descricao}</strong>
                        </p>
                    </div>
                    <p class="cart-product-price">
                        <strong>R$ ${JSON.parse(localStorage.getItem(localStorage.key(i))).preco}</strong>
                    </p>
        `;

        funcaoSoma(i);
    }

    var total = document.getElementById("total-cart");
    total.innerHTML = `
        O valor total é: R$ ${soma}
     `
};

function funcaoSoma(j) {
    var verifica = document.getElementById(`${j}check`).checked;
    console.log(verifica);

    if (verifica) {
        soma = soma + JSON.parse(localStorage.getItem(localStorage.key(j))).preco;

        var total = document.getElementById("total-cart");
        total.innerHTML = `
                            O valor total é: R$ ${soma}
                        `
    } else {
        soma = soma - JSON.parse(localStorage.getItem(localStorage.key(j))).preco;

        var total = document.getElementById("total-cart");
        total.innerHTML = `
                            O valor total é: R$ ${soma}
                            `
    }
}

// function funcaoCheck(objeto, chave,i) {
//     if (verifica) {
//         var key = (chave);
//         // objeto.checked = false;
//         localStorage.removeItem(key);
//         // localStorage.setItem(key, JSON.stringify(objeto));
//     } else {
//         var key = (chave);
//         // objeto.checked = true;
//         // localStorage.removeItem(key, JSON.stringify(objeto));
//         // localStorage.removeItem(key)
//         localStorage.setItem(key,JSON.stringify(objeto))

//     }
// funcaoSoma(j);
// var total = document.getElementById("total-cart");
// total.innerHTML = `
//             O valor total é: R$ ${soma}

//             `
// }



