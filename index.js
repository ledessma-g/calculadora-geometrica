function triangulo(){
    let baseTriangulo = document.querySelector("#base-triangulo").value
    let alturaTriangulo = document.querySelector("#altura-triangulo").value

    if(baseTriangulo > 0 && alturaTriangulo > 0){
        let resultado = (baseTriangulo * alturaTriangulo)/2
        document.querySelector("#span-triangulo").innerHTML = resultado
    }else{
        alert("Ningún valor puede ser menor o igual a cero. Por favor ingrese valores válidos")
    }
}

function cuadrado(){
    let ladoCuadrado = document.querySelector("#lado-cuadrado").value

    if(ladoCuadrado > 0){
        let resultado = ladoCuadrado ** 2
        document.querySelector("#span-cuadrado").innerHTML = resultado
    }else{
        alert("Ningún valor puede ser menor o igual a cero. Por favor ingrese valores válidos")
    }
}

function rectangulo(){
    let baseRectangulo = document.querySelector("#base-rectangulo").value
    let alturaRectangulo = document.querySelector("#altura-rectangulo").value

    if(baseRectangulo > 0 && alturaRectangulo > 0){
        let resultado = (baseRectangulo * alturaRectangulo)
        document.querySelector("#span-rectangulo").innerHTML = resultado
    }else{
        alert("Ningún valor puede ser menor o igual a cero. Por favor ingrese valores válidos")
    }
}

function circulo(){
    let radioCirculo = document.querySelector("#radio-circulo").value

    if(radioCirculo > 0){
        let resultado = (3.1416 * (radioCirculo) ** 2)
        document.querySelector("#span-circulo").innerHTML = resultado.toFixed(2)
    }else{
        alert("Ningún valor puede ser menor o igual a cero. Por favor ingrese valores válidos")
    }
}

function trapecio(){
    let baseMayorTrapecio = document.querySelector("#base-ma-trapecio").value
    let baseMenorTrapecio = document.querySelector("#base-me-trapecio").value
    let alturaTrapecio = document.querySelector("#altura-trapecio").value

    if(baseMayorTrapecio > 0 && baseMenorTrapecio > 0 && alturaTrapecio > 0){
        let resultado = ((baseMayorTrapecio + baseMenorTrapecio) * alturaTrapecio) / 2
        document.querySelector("#span-trapecio").innerHTML = resultado
    }else{
        alert("Ningún valor puede ser menor o igual a cero. Por favor ingrese valores válidos")
    }
}

function rombo(){
    let diagMayor = document.querySelector("#diag-ma-rombo").value
    let diagMenor = document.querySelector("#diag-me-rombo").value

    if(diagMayor > 0 && diagMenor > 0){
        let resultado = (diagMayor * diagMenor) / 2
        document.querySelector("#span-rombo").innerHTML = resultado
    }else{
        alert("Ningún valor puede ser menor o igual a cero. Por favor ingrese valores válidos")
    }
}