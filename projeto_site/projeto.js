
// Função para fechar bolha do menu ao clicar nos itens do menu
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


//TENTATIVA 01
function startModal(){
    let modal = document.getElementsByClassName('modal')
    modal.style = 'visibility: visible;'
}

//TENTATIVA 02
function startModal(){
    let modal = document.getElementsByClassName('modal')
    if(modal.style.display === 'none') {
        modal.style.display = 'block';
    }
}