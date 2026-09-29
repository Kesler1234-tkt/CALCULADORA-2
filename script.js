function suma() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let resultado = n1 + n2;

    document.getElementById("resultado").innerText = resultado;
}

function resta() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado").innerText = resultado;
}

function multiplicacion() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado").innerText = resultado;
}

function division() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    if (n2 === 0) {
        document.getElementById("resultado").innerText = "Error: División por cero";
        return;
    }
    let resultado = n1 / n2;
    document.getElementById("resultado").innerText = resultado;
}

function potencia() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let resultado = n1 ** n2;
    document.getElementById("resultado").innerText = resultado;
}

function raiz() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let resultado = Math.sqrt(n1);
    document.getElementById("resultado").innerText = resultado;
}

const botonSuma = document.getElementById("suma");
botonSuma.addEventListener("click", suma);

const botonResta = document.getElementById("resta");
botonResta.addEventListener("click", resta);

const botonMultiplicacion = document.getElementById("multiplicacion");
botonMultiplicacion.addEventListener("click", multiplicacion);

const botonDivision = document.getElementById("division");
botonDivision.addEventListener("click", division);

const botonPotencia = document.getElementById("potencia");
botonPotencia.addEventListener("click", potencia);

const botonRaiz = document.getElementById("raiz");
botonRaiz.addEventListener("click", raiz);
