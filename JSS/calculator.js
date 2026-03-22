let Ac = document.querySelector("#Ac");
let Del = document.querySelector("#Del");
let slash = document.querySelector("#slash");
let modulo = document.querySelector("#modulo");

let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let mul = document.querySelector("#mul");

let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let minus = document.querySelector("#minus");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let plus = document.querySelector("#plus");

let Dzero = document.querySelector("#Dzero");
let Szero = document.querySelector("#Szero");
let dot = document.querySelector("#Dot");
let equals = document.querySelector("#equals");


let inp = document.querySelector(".inp");
let para = document.querySelector(".para");

// let count = 0;   // for dot count
let len;           // for inp.innerhtml length
let arr;         // for split the string
let res;         // for result;


Ac.onclick = (e) => {
    para.style.visibility = "hidden";
    // count = 0;
    inp.style.color = "rgba(245, 245, 245, 0.39)";
    let newinp = inp.innerHTML = "0";
    inp.innerHTML = newinp;
};

Del.onclick = () => {
    para.style.visibility = "hidden";
    len = inp.innerHTML.length;
    // if (inp.innerHTML[len - 1 === "."]) {
    //     count--;
    // }

    if (inp.innerHTML === "0") {
        inp.innerHTML = "0";
    } else {
        newinp = inp.innerHTML.slice(0, len - 1);
        inp.innerHTML = newinp;
    }


    if (inp.innerHTML === "") {
        inp.style.color = "rgba(245, 245, 245, 0.39)";
        newinp = inp.innerHTML = "0";
        inp.innerHTML = newinp;
    }

};

slash.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML.includes("/") || inp.innerHTML.includes("%") || inp.innerHTML.includes("x") || inp.innerHTML.includes("-") || inp.innerHTML.includes("+") || inp.innerHTML.includes("=")) {
        newinp = inp.innerHTML.concat("");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML === "0") {
        inp.innerHTML = "0";
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("/");
        inp.innerHTML = newinp;
    }
}

modulo.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML.includes("/") || inp.innerHTML.includes("%") || inp.innerHTML.includes("x") || inp.innerHTML.includes("-") || inp.innerHTML.includes("+") || inp.innerHTML.includes("=")) {
        newinp = inp.innerHTML.concat("");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML === "0") {
        inp.innerHTML = "0";
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("%");
        inp.innerHTML = newinp;

    }

}

seven.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("7");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("7");
        inp.innerHTML = newinp;

    }
};

eight.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("8");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("8");
        inp.innerHTML = newinp;

    }
};

nine.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("9");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("9");
        inp.innerHTML = newinp;

    }
};

mul.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML.includes("/") || inp.innerHTML.includes("%") || inp.innerHTML.includes("x") || inp.innerHTML.includes("-") || inp.innerHTML.includes("+") || inp.innerHTML.includes("=")) {
        newinp = inp.innerHTML.concat("");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML === "0") {
        inp.innerHTML = "0";
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("x");
        inp.innerHTML = newinp;

    }
};

four.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("4");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("4");
        inp.innerHTML = newinp;

    }
};

five.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("5");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("5");
        inp.innerHTML = newinp;

    }
};

six.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("6");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("6");
        inp.innerHTML = newinp;

    }
};

minus.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML.includes("/") || inp.innerHTML.includes("%") || inp.innerHTML.includes("x") || inp.innerHTML.includes("-") || inp.innerHTML.includes("+") || inp.innerHTML.includes("=")) {
        newinp = inp.innerHTML.concat("");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML === "0") {
        inp.innerHTML = "0";
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("-");
        inp.innerHTML = newinp;

    }
};

one.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("1");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("1");
        inp.innerHTML = newinp;

    }
};

two.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("2");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("2");
        inp.innerHTML = newinp;

    }
};

three.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("3");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("3");
        inp.innerHTML = newinp;

    }
};

plus.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML.includes("/") || inp.innerHTML.includes("%") || inp.innerHTML.includes("x") || inp.innerHTML.includes("-") || inp.innerHTML.includes("+") || inp.innerHTML.includes("=")) {
        newinp = inp.innerHTML.concat("");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML === "0") {
        inp.innerHTML = "0";
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("+");
        inp.innerHTML = newinp;

    }
};

Dzero.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("00");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length >= 9) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("00");
        inp.innerHTML = newinp;

    }
};

Szero.onclick = () => {
    para.style.visibility = "hidden";
    if (inp.innerHTML === "0") {
        newinp = inp.innerHTML = "";
        inp.innerHTML = newinp;
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("0");
        inp.innerHTML = newinp;
    } else if (inp.innerHTML.length === 10) {
        para.style.visibility = "visible";
    } else {
        inp.style.color = "white";
        newinp = inp.innerHTML.concat("0");
        inp.innerHTML = newinp;

    }
};


dot.onclick = () => {
    para.style.visibility = "hidden";
    if(inp.innerHTML.length >= 10){
        para.style.visibility = "visible";
    }else{
        inp.style.color = "white";
        newinp = inp.innerHTML.concat(".");
        inp.innerHTML = newinp;
    }
};

equals.onclick = () => {
    para.style.visibility = "hidden";
    if(inp.innerHTML === "0"){
        res = "0";
    }else
    if (inp.innerHTML.includes("/")) {
        arr = inp.innerHTML.split("/");
        res = Number(arr[0]) / Number(arr[1]);
    } else if (inp.innerHTML.includes("%")) {
        arr = inp.innerHTML.split("%");
        res = Number(arr[0]) % Number(arr[1]);
    } else if (inp.innerHTML.includes("x")) {
        arr = inp.innerHTML.split("x");
        res = Number(arr[0]) * Number(arr[1]);
    } else if (inp.innerHTML.includes("-")) {
        arr = inp.innerHTML.split("-");
        res = Number(arr[0]) - Number(arr[1]);
    } else {
        arr = inp.innerHTML.split("+");
        res = Number(arr[0]) + Number(arr[1]);
    }

     if (res.length > 10) {
        para.style.visibility = "visible";
    }

    inp.innerHTML = res;

};