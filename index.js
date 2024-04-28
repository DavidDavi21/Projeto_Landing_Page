var pessoa1 = window.document.getElementById("pessoa1")
var pessoa2 = window.document.getElementById("pessoa2")
var pessoa2 = window.document.getElementById("pessoa3")
var setaD = window.document.getElementById("seta-direita")
var setaE = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    pessoa1.style = "display:none"
    pessoa3.style = "display:flex"
    setaD.style = "display:none"
    setaE.style = "display:flex; margin:90px 0px 0px 5px"
}

function RolarParaEsquerda() {
    pessoa1.style = "display:flex"
    pessoa3.style = "display:none"
    setaD.style = "display:flex"
    setaE.style = "display:none"
}