<<<<<<< HEAD
function calcularImc(peso, altura) {
    if (altura <= 0) {
        throw new Error("Altura deve ser maior que zero.");
    }
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Desnutrido";
    } else if (imc < 24.9) {
        return "Peso Normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

module.exports = { calcularImc, classificarImc };
=======
function calcularImc(peso, altura) {
    if (altura <= 0) {
        throw new Error("Altura deve ser maior que zero.");
    }
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Desnutrido";
    } else if (imc < 24.9) {
        return "Peso Normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

export const calculateImc = calcularImc;
export const classifyImc = classificarImc;
>>>>>>> 0af2d16a1cdaa06eeaa60c798480d8672c01257b
