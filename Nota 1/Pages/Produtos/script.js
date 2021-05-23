var dados;
var mapas;
var xhr = new XMLHttpRequest();


function page1(){
    var number = document.getElementById('1')
    console.log(number);
    xhr.open('GET', `https://api.rawg.io/api/games?key=ec01ab7e989a453d91e17e1c5913871e&dates=2020-09-01,2021-04-30&platforms=18,1,7&page=${1}`);
    xhr.send();
 }
 
 function page2(){
     var number = document.getElementById('2')
     console.log(number);
     xhr.open('GET', `https://api.rawg.io/api/games?key=ec01ab7e989a453d91e17e1c5913871e&dates=2020-09-01,2021-04-30&platforms=18,1,7&page=${2}`);
     xhr.send();
  }
  function page3(){
     var number = document.getElementById('3')
     console.log(number);
     xhr.open('GET', `https://api.rawg.io/api/games?key=ec01ab7e989a453d91e17e1c5913871e&dates=2020-09-01,2021-04-30&platforms=18,1,7&page=${3}`);
     xhr.send();
  }


function fetchData() {
console.log("Iniciei");

 xhr.open('GET', `https://api.rawg.io/api/games?key=ec01ab7e989a453d91e17e1c5913871e&dates=2020-09-01,2021-04-30&platforms=18,1,7&page=${1}`);
 xhr.send();


xhr.onreadystatechange = () => {

    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            dados = JSON.parse(xhr.responseText).results;
            console.log(dados);
            document.getElementById('list-product').innerHTML =
            dados.map(element => {
                return `<section class="product-product">
                        <img src="${element.background_image}" alt="Produto: Console Nintendo Switch">
                        <hr>
                        <h6>${element.name}</h6>
                        <div class="products-price">
                            <p> R$ ${element.added_by_status.owned},99 </p>
                        </div>
                        <p onclick="openModal(${element.id})" style="border: none; background: none; color: black; font-family: Verdana, Geneva, Tahoma, sans-serif; text-decoration: underline; font-size: 2vh;"  data-toggle="modal" data-target=".bd-example-modal-lg">
                            Ver detalhes
                        </p>
                        <input type="button" value="Adicionar ao Carrinho" onclick="adicionarPC(${element.id},'${element.name}','${element.background_image}',${element.added_by_status.owned},'${element.released}')">
                        <p id="${element.id}" style="visibility:hidden;margin-bottom:-8px;color:green;text-decoration:none;">Adicionado com sucesso!!!</p>
                    </section>
                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document" style="width: 90vw; max-width: max-content;" >
                            <div class="modal-content" id="container">
                            </div>
                        </div>
                    </div>
                `  
            }).join("");
            
        }
    }
}
}

function openModal(id) {
    console.log("Iniciei");
    var xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.rawg.io/api/games/${id}?key=ec01ab7e989a453d91e17e1c5913871e`);
    xhr.send();

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //    console.log(JSON.parse(xhr.responseText));
                console.log("Encontrei dados");
                dados = JSON.parse(xhr.responseText);
                console.log(dados);

                document.getElementById('container').innerHTML = 
                `
                    <div class="modal-header">
                        <article id="general-products"  >
                            <div>
                                <h1>
                                    ${dados.name}
                                </h1>
                                <hr style="border: 1px solid black;">
                            </div>
                            <img style="height: 100%; width: 100%; max-height: none;" src="${dados.background_image}">
                            
                            <div style="display: flex;">
                                <div>
                                    <div>
                                        <h2 style="color: rgb(175,31,36);">
                                            Descrição:
                                        </h2>
                                        <p>
                                            ${dados.description}                                        
                                        </p>
                                    </div>
                                    <div style="display: flex;">
                                        <div style="display: flex;">
                                            <h2 style="color: rgb(175,31,36);">
                                                Avaliação:
                                            </h2>
                                            <h2 style="margin: auto; border: solid rgb(107, 22, 39); border-radius: 50%; padding: 1vh; font-size: 300%;">
                                                ${dados.rating}
                                            </h2>
                                        </div>
                                        <div style="margin: auto;">
                                            <h2 style="color: rgb(175,31,36);">
                                                Plataformas:
                                            </h2>
                                            <p>
                                                <ul>
                                                ${dados.platforms.map(element => {
                                                    return `
                                                    <li>${element.platform.name}</li>
                                                    `
                                                }).join("")}
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </article>
                    </div>
                `
            }
        }
    }
}

function adicionarPC(id,nome, img, preco,desc){

 var obj = new Object();
 obj.nome = nome;
 obj.preco = preco;
 obj.img = img;
 obj.checked = true;
 obj.descricao = desc

localStorage.setItem(JSON.stringify(id), JSON.stringify(obj));

  document.getElementById(id).style.visibility = 'visible'

}
