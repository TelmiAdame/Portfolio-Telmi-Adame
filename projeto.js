

//FUNÇÃO FECHAR A BOLHA QUANDO CLICAR NO 'a' 
//Identificar o clique do menu
//Fechar a bolha 


//TESTE 01
//Quando clicar em qualquer elemento a começa a rodar a função que deixa o input checked falso
function fecharMenu(){
    let menuburguer = document.getElementById('menu-burguer')
    menuburguer.checked = false
}

//FUNÇÃO para aparecer textos do seção trajetória ao clicar no retangulo/circulo correspondente a cada cor. 
function clickbox(numeroClicado){

    let listabox = document.getElementsByClassName('box')
    for(let indice in listabox){
        listabox[indice]
        let indiceCerto = parseInt(indice) + 2 
        let boxAtivo = document.getElementById('txt-box'+ indiceCerto)
        let anobox = document.getElementById('ano-box' + indiceCerto)
        if(boxAtivo && boxAtivo.style.display === 'block' && indiceCerto !== numeroClicado){
            boxAtivo.style.display = 'none'
            anobox.style.display = "block";
        }
    }
    
    let anobox = document.getElementById('ano-box' + numeroClicado)
    let txtbox = document.getElementById('txt-box' + numeroClicado)

    if(anobox.style.display === 'block' && txtbox.style.display === "none"){
        anobox.style.display = 'none';
        txtbox.style.display = 'block';
    }else{
        txtbox.style.display = "none";
        anobox.style.display = "block";
    }
}

let listabox = document.getElementsByClassName('box')




