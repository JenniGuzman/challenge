const ingresoTexto = document.getElementById
("ingresoTexto");

const botonEncriptar = document.getElementById
("botonEncriptar");

const botonDesencriptar = document.getElementById
("botonDesencriptar");

const botonCopiar = document.getElementById
("botonCopiar");

const mensajeFinal = document.getElementById
("mensajeFinal");

const pantera_rosa = document.getElementById
("pantera_rosa");

const rightInfo = document.getElementById
("rightInfo")

const right = document.getElementById
("right")


//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    pantera_rosa.style.display = "none";

    rightInfo.style.display = "none";
    botonCopiar.style.display = "block"
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}


botonEncriptar.addEventListener("click", ()=> {
const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText){
        for(let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
            };
        };
        return newText
    }
     
    const textoEncriptado = encriptar(texto)

     remplace(encriptar(texto));

  });

botonDesencriptar.addEventListener("click", ()=> {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText){
        for (let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText
    }
    const textoDesencriptado = desencriptar(texto)

    remplace(desencriptar(texto));

});