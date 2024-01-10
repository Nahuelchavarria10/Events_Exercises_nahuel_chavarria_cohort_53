//Events Exercise

//1//

function changeColor(params) {
    const $square = document.getElementById("squareOne")
    if ($square.classList.contains("bg-gray-300")) {
        $square.classList.remove("bg-gray-300")
        $square.classList.add("bg-blue-300")
        $square.textContent = "blue"
    }
    else if ($square.classList.contains("bg-blue-300")) {
        $square.classList.remove("bg-blue-300")
        $square.classList.add("bg-red-300")
        $square.textContent = "red"
    }
    else {
        $square.classList.remove("bg-red-300")
        $square.classList.add("bg-gray-300")
        $square.textContent = "gray"
    }
}


//2//

const $squareTwo = document.getElementById("squareTwo")
const $inputText = document.getElementById("inputText")
const $resetValue = document.getElementById("resetValue")
$inputText.addEventListener("input", (e) => {
    const valueText = `${e.target.value}`
    $squareTwo.textContent = valueText
})
$resetValue.addEventListener("click", () => {
    $squareTwo.textContent = ""
    $inputText.value = ""
})

//3//

function CalculateMC() {
    const $inputEstatura = document.getElementById("inputEstatura")
    const $inputPeso = document.getElementById("inputPeso")
    const $inputResultado = document.getElementById("inputResultado")
    const resultadoMC = $inputPeso.value / (($inputEstatura.value / 100) ** 2);
    const resultado = Number(resultadoMC.toFixed(1));
    $inputResultado.value = resultado
}

//4//
function convert() {
    const $inputLocal = document.getElementById("inputLocal")
    const $inputDolar = document.getElementById("inputDolar")
    let dolar = 500
    let resultado = Number($inputLocal.value) / dolar
    $inputDolar.value = (resultado).toFixed(2)
}







const $inputLocalTwo = document.getElementById("inputLocalTwo")
const $inputDolarTwo = document.getElementById("inputDolarTwo")
const $convertTwo = document.getElementById("convertTwo")
const $deleteTwo = document.getElementById("deleteTwo")
$convertTwo.addEventListener("click", function () {
    let dolar = 500
    let resultado = Number($inputLocalTwo.value) / dolar
    $inputDolarTwo.value = (resultado).toFixed(2)
})

$deleteTwo.addEventListener("click", () => {
    $inputLocalTwo.value = ""
    $inputDolarTwo.value = ""
})







const $inputDolarThree = document.getElementById("inputDolarThree")
const $inputLocalThree = document.getElementById("inputLocalThree")
const $convertThree = document.getElementById("convertThree")

function deleteThree() {
    $inputDolarThree.value = ""
    $inputLocalThree.value = ""
}

$convertThree.addEventListener("click", function () {
    let dolar = 500
    let resultado = Number($inputDolarThree.value) * dolar
    $inputLocalThree.value = (resultado).toFixed(2)
})