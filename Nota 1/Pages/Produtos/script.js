var dados;
var mapas;
var xhr = new XMLHttpRequest();
var xhz = new XMLHttpRequest();

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
                        <p>Ver detalhes</p>
                        <input type="button" value="Adicionar ao Carrinho" onclick="adicionarPC(${element.id})">
                    </section>
                `  
            }).join("");
            
        }
    }
}
}

function adicionarPC(element){

localStorage.setItem(JSON.stringify(element.id), JSON.stringify(element));

}

function imprime(element){
    console.log(element);
}