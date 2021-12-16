import "./css/style.scss";

let button = document.getElementsByClassName('operande') as HTMLCollectionOf<Element>;
let para = document.getElementById('calculSpace') as HTMLParagraphElement;
let equal = document.getElementById('equal') as HTMLElement;
let reset = document.getElementById('reset') as HTMLElement;

for (let buttonElement of button) {
    buttonElement.addEventListener('click', function () {
        para.innerHTML += buttonElement.innerHTML;
    })
}

equal.addEventListener('click', function () {
    para.innerHTML = Function("return " + para.innerHTML)();

})

reset.addEventListener('click', function () {
    para.innerHTML = "";
})