function converterCelToFar(){
    const valorCelsius = parseInt(document.getElementById("celsius").value)
        const formula = (valorCelsius * 9/5) + 32
            document.getElementById("results").innerHTML = `Temperatura de ${valorCelsius} °Celsius equivale a ${formula.toFixed(1)} °Fahrenheit`
    }

function converterFarToCel(){
    const valorFahrenheit = parseInt(document.getElementById("fahrenheit").value)
        const formula = (valorFahrenheit -32) *5/9
            document.getElementById("results").innerHTML = `Temperatura de ${valorFahrenheit} °Fahrenheit equivale a ${formula.toFixed(1)} °Celsius`
    }

const limpar = () => {
    if(document.getElementById('celsius').value!="") {
            document.getElementById('celsius').value="";

    } else if (document.getElementById('fahrenheit').value!="") {
                document.getElementById('fahrenheit').value="";

    }   
    return limpar
}


// Formulas

// Celsius para Fahrenheit = (0°C * 9/5) + 32 = 32°F

// Fahrenheit para Celsius = (32°F -32) * 5/9 = 0°C 
