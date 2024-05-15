(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let sum1 = 0;
    let byteCount1 = 0;
    document.querySelector(".page__reset").addEventListener("click", (function() {
        deberts_reset();
    }));
    document.querySelector(".deberts__submit--one").addEventListener("click", (function() {
        addNumber1();
    }));
    document.querySelector(".deberts__byte--one").addEventListener("click", (function() {
        addByte1();
    }));
    document.querySelector(".deberts__bella--one").addEventListener("click", (function() {
        addTwo1();
    }));
    document.querySelector(".deberts__terts--one").addEventListener("click", (function() {
        addThree1();
    }));
    document.querySelector(".deberts__poltina--one").addEventListener("click", (function() {
        addFour1();
    }));
    function addNumber1() {
        let inputValue = parseFloat(document.querySelector(".deberts__input--one").value);
        if (!isNaN(inputValue)) {
            let currentResult = parseFloat(document.getElementById("result1").innerText);
            let numbersEnteredDiv = document.getElementById("numbersEntered1");
            numbersEnteredDiv.innerHTML += `<div>${inputValue}</div>`;
            let newResult = currentResult + inputValue;
            document.getElementById("result1").innerText = newResult;
            if (newResult >= 1001) document.getElementById("result1").innerText = "Переможці " + newResult;
            document.querySelector(".deberts__input--one").value = "";
        }
    }
    function addByte1() {
        byteCount1++;
        let numbersEnteredDiv = document.getElementById("numbersEntered1");
        numbersEnteredDiv.innerHTML += `<div>байт ${byteCount1}</div>`;
        if (byteCount1 >= 3) {
            let currentResult = parseFloat(document.getElementById("result1").innerText);
            let newResult = currentResult - 10;
            document.getElementById("result1").innerText = newResult;
        }
    }
    function addTwo1() {
        let currentResult = parseFloat(document.getElementById("result1").innerText);
        let newResult = currentResult + 20;
        document.getElementById("result1").innerText = newResult;
    }
    function addThree1() {
        let currentResult = parseFloat(document.getElementById("result1").innerText);
        let newResult = currentResult + 30;
        document.getElementById("result1").innerText = newResult;
    }
    function addFour1() {
        let currentResult = parseFloat(document.getElementById("result1").innerText);
        let newResult = currentResult + 40;
        document.getElementById("result1").innerText = newResult;
    }
    let sum2 = 0;
    let byteCount2 = 0;
    document.querySelector(".deberts__submit--two").addEventListener("click", (function() {
        addNumber2();
    }));
    document.querySelector(".deberts__byte--two").addEventListener("click", (function() {
        addByte2();
    }));
    document.querySelector(".deberts__bella--two").addEventListener("click", (function() {
        addTwo2();
    }));
    document.querySelector(".deberts__terts--two").addEventListener("click", (function() {
        addThree2();
    }));
    document.querySelector(".deberts__poltina--two").addEventListener("click", (function() {
        addFour2();
    }));
    function addNumber2() {
        let inputValue = parseFloat(document.querySelector(".deberts__input--two").value);
        if (!isNaN(inputValue)) {
            let currentResult = parseFloat(document.getElementById("result2").innerText);
            let numbersEnteredDiv = document.getElementById("numbersEntered2");
            numbersEnteredDiv.innerHTML += `<div>${inputValue}</div>`;
            let newResult = currentResult + inputValue;
            document.getElementById("result2").innerText = newResult;
            if (newResult >= 1001) document.getElementById("result2").innerText = "Переможці " + newResult;
            document.querySelector(".deberts__input--two").value = "";
        }
    }
    function addByte2() {
        byteCount2++;
        let numbersEnteredDiv = document.getElementById("numbersEntered2");
        numbersEnteredDiv.innerHTML += `<div>байт ${byteCount2}</div>`;
        if (byteCount2 >= 3) {
            let currentResult = parseFloat(document.getElementById("result2").innerText);
            let newResult = currentResult - 10;
            document.getElementById("result2").innerText = newResult;
        }
    }
    function addTwo2() {
        let currentResult = parseFloat(document.getElementById("result2").innerText);
        let newResult = currentResult + 20;
        document.getElementById("result2").innerText = newResult;
    }
    function addThree2() {
        let currentResult = parseFloat(document.getElementById("result2").innerText);
        let newResult = currentResult + 30;
        document.getElementById("result2").innerText = newResult;
    }
    function addFour2() {
        let currentResult = parseFloat(document.getElementById("result2").innerText);
        let newResult = currentResult + 40;
        document.getElementById("result2").innerText = newResult;
    }
    function deberts_reset() {
        document.getElementById("numbersEntered1").innerHTML = "";
        document.getElementById("result1").innerText = "0";
        sum1 = "";
        byteCount1 = "";
        input1.value = "";
        document.getElementById("numbersEntered2").innerHTML = "";
        document.getElementById("result2").innerText = "0";
        sum2 = "";
        byteCount2 = "";
        input2.value = "";
    }
    const input1 = document.querySelector(".deberts__input--one");
    const input2 = document.querySelector(".deberts__input--two");
    input1.addEventListener("input", (function() {
        const value = parseFloat(input1.value);
        const result = 162 - value;
        input2.value = result;
    }));
    input2.addEventListener("input", (function() {
        const value = parseFloat(input2.value);
        const result = 162 - value;
        input1.value = result;
    }));
    window.addEventListener("load", (function() {
        if (localStorage.getItem("pageData")) {
            const savedData = JSON.parse(localStorage.getItem("pageData"));
            document.getElementById("result1").innerText = savedData.result1;
            document.getElementById("numbersEntered1").innerHTML = savedData.numbersEntered1;
            document.getElementById("result2").innerText = savedData.result2;
            document.getElementById("numbersEntered2").innerHTML = savedData.numbersEntered2;
        }
    }));
    function saveData() {
        const pageData = {
            result1: document.getElementById("result1").innerText,
            numbersEntered1: document.getElementById("numbersEntered1").innerHTML,
            result2: document.getElementById("result2").innerText,
            numbersEntered2: document.getElementById("numbersEntered2").innerHTML
        };
        localStorage.setItem("pageData", JSON.stringify(pageData));
    }
    document.querySelectorAll(".deberts__submit, .deberts__byte, .deberts__bella, .deberts__terts, .deberts__poltina, .deberts__input").forEach((function(element) {
        element.addEventListener("click", saveData);
        element.addEventListener("input", saveData);
    }));
    window["FLS"] = true;
    isWebp();
})();