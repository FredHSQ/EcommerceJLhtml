var soma = 0;

function cart() {
    var mapCart = document.querySelector(".cart-products");

    for (var i = 0; i < localStorage.length; i++) {
        mapCart.innerHTML += `
        
            <input type="checkbox" checked id="${(i)}check" onclick="funcaoSoma(${(i)})" name="Product">
                <img style="margin-bottom:10px" src="${JSON.parse(localStorage.getItem(localStorage.key(i))).img}" alt="Produto: Console Nintendo Switch">
                    <div id="container-cart-product-description">
                        <p class="cart-product-title" style="margin-bottom: 3vh">
                            <strong>${JSON.parse(localStorage.getItem(localStorage.key(i))).nome}</strong>
                        </p>
                        <p class="cart-description">
                            <button onclick="funcaoRemoveCartItem(${(i)})" id="remove-button" ><strong>Remover item</strong></button>
                        </p>
                        
                    </div>
                    <p class="cart-product-price">
                        <strong>R$ ${JSON.parse(localStorage.getItem(localStorage.key(i))).preco + 0.99}</strong>
                    </p>
        `;

        funcaoSoma(i);
    }

    var total = document.getElementById("total-cart");
    total.innerHTML = `
    <strong>O valor total é: R$ ${soma.toFixed(2)}</strong>
     `
};

function funcaoSoma(j) {
    var verifica = document.getElementById(`${j}check`).checked;


    if (verifica) {
        soma = soma + JSON.parse(localStorage.getItem(localStorage.key(j))).preco + 0.99;

        var total = document.getElementById("total-cart");
        total.innerHTML = `
        <strong>O valor total é: R$ ${soma.toFixed(2)}</strong>
                        `
    } else {
        soma = soma - JSON.parse(localStorage.getItem(localStorage.key(j))).preco - 0.99;

        var total = document.getElementById("total-cart");
        total.innerHTML = `
                            <strong>O valor total é: R$ ${soma.toFixed(2)}</strong>
                            `
    }
}

function funcaoRemoveCartItem(key) {   
    localStorage.removeItem(localStorage.key(key));
    location.reload();
}

function purchaseSummary (){
    var resume = document.querySelector(".modal-body");
    for (var i = 0; i < localStorage.length; i++) {
        if(document.getElementById(`${i}check`).checked){
        resume.innerHTML += `
            <div style="display:flex">
                <img src="${JSON.parse(localStorage.getItem(localStorage.key(i))).img}" alt="Produto: Console Nintendo Switch" style="width: 12vw;height:12vh">
                    
                <div>
                    <p class="cart-product-title" style="margin-bottom: 3vh">
                        <strong>${JSON.parse(localStorage.getItem(localStorage.key(i))).nome}</strong>
                    </p>
                    <p class="cart-product-price">
                    <strong>R$ ${JSON.parse(localStorage.getItem(localStorage.key(i))).preco + 0.99}</strong>
                    </p>
                    
                </div>
            </div>
            <br>   
        `;
    }
    
}

var resumePrice = document.querySelector(".modal-footer");
console.log(resumePrice);
resumePrice.innerHTML= `
<div style="margin-right:35px; font-size:2vh"><strong>Total: R$ ${soma.toFixed(2)}</strong></div>
<button style="font-size:2vh" onclick="location.reload()" type="button" class="btn btn-secondary" data-dismiss="modal">Voltar ao Carrinho</button>
<button style="font-size:2vh" type="button" class="btn btn-primary" data-dismiss="modal" onclick="finished(${i})">Finalizar Compra</button>

`
}

function resetPage(){
    location.reload()
}

function finished(i){
    var tamanho = localStorage.length ;
    
    location.reload();
    
    for (var i = tamanho; i >= 0 ; i--) {
        
        localStorage.removeItem(localStorage.key(i));
        
    }

    alert("Compra Finalizada com sucesso!!!")
    
}
function toggleMenu() {
    const nav = document.getElementById("nav-header")
    const navIcon = document.getElementById("nav-icon")
    nav.classList.toggle("active");
    navIcon.classList.toggle("active");

}

function toggleAbout() {
    const about = document.getElementById("about-mobile");
    var info = 
    `
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `

    about.innerHTML = info
}
