var dados;
var xhr = new XMLHttpRequest();

function adicionarPC(objeto) {
    localStorage.setItem(JSON.stringify(objeto.id), JSON.stringify(objeto));
}
function fetchData() {
    console.log("Iniciei");

    xhr.open('GET', `https://api.rawg.io/api/games?key=ec01ab7e989a453d91e17e1c5913871e&page_size=4&metacritic=97,100`);
    xhr.send();


    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                dados = JSON.parse(xhr.responseText).results;
                console.log(dados);
                document.getElementById('container-spotlight').innerHTML =
                    dados.map(element => {
                        return `
                    <section class="product-spotlight">
                    <img src="${element.background_image}" alt="${element.name}">
                    <hr>
                    <h3>${element.name}</h3>
                    <p>
                        Por apenas
                    </p>
                    <div id="preço">
                        <p>
                            R$${element.suggestions_count},99
                        </p>
                    </div>
                    <input class="add-cart" type="button" value="Adicionar ao Carrinho" onclick="adicionarPC(${element.id},'${element.name}','${element.background_image}',${element.suggestions_count},'${element.released}')">
                    <p id="${element.id}" style="visibility:hidden;margin-bottom:-8px;color:green;text-decoration:none;text-align:center;">Adicionado com sucesso!!!</p>
                    </section>
                    `
                    }).join("");

            }
        }
    }
}
function adicionarPC(id, nome, img, preco, desc) {

    var obj = new Object();
    obj.nome = nome;
    obj.preco = preco;
    obj.img = img;
    obj.checked = true;
    obj.descricao = desc

    console.log(obj);
    localStorage.setItem(JSON.stringify(id), JSON.stringify(obj));

    document.getElementById(id).style.visibility = 'visible'

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