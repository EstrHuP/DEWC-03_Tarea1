"use strict";

const pushButton = document.getElementById("push-button"); // Añadir a la pila
const popButton = document.getElementById("pop-button"); // Descompilar elementos de pila
const errorDiv = document.getElementById("error");
const stackDiv = document.getElementById("stack");
const num = document.getElementById("num"); // Text field

const NUMBER_STACK = create();

pushButton.addEventListener("click", pushNumber);
popButton.addEventListener("click", popNumber);
num.addEventListener("focus", cleanData);

function pushNumber() {
    errorDiv.innerHTML = "";

    try {
        push(NUMBER_STACK, Number.parseInt(num.value));
        stackDiv.innerHTML = toString(NUMBER_STACK);
    } catch (error) {
        errorDiv.innerHTML = error;
    }
}

function popNumber() {
    errorDiv.innerHTML = "";

    try {
        pop(NUMBER_STACK);
        stackDiv.innerHTML = toString(NUMBER_STACK);
    } catch (error) {
        errorDiv.innerHTML = error;
    }
}

function cleanData() {
    num.value = "";
}
