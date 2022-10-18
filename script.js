function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo

    return titulo
}


function trocarImagem(filename, animalName) {
    document.querySelector('.imagem').setAttribute("src", 'Images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalName);

}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(animal) //
}





