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

function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function telefoninho(){
    var value = document.getElementById("phoneForm").value;
    var formatted = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    console.log(value);
    document.getElementById("phoneForm").value = formatted;
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4})./, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4})./, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}

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

    if (p1.checked) {
        p1.checked = false;
    } else {
        p1.checked = true;
    }
    funcaoSoma();
    var total = document.getElementById("total-cart");
    total.innerHTML = `
                O valor total é: R$ ${soma}
             
            `
}

function funcaoSoma() {
    soma = 0;
    for (var i = 1; i <= obj.size; i++) {
        if (obj.get(i).checked) {
            soma = soma + obj.get(i).preco;
        }
    }
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