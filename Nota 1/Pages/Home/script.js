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
                            R$${element.added_by_status.owned},99
                        </p>
                    </div>
                    <input class="add-cart" type="button" value="Adicionar ao Carrinho" onclick="adicionarPC(${element.id},'${element.name}','${element.background_image}',${element.added_by_status.owned},'${element.released}')">
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

}

function toggleMenu() {
    const nav = document.getElementById("nav-header")
    const navIcon = document.getElementById("nav-icon")
    nav.classList.toggle("active");
    navIcon.classList.toggle("active");

    var procurar = 
    `
    <div id="div-procura-mobile">
        <input type="text" name="search" id="procurador-mobile" placeholder="Encontre aqui o que procuras..."
        aria-label="Ensira aqui a pesquisa que gostaria de fazer no site.">
        <img src="../../Assets/lupa.png" alt="lupa" id="img-lupa-mobile">
    </div>
    `

    document.getElementById("procura-mobile").innerHTML = procurar
}
